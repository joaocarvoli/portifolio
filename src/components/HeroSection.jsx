import React from 'react';
import { motion } from 'framer-motion';
import heroImage from '/NM4A0075.jpg';

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center py-20 relative">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight leading-tight"
            >
              JOÃO VICTOR CARVALHO
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-xl text-gray-200 mb-10 font-medium"
            >
              Machine Learning Engineer, marIA Educação
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">
              Machine Learning Engineer
            </h2>
            
            <div className="space-y-4 text-gray-200 text-lg leading-relaxed">
              <p className="font-medium">Director, Multi-Agent AI Systems</p>
              <p className="font-medium">AI Engineer (Volunteer), YWAM & Shema - Oral Bible Translation</p>
              <p className="font-medium">Visiting Student, Institute of Mathematics and Computer Science (ICMC - USP)</p>
              <p className="font-medium">Bachelor of Science, Software Engineering, Federal University of Ceará (UFC)</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
