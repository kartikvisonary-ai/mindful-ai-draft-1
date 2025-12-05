import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold rounded-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-[#D4AF37] text-[#0F1419] hover:bg-[#c49f27] hover:-translate-y-0.5 shadow-lg hover:shadow-xl focus:ring-[#D4AF37]",
    secondary: "bg-[#0F1419] text-white border border-[#D4AF37] hover:bg-[#1a2129] hover:shadow-lg focus:ring-[#0F1419]",
    outline: "bg-transparent text-[#0F1419] border-2 border-[#0F1419] hover:bg-[#0F1419] hover:text-white"
  };

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
