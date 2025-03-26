import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useAnimation } from '../context/AnimationContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { animationsEnabled } = useAnimation();
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <nav 
      className={`container mx-auto px-6 flex items-center justify-between fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-neutral-900/90 backdrop-blur-md py-3 shadow-lg' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="flex items-center">
        <span 
          className={`text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600 ${
            animationsEnabled ? 'animate-glow' : ''
          }`}
        >
          Echo
        </span>
      </div>
      
      <div className="flex items-center space-x-6">
        <Link
          to="/login"
          className="hidden md:block text-gray-300 hover:text-white transition-colors relative group"
        >
          <span>Login</span>
          <span className="absolute inset-x-0 bottom-0 h-0.5 bg-indigo-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
        </Link>
        
        <Link
          to="/messagecards"
          className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 px-6 py-2 rounded-full transition-all duration-300 font-medium shadow-md hover:shadow-lg hover:shadow-indigo-500/20"
        >
          Open Echo
        </Link>
      </div>
    </nav>
  );
}