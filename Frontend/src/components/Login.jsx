import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock, ArrowRight } from 'lucide-react';
import { useAnimation } from '../context/AnimationContext';

export default function Login() {
  const { animationsEnabled } = useAnimation();
  
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 bg-gradient-to-br from-gray-950 via-gray-900 to-blue-950 relative overflow-hidden">

      {animationsEnabled && (
        <>
          <div className="absolute top-20 right-20 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/3 left-1/4 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"></div>
        </>
      )}
      
      <div 
        className="w-full max-w-md bg-gray-800/80 backdrop-blur-lg rounded-2xl shadow-2xl border border-gray-700/30 overflow-hidden relative z-10"
        style={{
          opacity: 0,
          animation: animationsEnabled ? 'fadeUp 0.8s ease forwards' : 'none'
        }}
      >

        <div className="h-1.5 w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
        
        <div className="p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-3 text-white bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 to-indigo-100">Welcome back</h2>
            <p className="text-gray-400">Sign in to your Echo account</p>
          </div>
          
          <form className="space-y-5">
            <div className="group">
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none transition-colors group-focus-within:text-indigo-400">
                  <Mail className="h-5 w-5 text-gray-500" />
                </div>
                <input
                  type="email"
                  id="email"
                  className="bg-gray-700/60 border border-gray-600 text-white rounded-xl block w-full pl-10 p-3.5 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                  placeholder="you@example.com"
                  required
                />
              </div>
            </div>
            
            <div className="group">
              <div className="flex items-center justify-between mb-2">
                <label htmlFor="password" className="block text-sm font-medium text-gray-300">
                  Password
                </label>
                <Link to="/forgot-password" className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors">
                  Forgot password?
                </Link>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none transition-colors group-focus-within:text-indigo-400">
                  <Lock className="h-5 w-5 text-gray-500" />
                </div>
                <input
                  type="password"
                  id="password"
                  className="bg-gray-700/60 border border-gray-600 text-white rounded-xl block w-full pl-10 p-3.5 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                  placeholder="Enter your password"
                  required
                />
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="relative inline-block w-10 mr-2 align-middle select-none">
                <input 
                  id="remember-me" 
                  type="checkbox" 
                  name="remember-me" 
                  className="peer sr-only"
                />
                <div className="block h-6 w-10 bg-gray-700 rounded-full cursor-pointer peer-checked:bg-indigo-600 transition-colors"></div>
                <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-all duration-300 peer-checked:translate-x-4"></div>
              </div>
              <label htmlFor="remember-me" className="text-sm text-gray-300 cursor-pointer">
                Remember me
              </label>
            </div>
            
            <div className="pt-2">
              <button
                type="submit"
                className="group w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 text-white font-medium rounded-xl py-3.5 px-4 transition-all duration-300 shadow-lg hover:shadow-indigo-600/20"
              >
                <span>Sign in</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </form>
          
          <div className="mt-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-600/50"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="px-3 bg-gray-800 text-sm text-gray-400">Or continue with</span>
              </div>
            </div>
            
            <div className="mt-6 grid grid-cols-2 gap-4">
              <button
                type="button"
                className="w-full inline-flex justify-center items-center py-2.5 px-4 border border-gray-600/50 rounded-xl bg-gray-700/40 hover:bg-gray-600/40 text-sm font-medium text-white transition-all duration-200 hover:shadow-lg"
              >
                <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                Google
              </button>
              <button
                type="button"
                className="w-full inline-flex justify-center items-center py-2.5 px-4 border border-gray-600/50 rounded-xl bg-gray-700/40 hover:bg-gray-600/40 text-sm font-medium text-white transition-all duration-200 hover:shadow-lg"
              >
                <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 0C4.477 0 0 4.477 0 10c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0110 4.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C17.14 18.163 20 14.418 20 10c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
                </svg>
                GitHub
              </button>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-gray-400">
              Don't have an account?{' '}
              <Link to="/signup" className="text-indigo-400 hover:text-indigo-300 font-medium transition-colors">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}