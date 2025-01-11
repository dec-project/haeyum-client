import type { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { getItem } from './localStorage';

export const requestInterceptor = (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
  const token = getItem<string>('token');
  if (token) {
    config.headers.set('Authorization', `Bearer ${token}`);
  }
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

export class ClientError extends ApiError {
  constructor(statusCode: number, message: string, details?: any) {
    super(statusCode, message, details);
    this.name = 'ClientError';
  }
}

export class ServerError extends ApiError {
  constructor(statusCode: number, message: string, details?: any) {
    super(statusCode, message, details);
    this.name = 'ServerError';
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
        ? new ClientError(status, data?.message || '클라이언트 오류가 발생했습니다.', data)
        : new ServerError(status, data?.message || '서버 처리 중 오류가 발생했습니다.', data);

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
