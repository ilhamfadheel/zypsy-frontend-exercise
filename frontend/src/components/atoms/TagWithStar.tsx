import React from "react";
import { Tag } from "antd";
import { StarIcon } from "./StarIcon";
import { Category } from "@/types";

interface TagWithStarProps {
  category: Category;
  onToggleFavorite: (category: Category) => void;
  isActive?: boolean;
}

export const TagWithStar: React.FC<TagWithStarProps> = ({
  category,
  onToggleFavorite,
  isActive = false,
}) => {
  return (
    <Tag
      className="inline-flex items-center m-0"
      style={{
        width: "auto",
        minWidth: 125,
        height: 40,
        border: "1px solid #1A2E05",
        borderRadius: "4px",
        padding: "8px 16px 8px 24px",
        backgroundColor: isActive ? "white" : "#1A2E05",
        color: isActive ? "#1A2E05" : "white",
        marginRight: "8px",
        marginBottom: "8px",
        gap: "8px",
      }}
    >
      <span
        className="mr-2"
        style={{
          fontFamily: "Inter",
          fontSize: "14px",
          lineHeight: "24px",
          letterSpacing: "0%",
        }}
      >
        {category.name}
      </span>
      <StarIcon
        filled={category.favorite}
        onClick={(e) => {
          e.stopPropagation();
          onToggleFavorite(category);
        }}
        color={isActive ? "#1A2E05" : "white"}
      />
    </Tag>
  );
};

export default TagWithStar;
