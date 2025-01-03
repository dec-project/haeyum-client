import {
  type AxiosError,
  type AxiosResponse,
  type InternalAxiosRequestConfig,
} from 'axios';
import { getItem } from './localStorage';

export interface ConsoleError {
  status: number;
  data: unknown;
}

export const requestInterceptor = (
  config: InternalAxiosRequestConfig
): InternalAxiosRequestConfig => {
  const token = getItem<string>('token');
  if (token) {
    config.headers.set('Authorization', `Bearer ${token}`);
  }
  return config;
};

export const successInterceptor = (response: AxiosResponse): AxiosResponse => {
  return response;
};

export const errorInterceptor = async (error: AxiosError): Promise<void> => {
  if (error.response?.status === 401) {
    await Promise.reject(error);
  } else {
    if (error.response) {
      const errorMessage: ConsoleError = {
        status: error.response.status,
        data: error.response.data,
      };
      console.error('잘못된 응답이 왔습니다.', errorMessage);
    } else if (error.request) {
      console.error('요청은 완료했으나, 서버로부터 응답을 받지 못했습니다.', error.request);
    } else {
      console.error('요청 설정 중 문제가 발생했습니다.', error.message);
    }
    await Promise.reject(error);
  }
};