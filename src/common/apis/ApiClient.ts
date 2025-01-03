import axios, { AxiosError, AxiosResponse, isAxiosError } from 'axios';

// const baseURL = import.meta.env.VITE_API_BASE_URL;
const baseURL = '';

const axiosInstance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

const ApiClient = {
  async get<T>(url: string, params?: unknown): Promise<T> {
    try {
      const response: AxiosResponse<T> = await axiosInstance.get(url, { params });
      return response.data;
    } catch (error) {
      if (isAxiosError(error)) {
        throw handleError(error);
      } else {
        throw new Error('알 수 없는 에러가 발생했습니다.');
      }
    }
  },
};

const handleError = (error: AxiosError): Error => {
  if (error.response) {
    console.error('잘못된 응답이 왔습니다.');
  } else if (error.request) {
    console.error('요청은 완료했으나, 서버로부터 응답을 받지 못했습니다.');
  } else {
    console.error('요청 설정 중 문제가 발생했습니다.');
  }
  return error;
};

export default ApiClient;
