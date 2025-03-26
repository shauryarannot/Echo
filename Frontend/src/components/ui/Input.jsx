import React from 'react';

export const Input = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <input
      className={`w-full px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 ${className}`}
      ref={ref}
      {...props}
    />
  );
});

Input.displayName = 'Input';