import React from 'react';
import { Button as AntButton } from 'antd';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  children,
  className = '',
  ...props
}) => {
  const variantClasses = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white border-none',
    secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-800 border-none',
    outline: 'bg-transparent hover:bg-gray-50 text-gray-700 border-gray-300'
  };
  
  const buttonClasses = `${variantClasses[variant]} ${className}`;
  
  return (
    <AntButton className={buttonClasses} {...props}>
      {children}
    </AntButton>
  );
};

export default Button;
