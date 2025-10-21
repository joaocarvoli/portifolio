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

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 text-gray-300 leading-relaxed"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Formal Bio & Photo</h3>
            
            <div className="space-y-3">
              <p className="font-semibold text-white">
                Machine Learning Engineer (Mid-Level), marIA Educação
              </p>
              <p>
                <span className="text-white">Visiting Student</span>, Institute of Mathematics and Computer Science (ICMC - USP)
              </p>
              <p>
                <span className="text-white">AI Engineer (Volunteer)</span>, YWAM & Shema - Oral Bible Translation Project
              </p>
              <p>
                <span className="text-white">Bachelor of Science</span>, Software Engineering, Federal University of Ceará (UFC)
              </p>
            </div>

            <div className="pt-6 space-y-2">
              <p>
                • <a href="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_68f6f767cfddfe075ef7b321/73151c026_resume_joao_victor_carvalho.pdf" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="text-red-500 hover:text-red-400 transition-colors">
                  My formal resume
                </a> for announcements
              </p>
              <p>
                • <a href="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_68f6f767cfddfe075ef7b321/56a7cf585_NM4A0075.jpg" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="text-red-500 hover:text-red-400 transition-colors">
                  My formal photo
                </a> for announcements
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div>
              <img
                src="/NM4A0075.jpg"
                alt="João Victor Carvalho"
                className="w-full max-w-sm border border-gray-700"
              />
              <p className="text-center text-gray-500 text-sm mt-2 italic">João Victor Carvalho</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
