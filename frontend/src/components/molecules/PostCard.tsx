import React from "react";
import { Post, Category } from "@/types";
import { TagWithStar } from "@/components/atoms/TagWithStar";
import dayjs from "dayjs";

interface PostCardProps {
  post: Post;
  categories: Category[];
  onToggleFavorite: (category: Category) => void;
  selectedCategory?: Category | null;
}

export const PostCard: React.FC<PostCardProps> = ({
  post,
  categories,
  onToggleFavorite,
  selectedCategory,
}) => {
  // Find the categories that this post belongs to
  const postCategories = categories.filter((category) =>
    post.categories.includes(category.id)
  );

  // Format the date using dayjs
  const formattedDate = dayjs(post.date).format("dddd, MMMM D YYYY");

  return (
    <div>
      <div
        className="mb-2 font-inter text-zypsy-span font-medium"
        style={{
          color: "#1A2E05",
          fontFamily: "Inter",
          fontWeight: 600,
          fontSize: "14px",
          lineHeight: "24px",
          letterSpacing: "0%",
        }}
      >
        {formattedDate}
      </div>
      <p
        className="mb-4 font-inter text-zypsy-p"
        style={{
          color: "#78716C",
          fontFamily: "Inter",
          fontWeight: 400,
          fontSize: "14px",
          lineHeight: "24px",
          letterSpacing: "0%",
        }}
      >
        {post.description}
      </p>
      <div className="flex flex-wrap">
        {postCategories.map((category) => (
          <TagWithStar
            key={category.id}
            category={category}
            onToggleFavorite={onToggleFavorite}
            isActive={selectedCategory?.id === category.id}
          />
        ))}
      </div>
    </div>
  );
};

export default PostCard;
