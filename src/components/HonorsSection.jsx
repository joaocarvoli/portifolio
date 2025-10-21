import React from 'react';
import { motion } from 'framer-motion';

export default function HonorsSection() {
  const honors = [
    {
      title: "Instructor, AWS DeepRacer Study Group",
      detail: "Federal University of Ceará (September 2023 - July 2024)",
      description: "Taught and mentored 20+ students on Reinforcement Learning concepts using AWS DeepRacer. Organized a university-wide race in collaboration with AWS, attracting over 30 participants."
    },
    {
      title: "5th Place out of 150",
      detail: "AWS DeepRacer at CSBC (National Phase), 2024"
    },
    {
      title: "1st Place Winner",
      detail: "AWS DeepRacer for Students (São Paulo), 2023"
    },
    {
      title: "Published Paper",
      detail: "Congress of the Brazilian Computing Society (CSBC), 2022",
      description: "Authored and presented 'Performance Comparison of Interoperability Solutions'"
    }
  ];

  return (
    <section id="honors" className="py-20 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-12">Honors and Awards</h2>
        </motion.div>

        <div className="space-y-6">
          {honors.map((honor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-gray-300"
            >
              <p className="mb-1">
                • <span className="font-bold text-white">{honor.title}</span>
                {honor.detail && (
                  <span className="text-gray-400"> {honor.detail}</span>
                )}
              </p>
              {honor.description && (
                <p className="ml-4 text-gray-400">{honor.description}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
