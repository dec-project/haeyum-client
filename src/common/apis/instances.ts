import axios, { AxiosInstance } from 'axios';
import { errorInterceptor, requestInterceptor, successInterceptor } from './interceptors';

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const createAxiosInstance = (baseURL: string, headers: { [key: string]: string }): AxiosInstance => {
  return axios.create({
    baseURL,
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
  });
};

const configureInterceptors = (instance: AxiosInstance): void => {
  instance.interceptors.request.use(requestInterceptor);
  instance.interceptors.response.use(successInterceptor, errorInterceptor);
};

const createApiInstance = (baseURL: string, headers: { [key: string]: string }): AxiosInstance => {
  const instance = createAxiosInstance(baseURL, headers);
  configureInterceptors(instance);
  return instance;
};

export const publicApiInstance = createApiInstance(BASE_URL, {});
export const privateApiInstance = createApiInstance(BASE_URL, {});
