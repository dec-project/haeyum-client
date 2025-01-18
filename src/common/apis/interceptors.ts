import type { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { useAuthStore } from '../stores/useAuthStore';

export const requestInterceptor = (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
  const {
    accessToken,
    //  refreshToken
  } = useAuthStore.getState();

  if (!config?.headers) {
    return config;
  }

  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  // if (refreshToken) {
  //   config.headers[''] = refreshToken;
  // }
  return config;
};

export const successInterceptor = (response: AxiosResponse): AxiosResponse => {
  return response;
};

export class ApiError extends Error {
  public statusCode: number;
  public details?: any;

  constructor(statusCode: number, message: string, details?: any) {
    super(message);
    this.statusCode = statusCode;
    this.details = details;
    this.name = 'ApiError';
  }
}

interface ErrorResponse {
  code: string;
  message: string;
}

export const errorInterceptor = async (error: AxiosError<ErrorResponse>): Promise<void> => {
  if (error.response) {
    const { status, data } = error.response;

    const apiError =
      status >= 400 && status < 500
        ? new ApiError(status, data?.message || '클라이언트 오류가 발생했습니다.', data)
        : new ApiError(status, data?.message || '서버 처리 중 오류가 발생했습니다.', data);

    console.error(apiError);
    return Promise.reject(apiError);
  } else if (error.request) {
    const apiError = new ApiError(0, '요청은 완료했으나, 서버로부터 응답을 받지 못했습니다.', error.request);
    return Promise.reject(apiError);
  } else {
    const apiError = new ApiError(0, '서버로부터 응답이 없습니다.', error.message);
    return Promise.reject(apiError);
  }
};
