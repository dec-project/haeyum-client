import type { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { useAuthStore } from '../stores/useAuthStore';
import { privateApiInstance } from './instances';
import { getItem } from './localStorage';

export const requestInterceptor = (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
  const { accessToken } = useAuthStore.getState();

  if (!config?.headers) {
    return config;
  }

  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
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

interface ErrorResponse {
  code: string;
  message: string;
}

export const errorInterceptor = async (error: AxiosError<ErrorResponse>): Promise<void> => {
  const { config } = error;

  if (!config) {
    throw new Error('요청이 잘못되었습니다.');
  }

  const { refreshToken, setTokens, clearTokens } = useAuthStore.getState();

  const handleLogout = (message: string) => {
    clearTokens();
    window.location.href = '/login';
    return Promise.reject(new Error(message));
  };

  if (!refreshToken) {
    return handleLogout('Refresh Token이 없습니다. 로그인 페이지로 이동합니다.');
  }

  if (error.response?.status === 403) {
    const { code } = error.response.data;

    if (code === 'ET') {
      try {
        const response = await privateApiInstance.get('/refresh');
        const newAccessToken = response.data.accessToken;
        const userId = getItem('userId') as string;

        setTokens(newAccessToken, refreshToken, userId);
        config.headers.Authorization = `Bearer ${newAccessToken}`;
        return privateApiInstance(config);
      } catch {
        return handleLogout('세션이 만료되었습니다. 다시 로그인해주세요.');
      }
    }

    return handleLogout('권한이 없습니다. 로그인 페이지로 이동합니다.');
  }

  if (error.response) {
    const { status, data } = error.response;
    const apiError = new ApiError(status, data?.message || '서버 처리 중 오류가 발생했습니다.', data);
    return Promise.reject(apiError);
  } else if (error.request) {
    const apiError = new ApiError(0, '요청은 완료했으나, 서버로부터 응답을 받지 못했습니다.', error.request);
    return Promise.reject(apiError);
  } else {
    const apiError = new ApiError(0, '서버로부터 응답이 없습니다.', error.message);
    return Promise.reject(apiError);
  }
};
