import axios, { AxiosResponse } from 'axios';
import { ContactMessage, ApiResponse } from '@/models';

const instance = axios.create({
  baseURL: 'http://localhost:8001/api',
  timeout: 15000,
});

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
  get: (url: string) => instance.get(url).then(responseBody),
  post: (url: string, body: unknown) => instance.post(url, body).then(responseBody),
  put: (url: string, body: unknown) => instance.put(url, body).then(responseBody),
  delete: (url: string) => instance.delete(url).then(responseBody),
};

// eslint-disable-next-line import/prefer-default-export
export const ContactMessageApi = {
  sendContactMessage: (contactMessage: ContactMessage): Promise<ApiResponse> => requests.post('/contact', contactMessage),
};

export * from './api.blog';
