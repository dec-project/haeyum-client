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
  return response.data;
};

export class CustomError extends Error {
  public details?: any;

  constructor(message: string, details?: any) {
    super(message);
    this.details = details;
    this.name = this.constructor.name;
  }
}

export class ApiError extends CustomError {
  public statusCode: number;

  constructor(statusCode: number, message: string, details?: any) {
    super(message, details);
    this.statusCode = statusCode;
    this.name = 'ApiError';
  }
}

export class BusinessLogicError extends CustomError {
  constructor(message: string, details?: any) {
    super(message, details);
    this.name = 'BusinessLogicError';
  }
}

export const errorInterceptor = async (error: AxiosError): Promise<void> => {
  if (error.response) {
    const apiError = new ApiError(error.response.status, '서버에서 오류가 발생했습니다.', error.response.data);
    console.error(apiError);
    await Promise.reject(apiError);
  } else if (error.request) {
    const apiError = new ApiError(500, '서버로부터 응답을 받지 못했습니다.', error.request);
    console.error(apiError);
    await Promise.reject(apiError);
  } else {
    const businessLogicError = new BusinessLogicError('요청 설정 중 문제가 발생했습니다.', {
      originalMessage: error.message,
    });
    console.error(businessLogicError);
    await Promise.reject(businessLogicError);
  }
};
