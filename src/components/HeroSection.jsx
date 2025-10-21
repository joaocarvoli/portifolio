import React from 'react';
import { motion } from 'framer-motion';
import heroImage from '/NM4A0075.jpg';

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center py-8 md:py-20 relative">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className="absolute inset-0 bg-black/70 md:bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8 md:space-y-12"
        >
          {/* Mobile Layout - Optimized for small screens */}
          <div className="md:hidden">
            {/* Hero Content with better positioning */}
            <div className="text-center mb-8">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-3xl font-extrabold tracking-tight leading-tight mb-3"
              >
                JOÃO VICTOR CARVALHO
                <span className="block text-lg mt-1">🇧🇷</span>
              </motion.h1>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="bg-red-500/20 backdrop-blur-sm rounded-full px-4 py-2 border border-red-500/30 inline-block"
              >
                <p className="text-red-400 text-sm font-semibold">
                  Machine Learning Engineer, marIA Educação
                </p>
              </motion.div>
            </div>

            {/* Compact Experience Summary */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-2"
            >
              <div className="bg-gray-900/70 backdrop-blur-sm rounded-lg p-3 border border-gray-600/50">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <p className="text-white text-sm font-medium">AI/Software Engineer (marIA Educação)</p>
                </div>
                <p className="text-gray-300 text-xs ml-4">Brazil (Remote position)</p>
              </div>

              <div className="bg-gray-900/70 backdrop-blur-sm rounded-lg p-3 border border-gray-600/50">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <p className="text-white text-sm font-medium">AI/Software Engineer (Volunteer)</p>
                </div>
                <p className="text-gray-300 text-xs ml-4">YWAM & Shema - Kansas City, MO</p>
              </div>

              <div className="bg-gray-900/70 backdrop-blur-sm rounded-lg p-3 border border-gray-600/50">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <p className="text-white text-sm font-medium">Visiting Student, ICMC - USP</p>
                </div>
                <p className="text-gray-300 text-xs ml-4">Mathematics and Computer Science</p>
              </div>

              <div className="bg-gray-900/70 backdrop-blur-sm rounded-lg p-3 border border-gray-600/50">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  <p className="text-white text-sm font-medium">Bachelor of Science, Software Engineering</p>
                </div>
                <p className="text-gray-300 text-xs ml-4">Federal University of Ceará (UFC)</p>
              </div>
            </motion.div>

            {/* Call to action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-center mt-6"
            >
              <p className="text-gray-400 text-xs">
                Scroll down to explore my journey ↓
              </p>
            </motion.div>
          </div>

          {/* Desktop Layout - Side by side */}
          <div className="hidden md:block">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left side - Name and current role */}
              <div className="space-y-6">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight leading-tight flex items-center gap-4"
                >
                  JOÃO VICTOR CARVALHO
                  <span className="text-2xl lg:text-3xl">🇧🇷</span>
                </motion.h1>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="text-xl lg:text-2xl text-gray-200 font-medium"
                >
                  Machine Learning Engineer, marIA Educação
                </motion.p>
              </div>

              {/* Right side - Experience list */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="space-y-4"
              >
                <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700/50">
                  <p className="text-white text-lg font-medium">AI/Software Engineer Engineer</p>
                  <p className="text-gray-300 text-sm mt-2">Brazil (Remote position)</p>
                </div>
                <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700/50">
                  <p className="text-white text-lg font-medium">AI/Software Engineer (Volunteer), YWAM & Shema - Oral Bible Translation</p>
                  <p className="text-gray-300 text-sm mt-2">Kansas City, Missouri, USA</p>
                </div>
                <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700/50">
                  <p className="text-white text-lg font-medium">Visiting Student, Institute of Mathematics and Computer Science</p>
                  <p className="text-gray-300 text-sm mt-2">ICMC - USP</p>
                </div>
                <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700/50">
                  <p className="text-white text-lg font-medium">Bachelor of Science, Software Engineering</p>
                  <p className="text-gray-300 text-sm mt-2">Federal University of Ceará (UFC)</p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
