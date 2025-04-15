"use client";

import React, { useState, useEffect } from "react";
import { useCategories } from "@/hooks/useCategories";
import { usePosts } from "@/hooks/usePosts";
import { CategoryList } from "@/components/organisms/CategoryList";
import { PostsList } from "@/components/organisms/PostsList";

export default function Home() {
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(
    null
  );
  const {
    categories,
    isLoading: categoriesLoading,
    toggleFavorite,
  } = useCategories();
  const { posts, isLoading: postsLoading } = usePosts(selectedCategoryId);

  const selectedCategory = selectedCategoryId
    ? categories.find((cat) => cat.id === selectedCategoryId) || null
    : null;

  // Load selected category from localStorage on initial render
  useEffect(() => {
    const savedCategoryId = localStorage.getItem("selectedCategoryId");
    if (savedCategoryId) {
      setSelectedCategoryId(savedCategoryId);
    }
  }, []);

  // Save selected category to localStorage when it changes
  useEffect(() => {
    if (selectedCategoryId) {
      localStorage.setItem("selectedCategoryId", selectedCategoryId);
    }
  }, [selectedCategoryId]);

  const handleSelectCategory = (categoryId: string) => {
    setSelectedCategoryId(categoryId);
  };

  return (
    <div className="flex h-screen bg-white">
      <div className="w-80 border-r border-gray-200 overflow-hidden">
        <CategoryList
          categories={categories}
          selectedCategoryId={selectedCategoryId}
          onSelectCategory={handleSelectCategory}
          onToggleFavorite={toggleFavorite}
        />
      </div>

      <div
        className="flex-1 overflow-y-auto pt-[54px] mx-6"
        style={{
          scrollbarWidth: "none" /* Firefox */,
          msOverflowStyle: "none" /* IE and Edge */,
        }}
      >
        <style jsx>{`
          div::-webkit-scrollbar {
            display: none; /* Chrome, Safari and Opera */
          }
        `}</style>
        <PostsList
          posts={posts}
          categories={categories}
          selectedCategory={selectedCategory}
          isLoading={categoriesLoading || postsLoading}
          onToggleFavorite={toggleFavorite}
        />
      </div>
    </div>
  );
}
