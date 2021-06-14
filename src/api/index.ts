import axios, { AxiosResponse } from 'axios';
import { ContactMessageType } from '@/models';
import { ApiResponse } from '@/models/contact.interface';

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
export const ContactMessage = {
  sendContactMessage: (contactMessage: ContactMessageType): Promise<ApiResponse> => requests.post('/contact', contactMessage),
};
