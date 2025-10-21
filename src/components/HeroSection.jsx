import React from 'react';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center py-20 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/NM4A0075.jpg)',
        }}
      >
        <div className="absolute inset-0 bg-black/85" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-8xl font-bold mb-8"
        >
          João Victor Carvalho
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-4 text-gray-300 text-lg max-w-3xl mx-auto"
        >
          <p className="text-xl">
            Machine Learning Engineer, marIA Educação
          </p>
          <p>
            Director, Multi-Agent AI Systems
          </p>
          <p>
            AI Engineer (Volunteer), YWAM & Shema - Oral Bible Translation
          </p>
          <p>
            Visiting Student, Institute of Mathematics and Computer Science (ICMC - USP)
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12"
        >
          <h2 className="text-3xl font-bold mb-6">Research Focus</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className="text-xl font-semibold mb-2">Large Language Models</h3>
              <p className="text-gray-400 text-sm">Multi-agent architectures, RAG systems</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Natural Language Processing</h3>
              <p className="text-gray-400 text-sm">Speech-to-speech translation, low-resource languages</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">ML Systems Engineering</h3>
              <p className="text-gray-400 text-sm">Scalable architectures, model evaluation</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
