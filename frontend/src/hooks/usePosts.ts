import { useQuery } from '@tanstack/react-query';
import { categoryService } from '@/services/api';

export const usePosts = (categoryId: string | null) => {
  const { 
    data: posts = [], 
    isLoading, 
    error 
  } = useQuery({
    queryKey: ['posts', categoryId],
    queryFn: () => categoryId ? categoryService.getPosts(categoryId) : Promise.resolve([]),
    enabled: !!categoryId
  });
  
  return {
    posts,
    isLoading,
    error
  };
};
