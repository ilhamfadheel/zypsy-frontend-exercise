import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { categoryService } from '@/services/api';
import { Category } from '@/types';

export const useCategories = () => {
  const queryClient = useQueryClient();
  
  const { data: categories = [], isLoading, error } = useQuery({
    queryKey: ['categories'],
    queryFn: categoryService.getAll
  });
  
  const updateCategoryMutation = useMutation({
    mutationFn: (category: Category) => categoryService.update(category),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['categories'] });
    }
  });
  
  const toggleFavorite = (category: Category) => {
    updateCategoryMutation.mutate({
      ...category,
      favorite: !category.favorite
    });
  };
  
  return {
    categories,
    isLoading,
    error,
    toggleFavorite
  };
};
