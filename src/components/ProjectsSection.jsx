import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Brain, Globe } from 'lucide-react';

export default function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: "Sentiment Analysis",
      organization: "ICMC - USP",
      type: "Research",
      icon: Brain,
      color: "from-purple-500 to-pink-600",
      link: "https://github.com/joaocarvoli/nlp-usp-2025",
      description: "Analyzed a dataset of 10,000+ movie reviews, achieving 88% accuracy with NLP tokenization (NLTK, spaCy) and an additional 2% accuracy gain by fine-tuning a BERT-based transformer model.",
      technologies: ["Python", "NLTK", "spaCy", "BERT", "Transformers"],
      metrics: "88% → 90% accuracy"
    },
    {
      id: 2,
      title: "QuixAlert!",
      organization: "UFC & Environmental Agency",
      type: "Full-Stack",
      icon: Globe,
      color: "from-green-500 to-blue-600",
      link: "https://github.com/QuixAlert",
      description: "Developed a web and mobile system for 20+ federal employees, creating tools to manage environmental contracts and facilitate the adoption of abandoned animals.",
      technologies: ["Web", "Mobile", "Environmental Management", "Animal Adoption"],
      metrics: "20+ users"
    }
  ];

  return (
    <section id="projects" className="py-12 md:py-20 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12">Featured Projects</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 md:p-8 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 hover:bg-gray-800/50 h-full">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4 sm:mb-6">
                    <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
                      <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-r ${project.color} flex items-center justify-center flex-shrink-0`}>
                        <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-1 truncate">{project.title}</h3>
                        <p className="text-gray-400 text-xs sm:text-sm truncate">{project.organization}</p>
                      </div>
                    </div>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 p-2 rounded-lg bg-gray-700/50 hover:bg-gray-600/50 flex-shrink-0 ml-2"
                    >
                      <ExternalLink className="w-4 h-4 text-gray-300" />
                    </a>
                  </div>

                  {/* Type Badge */}
                  <div className="mb-3 sm:mb-4">
                    <span className={`inline-block px-2 sm:px-3 py-1 rounded-full text-xs font-semibold ${
                      project.type === 'Research' ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30' :
                      'bg-green-500/20 text-green-400 border border-green-500/30'
                    }`}>
                      {project.type}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-3 sm:mb-4">
                    <h4 className="text-gray-400 text-xs sm:text-sm font-medium mb-2">Technologies</h4>
                    <div className="flex flex-wrap gap-1 sm:gap-2">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-gray-800/50 text-gray-300 text-xs rounded-md border border-gray-700/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-gray-700/50">
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${project.color}`}></div>
                      <span className="text-gray-400 text-xs sm:text-sm font-medium">Impact</span>
                    </div>
                    <span className="text-white text-xs sm:text-sm font-semibold">{project.metrics}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
