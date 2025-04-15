import React, { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div 
      className={`bg-white border border-gray-200 rounded-sm shadow-sm ${className}`}
      style={{ 
        borderColor: '#f0f0f0',
      }}
    >
      {children}
    </div>
  );
};

export default Card;
