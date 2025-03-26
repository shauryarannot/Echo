import React, { createContext, useContext, useState } from 'react';

const AnimationContext = createContext();

export const useAnimation = () => useContext(AnimationContext);

export const AnimationProvider = ({ children }) => {
  const [animationsEnabled, setAnimationsEnabled] = useState(true);

  const value = {
    animationsEnabled,
    toggleAnimations: () => setAnimationsEnabled(prev => !prev),
  };

  return (
    <AnimationContext.Provider value={value}>
      {children}
    </AnimationContext.Provider>
  );
};