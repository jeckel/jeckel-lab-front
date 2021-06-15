import { BlogPost } from '@/models';
import axios, { AxiosResponse } from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3000',
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
export const ApiBlog = {
  getList: (): Promise<BlogPost[]> => requests.get('/posts'),
  get: (id: string): Promise<BlogPost> => requests.get(`/posts/${id}`),
};
