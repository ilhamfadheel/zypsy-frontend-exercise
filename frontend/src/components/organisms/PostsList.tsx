import React from "react";
import { Divider, Spin } from "antd";
import { PostCard } from "@/components/molecules/PostCard";
import { Card } from "@/components/atoms/Card";
import { Post, Category } from "@/types";

interface PostsListProps {
  posts: Post[];
  categories: Category[];
  selectedCategory: Category | null;
  isLoading: boolean;
  onToggleFavorite: (category: Category) => void;
}

export const PostsList: React.FC<PostsListProps> = ({
  posts,
  categories,
  selectedCategory,
  isLoading,
  onToggleFavorite,
}) => {
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-full">
        <Spin size="large" />
      </div>
    );
  }

  if (!selectedCategory) {
    return (
      <div className="flex justify-center items-center h-full text-gray-500">
        Please select a category to view posts
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <div className="flex justify-center items-center h-full text-gray-500">
        No posts found for this category
      </div>
    );
  }

  return (
    <div className="h-full">
      <Card>
        <div className="px-6 pt-6">
          <h1
            className="text-sm"
            style={{
              color: "#78716C",
              fontFamily: "Inter",
              fontWeight: 500,
              fontSize: "14px",
              lineHeight: "24px",
              letterSpacing: "0%",
            }}
          >
            Found {posts.length} posts of &ldquo;{selectedCategory.name}&rdquo;
          </h1>
        </div>
        <Divider className="my-0" />

        <div className="px-6 py-4">
          {posts.map((post, index) => (
            <React.Fragment key={post.id}>
              <PostCard
                post={post}
                categories={categories}
                onToggleFavorite={onToggleFavorite}
                selectedCategory={selectedCategory}
              />
              {index < posts.length - 1 && <Divider className="my-4" />}
            </React.Fragment>
          ))}
        </div>
      </Card>
      <div className="pb-8"></div>
    </div>
  );
};

export default PostsList;
