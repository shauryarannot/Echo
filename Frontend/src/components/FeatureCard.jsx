import React from 'react';
import { useAnimation } from '../context/AnimationContext';

export default function FeatureCard({ icon, title, description, index = 0 }) {
  const { animationsEnabled } = useAnimation();
  
  return (
    <div
      className={`relative bg-gradient-to-br from-neutral-900 to-neutral-800 p-8 rounded-2xl transition-all duration-500 overflow-hidden group animate-on-scroll ${
        animationsEnabled ? 'hover:shadow-xl hover:-translate-y-2' : ''
      }`}
      style={{
        opacity: 0,
        animation: animationsEnabled ? `fadeUp 0.6s ease forwards ${index * 100 + 200}ms` : 'none'
      }}
    >

      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-indigo-500/20 to-purple-600/20 rounded-full -mr-8 -mt-8 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
      

      <div className={`mb-6 p-4 bg-neutral-800/50 inline-block rounded-xl ${
        animationsEnabled ? 'group-hover:bg-indigo-600/20 group-hover:text-indigo-400' : ''
      } transition-all duration-500`}>
        {icon}
      </div>
      
      <h3 className="text-2xl font-bold mb-3 group-hover:text-white transition-colors duration-300">{title}</h3>
      <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">{description}</p>
      

      <div className="w-0 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mt-6 rounded-full group-hover:w-full transition-all duration-700"></div>
    </div>
  );
}