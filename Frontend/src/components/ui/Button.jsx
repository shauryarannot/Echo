import React from 'react';

export const Button = React.forwardRef(({ children, className, variant = "primary", ...props }, ref) => {
  const baseStyles = "px-4 py-2 rounded-md font-medium transition-all duration-300";
  
  let variantStyles = "";
  switch (variant) {
    case "primary":
      variantStyles = "bg-purple-500 hover:bg-purple-600 text-white";
      break;
    case "secondary":
      variantStyles = "bg-gray-200 hover:bg-gray-300 text-gray-800";
      break;
    case "glow":
      variantStyles = "bg-purple-500 hover:bg-purple-600 text-white shadow-glow hover:shadow-glow";
      break;
    default:
      variantStyles = "bg-purple-500 hover:bg-purple-600 text-white";
  }
  
  return (
    <button
      className={`${baseStyles} ${variantStyles} ${className}`}
      ref={ref}
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = 'Button';