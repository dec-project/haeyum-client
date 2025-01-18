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

const configureRequestInterceptors = (instance: AxiosInstance): void => {
  instance.interceptors.request.use(requestInterceptor);
};

const configureResponseInterceptors = (instance: AxiosInstance): void => {
  instance.interceptors.response.use(successInterceptor, errorInterceptor);
};

const createApiInstance = (
  baseURL: string,
  headers: { [key: string]: string },
  options: {
    useRequestInterceptors?: boolean;
    useResponseInterceptors?: boolean;
  } = { useRequestInterceptors: false, useResponseInterceptors: false },
): AxiosInstance => {
  const instance = createAxiosInstance(baseURL, headers);

  if (options.useRequestInterceptors) {
    configureRequestInterceptors(instance);
  }

  if (options.useResponseInterceptors) {
    configureResponseInterceptors(instance);
  }

  return instance;
};

export const publicApiInstance = createApiInstance(BASE_URL, {}, { useResponseInterceptors: true });

export const privateApiInstance = createApiInstance(
  BASE_URL,
  {},
  { useRequestInterceptors: true, useResponseInterceptors: true },
);
