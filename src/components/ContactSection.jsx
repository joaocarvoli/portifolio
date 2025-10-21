import React from 'react';
import { motion } from 'framer-motion';

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-12">Contact</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-xl font-bold mb-3">Email</h3>
              <a 
                href="mailto:joaocarvoli@hotmail.com"
                className="text-red-500 hover:text-red-400 transition-colors"
              >
                joaocarvoli@hotmail.com
              </a>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3">Phone</h3>
              <a 
                href="tel:+5585991221906"
                className="text-gray-300"
              >
                +55 85 99122-1906
              </a>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3">Location</h3>
              <p className="text-gray-300">São Carlos, São Paulo, Brazil</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-xl font-bold mb-3">LinkedIn</h3>
              <a 
                href="https://linkedin.com/in/joaocarvoli"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-500 hover:text-red-400 transition-colors"
              >
                linkedin.com/in/joaocarvoli
              </a>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3">GitHub</h3>
              <a 
                href="https://github.com/joaocarvoli"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-500 hover:text-red-400 transition-colors"
              >
                github.com/joaocarvoli
              </a>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3">Languages</h3>
              <p className="text-gray-300">Portuguese (Native), English (Advanced)</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
