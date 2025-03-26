import React, { useRef } from 'react';
import { MessageSquare, Users, Shield, Globe, Sparkles, Code } from 'lucide-react';
import FeatureCard from './FeatureCard';
import { useAnimation } from '../context/AnimationContext';

export default function Features() {
  const { animationsEnabled } = useAnimation();
  const featuresRef = useRef(null);
  
  const featureData = [
    {
      icon: <MessageSquare className="h-10 w-10 text-indigo-400" />,
      title: "Crystal-clear communication",
      description: "Voice, video, and text chat without the lag or complexity."
    },
    {
      icon: <Users className="h-10 w-10 text-purple-400" />,
      title: "Community-first design",
      description: "Create spaces for discussion, collaboration, and connection."
    },
    {
      icon: <Shield className="h-10 w-10 text-blue-400" />,
      title: "Security by default",
      description: "End-to-end encryption and powerful moderation tools."
    },
    {
      icon: <Globe className="h-10 w-10 text-teal-400" />,
      title: "Available everywhere",
      description: "Connect from any device, anywhere in the world."
    },
    {
      icon: <Sparkles className="h-10 w-10 text-pink-400" />,
      title: "Always evolving",
      description: "Constant updates with new features the community asks for."
    },
    {
      icon: <Code className="h-10 w-10 text-amber-400" />,
      title: "Dev-friendly API",
      description: "Extend and customize with powerful integrations."
    }
  ];
  
  return (
    <section className="container mx-auto px-6 py-20 md:py-32 relative" ref={featuresRef}>

      {animationsEnabled && (
        <>
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-900/20 rounded-full blur-3xl -z-10"></div>
          <div className="absolute bottom-20 left-10 w-80 h-80 bg-purple-900/20 rounded-full blur-3xl -z-10"></div>
        </>
      )}
      
      <div className="text-center mb-16 md:mb-24">
        <span 
          className="inline-block px-4 py-1.5 bg-indigo-900/50 text-indigo-300 rounded-full text-sm font-medium mb-5 animate-on-scroll backdrop-blur-sm border border-indigo-800/50"
          style={{
            opacity: 0,
            animation: animationsEnabled ? 'fadeUp 0.8s ease forwards' : 'none'
          }}
        >
          Key Features
        </span>
        
        <h2
          className="text-3xl md:text-5xl font-bold mb-6 animate-on-scroll bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300"
          style={{
            opacity: 0,
            animation: animationsEnabled ? 'fadeUp 0.8s ease forwards 100ms' : 'none'
          }}
        >
          Why Choose Echo?
        </h2>
        
        <p
          className="text-xl text-gray-300 max-w-2xl mx-auto animate-on-scroll"
          style={{
            opacity: 0,
            animation: animationsEnabled ? 'fadeUp 0.8s ease forwards 200ms' : 'none'
          }}
        >
          Everything you need to build your company, all in one place.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
        {featureData.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}