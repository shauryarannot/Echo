import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import { AnimationProvider } from './context/AnimationContext';
import Login from './components/Login';
import Signup from './components/Signup';
import MessageCards from './components/MessageCards';


const ParticleBackground = () => {
  const [particles, setParticles] = useState([]);
  
  useEffect(() => {
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      opacity: Math.random() * 0.5 + 0.1,
      duration: Math.random() * 20 + 10
    }));
    
    setParticles(newParticles);
  }, []);
  
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {particles.map(particle => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.opacity,
            animation: `float ${particle.duration}s infinite ease-in-out alternate, 
                        pulse ${particle.duration / 2}s infinite alternate`
          }}
        />
      ))}
    </div>
  );
};

export default function App() {
  const location = useLocation();
  
  useEffect(() => {
    // Enhanced IntersectionObserver for the improved Hero section
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const element = entry.target;
          const delay = element.dataset.delay || '0';
          
          if (element.classList.contains('fade-in')) {
            element.style.transition = `opacity 0.8s ease ${delay}s, transform 0.8s ease ${delay}s`;
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
          } else if (element.classList.contains('scale-in')) {
            element.style.transition = `opacity 0.8s ease ${delay}s, transform 0.8s ease ${delay}s`;
            element.style.opacity = '1';
            element.style.transform = 'scale(1)';
          } else {
            element.classList.add('animate-in');
          }
        }
      });
    }, { 
      threshold: 0.1,
      rootMargin: '0px 0px -10% 0px'
    });
    
    // Target all elements that need animation, including the enhanced Hero text elements
    document.querySelectorAll('.animate-on-scroll, .fade-in, .scale-in').forEach(element => {
      if (element.classList.contains('fade-in')) {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
      } else if (element.classList.contains('scale-in')) {
        element.style.opacity = '0';
        element.style.transform = 'scale(0.9)';
      }
      observer.observe(element);
    });
    
    return () => observer.disconnect();
  }, [location.pathname]);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  
  // Page transition animations
  const pageVariants = {
    initial: {
      opacity: 0,
      y: 20
    },
    in: {
      opacity: 1,
      y: 0
    },
    exit: {
      opacity: 0,
      y: -20
    }
  };

  return (
    <AnimationProvider>
      <div className="min-h-screen bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950 text-white font-sans overflow-hidden">
        {/* Enhanced animations and styles for Hero section */}
        <style jsx global>{`
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0px); }
          }
          
          @keyframes float-slow {
            0% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(5deg); }
            100% { transform: translateY(0px) rotate(0deg); }
          }
          
          @keyframes pulse {
            0% { opacity: var(--min-opacity, 0.2); }
            100% { opacity: var(--max-opacity, 0.6); }
          }
          
          @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          
          .animate-in {
            animation: fadeInUp 0.6s ease-out forwards;
          }
          
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          /* Enhanced animation for improved Hero section */
          @keyframes fadeUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      
        {/* Background elements */}
        <ParticleBackground />
        
        {/* Enhanced background blur elements to complement larger Hero text */}
        <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-indigo-900/20 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-purple-900/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-1/3 right-1/5 w-64 h-64 bg-blue-900/10 rounded-full blur-3xl" 
             style={{animation: 'spin-slow 40s linear infinite, float 20s ease-in-out infinite'}}></div>
        
        {/* Content */}
        <div className="relative z-10">
          <Navbar />
          
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial="initial"
              animate="in"
              exit="exit"
              variants={pageVariants}
              transition={{ type: 'tween', ease: 'easeInOut', duration: 0.4 }}
            >
              <Routes location={location}>
                <Route path="/" element={
                  <>
                    <Hero />
                    <Features />
                    <CallToAction />
                  </>
                } />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/messagecards" element={<MessageCards />} />
              </Routes>
            </motion.div>
          </AnimatePresence>
          
          <Footer />
        </div>
      </div>
    </AnimationProvider>
  );
}