export interface Category {
  id: string;
  name: string;
  favorite: boolean;
}

export interface Post {
  id: string;
  description: string;
  date: string;
  categories: string[];
}
