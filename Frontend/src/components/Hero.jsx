import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useAnimation } from '../context/AnimationContext';

export default function Hero() {
  const { animationsEnabled } = useAnimation();
  
  return (
    <section className="relative container mx-auto px-6 py-32 md:py-48 overflow-hidden">

      {animationsEnabled && (
        <>
          <div className="absolute top-20 left-10 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl"></div>
          <div className="absolute top-40 right-20 w-20 h-20 bg-indigo-400/20 rounded-full blur-xl"></div>
        </>
      )}
      
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <h1
          className={`text-6xl md:text-8xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white via-indigo-200 to-white ${
            animationsEnabled ? 'animate-on-scroll' : ''
          }`}
          style={{
            opacity: 0,
            animation: animationsEnabled ? 'fadeUp 0.8s ease forwards' : 'none'
          }}
        >
          Your Place to Connect
        </h1>
        
        <p
          className={`text-2xl md:text-3xl text-gray-300 mb-12 md:mb-16 max-w-3xl mx-auto leading-relaxed ${
            animationsEnabled ? 'animate-on-scroll' : ''
          }`}
          style={{
            opacity: 0,
            animation: animationsEnabled ? 'fadeUp 0.8s ease forwards 200ms' : 'none'
          }}
        >
          Connecting entrepreneurs with investors—seamless, secure, and built for lasting partnerships.
        </p>
        
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-8 animate-on-scroll"
          style={{
            opacity: 0,
            animation: animationsEnabled ? 'fadeUp 0.8s ease forwards 400ms' : 'none'
          }}
        >
          <Link
            to="/signup"
            className={`group w-full sm:w-auto bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white px-12 py-5 rounded-full font-medium text-xl transition-all duration-300 flex items-center justify-center ${
              animationsEnabled ? 'hover:shadow-lg hover:shadow-indigo-500/30 hover:scale-105' : ''
            }`}
          >
            Get Started
            <ArrowRight className={`ml-3 h-6 w-6 transition-transform duration-300 ${animationsEnabled ? 'group-hover:translate-x-1' : ''}`} />
          </Link>
          
          <Link
            to="/learn-more"
            className="w-full sm:w-auto px-10 py-4 rounded-full font-medium text-xl text-gray-300 hover:text-white border border-gray-700 hover:border-indigo-500 transition-all duration-300 backdrop-blur-sm"
          >
            Learn More
          </Link>
        </div>
        
        {animationsEnabled && (
          <div 
            className="mt-20 flex justify-center gap-16 opacity-0"
            style={{ animation: 'fadeUp 0.8s ease forwards 600ms' }}
          >
            <div className="flex flex-col items-center">
              <span className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">500+</span>
              <span className="text-gray-400 text-base mt-2">Investors</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">1,200+</span>
              <span className="text-gray-400 text-base mt-2">Entrepreneurs</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">$50M+</span>
              <span className="text-gray-400 text-base mt-2">Funded</span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}