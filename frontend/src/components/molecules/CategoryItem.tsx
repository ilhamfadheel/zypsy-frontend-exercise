import React from "react";
import { StarIcon } from "@/components/atoms/StarIcon";
import { Category } from "@/types";

interface CategoryItemProps {
  category: Category;
  isActive: boolean;
  onClick: () => void;
  onToggleFavorite: () => void;
}

export const CategoryItem: React.FC<CategoryItemProps> = ({
  category,
  isActive,
  onClick,
  onToggleFavorite,
}) => {
  return (
    <div
      style={isActive ? { backgroundColor: "#1A2E05", color: "white" } : {}}
      className={`flex items-center justify-between px-4 py-2 cursor-pointer ${
        isActive ? "" : "text-gray-800 hover:bg-gray-100"
      }`}
      onClick={onClick}
    >
      <span className="font-inter text-zypsy-span">{category.name}</span>
      <StarIcon
        filled={category.favorite}
        onClick={(e: React.MouseEvent) => {
          e.stopPropagation();
          onToggleFavorite();
        }}
        className={isActive ? "text-white" : ""}
      />
    </div>
  );
};

export default CategoryItem;
