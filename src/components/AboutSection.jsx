import React from 'react';
import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-12">About</h2>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-12"
          >
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-white mb-6">Research Focus</h3>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <h4 className="text-xl font-semibold text-white mb-3">Large Language Models</h4>
                  <p className="text-gray-400">Multi-agent architectures, RAG systems</p>
                </div>
                <div className="text-center">
                  <h4 className="text-xl font-semibold text-white mb-3">Natural Language Processing</h4>
                  <p className="text-gray-400">Speech-to-speech translation, low-resource languages</p>
                </div>
                <div className="text-center">
                  <h4 className="text-xl font-semibold text-white mb-3">ML Systems Engineering</h4>
                  <p className="text-gray-400">Scalable architectures, model evaluation</p>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-gray-800">
              <h3 className="text-2xl font-bold text-white mb-6">Resources</h3>
              <div className="space-y-4">
                <p className="text-gray-300">
                  • <a href="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_68f6f767cfddfe075ef7b321/73151c026_resume_joao_victor_carvalho.pdf" 
                     target="_blank" 
                     rel="noopener noreferrer" 
                     className="text-red-500 hover:text-red-400 transition-colors">
                    My formal resume
                  </a> for announcements
                </p>
                <p className="text-gray-300">
                  • <a href="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_68f6f767cfddfe075ef7b321/56a7cf585_NM4A0075.jpg" 
                     target="_blank" 
                     rel="noopener noreferrer" 
                     className="text-red-500 hover:text-red-400 transition-colors">
                    My formal photo
                  </a> for announcements
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
