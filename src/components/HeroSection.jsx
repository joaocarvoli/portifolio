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
        <div className="absolute inset-0 bg-black/70 md:bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 md:space-y-8"
        >
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-4 md:mb-6 tracking-tight leading-tight"
            >
              JOÃO VICTOR CARVALHO
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-base sm:text-lg md:text-xl text-gray-200 mb-6 md:mb-10 font-medium"
            >
              Machine Learning Engineer, marIA Educação
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-4 md:space-y-6"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 md:mb-8 tracking-tight">
              Machine Learning Engineer
            </h2>
            
            <div className="space-y-3 md:space-y-4 text-gray-200 text-sm sm:text-base md:text-lg leading-relaxed">
              <p className="font-medium">AI Engineer, Multi-Agent AI Systems (remote)</p>
              <p className="font-medium">AI/Software Engineer (Volunteer), YWAM & Shema - Oral Bible Translation (Kansas City, Missouri, USA)</p>
              <p className="font-medium">Visiting Student, Institute of Mathematics and Computer Science (ICMC - USP)</p>
              <p className="font-medium">Bachelor of Science, Software Engineering, Federal University of Ceará (UFC)</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
