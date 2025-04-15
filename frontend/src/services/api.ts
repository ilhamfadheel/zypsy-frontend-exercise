import axios from 'axios';
import { Category, Post } from '@/types';

const API_URL = 'http://localhost:9000';

const api = axios.create({
  baseURL: API_URL,
});

export const categoryService = {
  getAll: async (): Promise<Category[]> => {
    const response = await api.get('/categories');
    return response.data;
  },
  
  update: async (category: Category): Promise<Category> => {
    const response = await api.put(`/categories/${category.id}`, category);
    return response.data;
  },
  
  getPosts: async (categoryId: string): Promise<Post[]> => {
    const response = await api.get(`/categories/${categoryId}/posts`);
    return response.data;
  }
};

export default api;
