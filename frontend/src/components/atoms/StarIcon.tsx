import React from 'react';
import { StarFilled, StarOutlined } from '@ant-design/icons';

interface StarIconProps {
  filled?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  className?: string;
  color?: string;
}

export const StarIcon: React.FC<StarIconProps> = ({ 
  filled = false, 
  onClick,
  className = '',
  color
}) => {
  const starStyle = color ? { color } : {};
  
  return (
    <button 
      onClick={onClick}
      className={`focus:outline-none ${className}`}
      aria-label={filled ? "Remove from favorites" : "Add to favorites"}
    >
      {filled ? (
        <StarFilled className={`text-yellow-400 text-lg ${className}`} style={starStyle} />
      ) : (
        <StarOutlined className={`text-gray-400 hover:text-yellow-400 text-lg ${className}`} style={starStyle} />
      )}
    </button>
  );
};

export default StarIcon;
