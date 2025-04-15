import React, { useState } from "react";
import type { RadioChangeEvent } from "antd";
import { RadioButton } from "@/components/atoms/RadioButton";
import { TagWithStar } from "@/components/atoms/TagWithStar";
import { Category } from "@/types";

interface CategoryListProps {
  categories: Category[];
  selectedCategoryId: string | null;
  onSelectCategory: (categoryId: string) => void;
  onToggleFavorite: (category: Category) => void;
}

type FilterType = "all" | "favorites";

export const CategoryList: React.FC<CategoryListProps> = ({
  categories,
  selectedCategoryId,
  onSelectCategory,
  onToggleFavorite,
}) => {
  const [filter, setFilter] = useState<FilterType>("all");

  const filteredCategories =
    filter === "all"
      ? categories
      : categories.filter((category) => category.favorite);

  const handleFilterChange = (e: RadioChangeEvent) => {
    setFilter(e.target.value);
  };

  return (
    <div className="bg-white h-full flex flex-col">
      <div
        style={{ backgroundColor: "#1A2E05" }}
        className="text-white p-4 font-bold flex items-center justify-center w-full"
      >
        <h1
          className="font-inter text-zypsy-h1"
          style={{
            fontFamily: "Inter",
            fontWeight: 600,
            fontSize: "14px",
            lineHeight: "24px",
            letterSpacing: "0%",
          }}
        >
          Posts
        </h1>
      </div>

      <div className="p-4 pb-0">
        <div className="flex flex-row space-x-4 mb-4">
          <RadioButton
            value="all"
            checked={filter === "all"}
            onChange={handleFilterChange}
          >
            All categories
          </RadioButton>
          <RadioButton
            value="favorites"
            checked={filter === "favorites"}
            onChange={handleFilterChange}
          >
            Favorite categories
          </RadioButton>
        </div>
      </div>

      <div className="flex flex-col p-4">
        {filteredCategories.map((category) => (
          <div
            key={category.id}
            onClick={() => onSelectCategory(category.id)}
            style={{
              cursor: "pointer",
              marginBottom: "8px",
              width: "100%"
            }}
          >
            <TagWithStar
              category={category}
              onToggleFavorite={onToggleFavorite}
              isActive={selectedCategoryId === category.id}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
