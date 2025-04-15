import React from "react";
import { Post, Category } from "@/types";
import { TagWithStar } from "@/components/atoms/TagWithStar";

interface PostCardProps {
  post: Post;
  categories: Category[];
  onToggleFavorite: (category: Category) => void;
}

export const PostCard: React.FC<PostCardProps> = ({
  post,
  categories,
  onToggleFavorite,
}) => {
  // Find the categories that this post belongs to
  const postCategories = categories.filter((category) =>
    post.categories.includes(category.id)
  );

  // Format the date
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

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
          />
        ))}
      </div>
    </div>
  );
};

export default PostCard;
