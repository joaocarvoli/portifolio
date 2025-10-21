import React from 'react';
import { motion } from 'framer-motion';

export default function ProjectsSection() {
  const projects = [
    {
      title: "Sentiment Analysis (ICMC - USP)",
      link: "https://github.com/joaocarvoli",
      description: "Analyzed a dataset of 10,000+ movie reviews, achieving 88% accuracy with NLP tokenization (NLTK, spaCy) and an additional 2% accuracy gain by fine-tuning a BERT-based transformer model."
    },
    {
      title: "QuixAlert! (UFC & Environmental Agency)",
      link: "https://github.com/joaocarvoli",
      description: "Developed a web and mobile system for 20+ federal employees, creating tools to manage environmental contracts and facilitate the adoption of abandoned animals."
    }
  ];

  return (
    <section id="projects" className="py-20 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-12">Selected Projects</h2>
        </motion.div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-bold mb-3">
                {project.link ? (
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-500 hover:text-red-400 transition-colors"
                  >
                    {project.title}
                  </a>
                ) : (
                  project.title
                )}
              </h3>
              <p className="text-gray-300">{project.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
