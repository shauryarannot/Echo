import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MessageCircle, UserPlus } from 'lucide-react';

const people = [
  { id: 1, name: 'Alice Johnson', role: 'Product Manager', avatar: '👩‍💼', expertise: 'Strategic Planning', color: 'from-blue-400 to-blue-600' },
  { id: 2, name: 'Michael Smith', role: 'Software Engineer', avatar: '👨‍💻', expertise: 'Full Stack Development', color: 'from-emerald-400 to-emerald-600' },
  { id: 3, name: 'Samantha Lee', role: 'UI/UX Designer', avatar: '🎨', expertise: 'Design Systems', color: 'from-purple-400 to-purple-600' },
  { id: 4, name: 'James Brown', role: 'Marketing Lead', avatar: '📈', expertise: 'Growth Marketing', color: 'from-red-400 to-red-600' },
  { id: 5, name: 'Olivia Davis', role: 'HR Manager', avatar: '👥', expertise: 'Talent Development', color: 'from-pink-400 to-pink-600' },
  { id: 6, name: 'David Wilson', role: 'Data Scientist', avatar: '📊', expertise: 'Machine Learning', color: 'from-amber-400 to-amber-600' }
];

const ProfessionalNetworkCards = () => {
  const [activeCard, setActiveCard] = useState(null);

  return (
    <div className="relative overflow-hidden py-24 px-6 bg-gray-900 min-h-screen">
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div 
            className="inline-block mb-4 p-2 rounded-full bg-purple-500/20 backdrop-blur-md"
            animate={{ rotate: [0, 5, 0, -5, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          >
            <MessageCircle className="w-10 h-10 text-purple-400" />
          </motion.div>
          
          <motion.h2
            className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            Connect with Fellow Entrepreneurs
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            Exchange ideas, seek advice, and build valuable relationships with like-minded
            innovators in our thriving entrepreneurial community.
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {people.map((person, index) => (
            <motion.div
              key={person.id}
              className="relative rounded-xl backdrop-blur-md border border-white/10 overflow-hidden"
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true, margin: "-100px" }}
              custom={index}
              onHoverStart={() => setActiveCard(person.id)}
              onHoverEnd={() => setActiveCard(null)}
            >
              <div className={`absolute inset-0 opacity-30 bg-gradient-to-br ${person.color}`} />
              
              <div className="relative z-10 p-6">
                <div className="flex items-center mb-6">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-violet-500 to-purple-700 flex items-center justify-center text-2xl shadow-lg">
                      {person.avatar}
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-white">
                      {person.name}
                    </h3>
                    <p className="text-gray-300 flex items-center">
                      <span className="inline-block w-2 h-2 rounded-full bg-green-400 mr-2"></span>
                      {person.role}
                    </p>
                  </div>
                </div>
                
                <div className="relative mb-4">
                  <input
                    placeholder={`Message ${person.name.split(' ')[0]}...`}
                    className="w-full bg-white/10 border-white/10 text-white placeholder:text-gray-400 focus:border-purple-500 focus:ring focus:ring-purple-500/30 px-3 py-2 rounded-md"
                  />
                  <motion.div
                    className="absolute right-3 top-3 text-gray-400"
                    animate={{ 
                      scale: activeCard === person.id ? [1, 1.2, 1] : 1
                    }}
                    transition={{ repeat: Infinity, duration: 2 }}
                  >
                    <Send className="w-4 h-4" />
                  </motion.div>
                </div>
                
                <motion.button
                  className="w-full bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white py-2 rounded-md font-medium shadow-xl"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  Connect <span className="ml-2">→</span>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfessionalNetworkCards;