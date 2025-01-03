import axios, { AxiosRequestConfig, AxiosInstance } from 'axios';
import { errorInterceptor, requestInterceptor, successInterceptor } from './interceptors';

export interface ConsoleError {
  status: number;
  data: unknown;
}

const axiosRequestConfig: AxiosRequestConfig = {
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
};

const api: AxiosInstance = axios.create(axiosRequestConfig);

api.interceptors.request.use(requestInterceptor);
api.interceptors.response.use(successInterceptor, errorInterceptor);

export default api;
