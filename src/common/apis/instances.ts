import axios, { AxiosInstance } from 'axios';
import { errorInterceptor, requestInterceptor, successInterceptor } from './interceptors';

const createAxiosInstance = (): AxiosInstance => {
  return axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

const configureInterceptors = (instance: AxiosInstance, requireAuth: boolean): void => {
  if (requireAuth) {
    instance.interceptors.request.use(requestInterceptor);
  }
  instance.interceptors.response.use(successInterceptor, errorInterceptor);
};

const createApiInstance = (requireAuth: boolean = false): AxiosInstance => {
  const instance = createAxiosInstance();
  configureInterceptors(instance, requireAuth);
  return instance;
};

export const publicApiInstance = createApiInstance(false);
export const privateApiInstance = createApiInstance(true);
