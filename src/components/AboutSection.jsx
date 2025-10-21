import React from 'react';
import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section id="about" className="py-12 md:py-20 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12">About</h2>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8 md:space-y-12"
          >
            <div className="space-y-6 md:space-y-8">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">Research Focus</h3>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-4 md:p-6 border border-gray-700/50 hover:border-gray-600/50 transition-colors">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-3">
                    <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h4 className="text-lg md:text-xl font-semibold text-white mb-2">Large Language Models</h4>
                  <p className="text-gray-400 text-sm md:text-base">Multi-agent architectures, RAG systems</p>
                </div>
                
                <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-4 md:p-6 border border-gray-700/50 hover:border-gray-600/50 transition-colors">
                  <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-3">
                    <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m0 0V1a1 1 0 011-1h2a1 1 0 011 1v18a1 1 0 01-1 1H4a1 1 0 01-1-1V1a1 1 0 011-1h2a1 1 0 011 1v3m0 0h8m-8 0v16a1 1 0 001 1h6a1 1 0 001-1V4H7z" />
                    </svg>
                  </div>
                  <h4 className="text-lg md:text-xl font-semibold text-white mb-2">Natural Language Processing</h4>
                  <p className="text-gray-400 text-sm md:text-base">Speech-to-speech translation, low-resource languages</p>
                </div>
                
                <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-4 md:p-6 border border-gray-700/50 hover:border-gray-600/50 transition-colors sm:col-span-2 lg:col-span-1">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-3">
                    <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <h4 className="text-lg md:text-xl font-semibold text-white mb-2">ML Systems Engineering</h4>
                  <p className="text-gray-400 text-sm md:text-base">Scalable architectures, model evaluation</p>
                </div>
              </div>
            </div>

            {/* <div className="pt-6 md:pt-8 border-t border-gray-800">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">Resources</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <a 
                  href="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_68f6f767cfddfe075ef7b321/73151c026_resume_joao_victor_carvalho.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="group bg-gray-900/50 backdrop-blur-sm rounded-lg p-4 border border-gray-700/50 hover:border-red-500/50 transition-all duration-300 hover:bg-gray-800/50"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center group-hover:bg-red-500/30 transition-colors">
                      <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm md:text-base group-hover:text-red-400 transition-colors">
                        Download Resume
                      </h4>
                      <p className="text-gray-400 text-xs md:text-sm">PDF format for applications</p>
                    </div>
                  </div>
                </a>
                
                <a 
                  href="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_68f6f767cfddfe075ef7b321/56a7cf585_NM4A0075.jpg" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="group bg-gray-900/50 backdrop-blur-sm rounded-lg p-4 border border-gray-700/50 hover:border-red-500/50 transition-all duration-300 hover:bg-gray-800/50"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center group-hover:bg-red-500/30 transition-colors">
                      <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm md:text-base group-hover:text-red-400 transition-colors">
                        Download Photo
                      </h4>
                      <p className="text-gray-400 text-xs md:text-sm">High-resolution headshot</p>
                    </div>
                  </div>
                </a>
              </div>
            </div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
