import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Users } from 'lucide-react';
import { useAnimation } from '../context/AnimationContext';

export default function CallToAction() {
  const { animationsEnabled } = useAnimation();
  
  return (
    <section className="container mx-auto px-6 py-16 md:py-24">
      <div
        className={`bg-gradient-to-r from-indigo-800 to-purple-800 rounded-2xl p-8 md:p-12 text-center overflow-hidden relative ${
          animationsEnabled ? 'hover:shadow-2xl hover:shadow-indigo-900/20 transition-all duration-500 transform hover:-translate-y-1' : ''
        }`}
        style={{
          opacity: 0,
          animation: animationsEnabled ? 'fadeUp 0.8s ease forwards' : 'none'
        }}
      >

        {animationsEnabled && (
          <>
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-30 pointer-events-none">
              <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-white opacity-10 animate-wave-slow"></div>
              <div className="absolute -top-1/2 -left-1/3 w-full h-full bg-white opacity-10 animate-wave"></div>
              <div className="absolute top-0 right-0 w-1/3 h-2/3 bg-purple-400 opacity-10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-20 w-1/4 h-1/2 bg-indigo-300 opacity-10 rounded-full blur-3xl"></div>
            </div>
          </>
        )}
        

        <div className="absolute -right-8 -top-8 w-32 h-32 bg-purple-500 opacity-10 rounded-full blur-xl"></div>
        <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-indigo-400 opacity-10 rounded-full blur-xl"></div>
        

        <h2 className="text-3xl md:text-5xl font-bold mb-6 relative z-10 text-white">
          Ready to start your <span className="text-indigo-200">community</span>?
        </h2>
        <p className="text-lg md:text-xl text-indigo-200 mb-8 max-w-2xl mx-auto relative z-10 leading-relaxed">
          Join millions of users and communities already connecting on Echo.
        </p>
        

        <div className="flex justify-center mb-10 relative z-10">
          <div className="flex flex-col md:flex-row gap-4 md:gap-10 py-4 px-6 bg-indigo-900/30 rounded-xl backdrop-blur-sm">
            <div className="flex items-center gap-2">
              <Users className="text-indigo-300 h-5 w-5" />
              <span className="text-white font-semibold">5M+ Users</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="text-indigo-300 h-5 w-5" />
              <span className="text-white font-semibold">500K+ Communities</span>
            </div>
          </div>
        </div>
        

        <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
          <Link
            to="/signup"
            className={`inline-flex items-center justify-center gap-2 bg-white text-indigo-900 hover:bg-indigo-50 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 ${
              animationsEnabled ? 'hover:shadow-xl hover:scale-105' : ''
            }`}
          >
            Sign Up — It's Free
            <ArrowRight className="h-5 w-5" />
          </Link>
          <Link
            to="/explore"
            className={`inline-flex items-center justify-center gap-2 bg-transparent border-2 border-indigo-400 text-white hover:bg-indigo-700/50 px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 ${
              animationsEnabled ? 'hover:shadow-lg hover:border-white' : ''
            }`}
          >
            Explore Communities
          </Link>
        </div>
      </div>
    </section>
  );
}