import React from "react";

const Textarea = ({ placeholder, className = "", ...props }) => {
  return (
    <textarea
      placeholder={placeholder}
      rows="4"
      className={`w-full px-4 py-2.5 rounded-lg bg-secondary/50 border border-white/10 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 transition-all duration-300 ${className}`}
      {...props}
    />
  );
};

export default Textarea;
