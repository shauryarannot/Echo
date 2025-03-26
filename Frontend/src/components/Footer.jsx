import React from 'react';
import { useAnimation } from '../context/AnimationContext';
import { motion } from 'framer-motion';
import { 
  HeartIcon, 
  GlobeIcon, 
  ShieldIcon, 
  MessageCircleIcon,
  TwitterIcon,
  InstagramIcon,
  GithubIcon,
  LinkedinIcon
} from 'lucide-react';

export default function Footer() {
  const { animationsEnabled } = useAnimation();
  
  const footerCategories = [
    {
      title: "Product",
      icon: <GlobeIcon className="w-5 h-5" />,
      links: ["Download", "Nitro", "Status", "Features"]
    },
    {
      title: "Company",
      icon: <ShieldIcon className="w-5 h-5" />,
      links: ["About", "Jobs", "Branding", "News"]
    },
    {
      title: "Resources",
      icon: <MessageCircleIcon className="w-5 h-5" />,
      links: ["Support", "Safety", "Blog", "Feedback"]
    },
    {
      title: "Policies",
      icon: <HeartIcon className="w-5 h-5" />,
      links: ["Terms", "Privacy", "Guidelines", "Acknowledgements"]
    }
  ];
  
  const socialLinks = [
    { icon: <TwitterIcon className="w-5 h-5" />, href: "#" },
    { icon: <InstagramIcon className="w-5 h-5" />, href: "#" },
    { icon: <GithubIcon className="w-5 h-5" />, href: "#" },
    { icon: <LinkedinIcon className="w-5 h-5" />, href: "#" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-neutral-900 to-neutral-950 pt-16 pb-8">

      <div className="absolute inset-0 z-0 overflow-hidden opacity-10">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-purple-900/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-indigo-900/30 rounded-full blur-3xl"></div>
        <div className="grid grid-cols-8 grid-rows-8 h-full w-full">
          {Array.from({ length: 20 }).map((_, i) => (
            <div 
              key={i}
              className="w-px h-full bg-white/5"
              style={{ 
                left: `${Math.random() * 100}%`,
                position: 'absolute',
                top: 0,
              }}
            ></div>
          ))}
          {Array.from({ length: 10 }).map((_, i) => (
            <div 
              key={i}
              className="h-px w-full bg-white/5"
              style={{ 
                top: `${Math.random() * 100}%`,
                position: 'absolute',
                left: 0,
              }}
            ></div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {footerCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={animationsEnabled ? "hidden" : "visible"}
              whileInView={animationsEnabled ? "visible" : "visible"}
              viewport={{ once: true, margin: "-50px" }}
              variants={containerVariants}
              className="relative"
            >
              <motion.div 
                className="flex items-center mb-6 space-x-2"
                variants={itemVariants}
              >
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-white">
                  {category.icon}
                </div>
                <h4 className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                  {category.title}
                </h4>
              </motion.div>
              
              <ul className="space-y-3">
                {category.links.map((link) => (
                  <motion.li key={link} variants={itemVariants}>
                    <a 
                      href="#"
                      className="text-gray-400 hover:text-white group flex items-center transition-colors duration-300"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-0 group-hover:scale-100"></span>
                      <span className="relative overflow-hidden">
                        {link}
                        <span className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-purple-500 to-indigo-500 group-hover:w-full transition-all duration-300"></span>
                      </span>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="relative border-t border-white/10 pt-8 flex flex-col lg:flex-row items-center justify-between"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <div className="flex flex-col items-center lg:items-start mb-8 lg:mb-0">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-600 to-indigo-700 flex items-center justify-center relative">
                <span className="text-2xl font-bold text-white">E</span>
                <div className="absolute -inset-0.5 rounded-lg bg-gradient-to-br from-purple-600 to-indigo-700 opacity-50 blur group-hover:opacity-75 transition"></div>
              </div>
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-300">
                Echo
              </span>
            </div>
            <p className="text-gray-400 text-sm max-w-md text-center lg:text-left">
              Bringing entrepreneurs together through seamless communication and collaboration. 
              Building the future, together.
            </p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="flex space-x-4 mb-4">
              {socialLinks.map((link, i) => (
                <motion.a
                  key={i}
                  href={link.href}
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110"
                  whileHover={{ 
                    scale: 1.1,
                    boxShadow: "0 0 10px rgba(139, 92, 246, 0.5)" 
                  }}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
            <p className="text-gray-500 text-sm">
              © 2025 Echo, Inc. All rights reserved.
            </p>
          </div>
        </motion.div>
        
        <motion.div 
          className="mt-8 pt-6 border-t border-white/5 text-center text-xs text-gray-600"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          Made with 
          <HeartIcon className="w-3 h-3 mx-1 inline-block text-red-500" /> 
          in Silicon Valley
        </motion.div>
      </div>
    </footer>
  );
}