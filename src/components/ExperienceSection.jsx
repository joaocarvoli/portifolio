import React from 'react';
import { motion } from 'framer-motion';

export default function ExperienceSection() {
  const experiences = [
    {
      id: 1,
      company: "marIA Educação",
      location: "Remote",
      period: "Jan 2024 - Present",
      type: "Current",
      icon: "🤖",
      color: "from-blue-500 to-purple-600",
      positions: [
        {
          role: "Machine Learning Engineer | Mid-Level",
          period: "January 2025 - Present",
          description: [
            "Development of multi-agent architectures integrating multiple language models (LLMs)",
            "Technical review and code quality assurance",
            "Automation and optimization of manual processes",
            "Development of validation strategies with human annotators",
            "Implementation of advanced enterprise content indexing strategies"
          ]
        },
        {
          role: "Tech Lead",
          period: "January 2025 - March 2025",
          description: [
            "Leadership role in the Machine Learning squad alongside the CTO",
            "Bridge between product team and ML squad for strategic alignment"
          ]
        },
        {
          role: "Software Engineer | Mid-Level",
          period: "November 2024 - December 2024",
          description: [
            "Project to help teachers create personalized workbooks with LLM support",
            "Applied microservices patterns for optimized material generation",
            "Designed and implemented CI/CD workflows"
          ]
        }
      ]
    },
    {
      id: 2,
      company: "Youth With A Mission",
      location: "Kansas City, Missouri, USA",
      period: "Oct 2025 - Present",
      type: "Volunteer",
      icon: "🌍",
      color: "from-green-500 to-teal-600",
      positions: [
        {
          role: "AI Software Engineer (Volunteer)",
          period: "October 2025 - Present",
          description: [
            "Building speech-to-speech translation system for Oral Bible Translation",
            "Collaborating with global team of developers and linguists",
            "Working on low-resource language solutions"
          ]
        }
      ]
    },
    {
      id: 3,
      company: "IDEOS",
      location: "Ceará, Brazil",
      period: "Jul 2023 - Oct 2024",
      type: "Previous",
      icon: "💼",
      color: "from-orange-500 to-red-600",
      positions: [
        {
          role: "Software Developer",
          period: "July 2023 - October 2024",
          description: [
            "Versatile member of agile team on diverse project aspects",
            "Focused on payment contracts for supermarket chains",
            "Led refactoring efforts and optimization",
            "Implemented robust testing strategies"
          ]
        }
      ]
    },
    {
      id: 4,
      company: "Insight Data Science Lab",
      location: "Ceará, Brazil",
      period: "Aug 2021 - Nov 2023",
      type: "Previous",
      icon: "🔬",
      color: "from-purple-500 to-pink-600",
      positions: [
        {
          role: "Software Developer/Scholarship Holder in AI",
          period: "September 2022 - November 2023",
          description: [
            "Samsung-sponsored project with CRIA partnership",
            "Explored eXplainable Artificial Intelligence (XAI)",
            "Developed Samsung SmartWatches app functionalities"
          ]
        },
        {
          role: "Back End Developer/Scholarship Holder",
          period: "August 2021 - August 2022",
          description: [
            "Integrated government agencies using service mesh and microservices",
            "Applied microservices principles and containerization",
            "Extended API Gateway functionalities with plugins"
          ]
        }
      ]
    }
  ];

  return (
    <section id="experience" className="py-12 md:py-20 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12">Professional Journey</h2>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-3 sm:left-4 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500"></div>

          <div className="space-y-6 sm:space-y-8 md:space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                {/* Timeline Dot */}
                <div className={`absolute left-1 sm:left-2 md:left-6 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-gradient-to-r ${exp.color} border-2 sm:border-4 border-black z-10`}>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/20 to-transparent"></div>
                </div>

                {/* Content Card */}
                <div className="ml-8 sm:ml-12 md:ml-16">
                  <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 md:p-8 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 hover:bg-gray-800/50">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6">
                      <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-0">
                        <span className="text-xl sm:text-2xl md:text-3xl">{exp.icon}</span>
                        <div className="min-w-0 flex-1">
                          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white truncate">{exp.company}</h3>
                          <p className="text-gray-400 text-xs sm:text-sm md:text-base truncate">{exp.location}</p>
                        </div>
                      </div>
                      <div className="flex flex-col sm:items-end">
                        <span className={`inline-block px-2 sm:px-3 py-1 rounded-full text-xs font-semibold mb-2 ${
                          exp.type === 'Current' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                          exp.type === 'Volunteer' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' :
                          'bg-gray-500/20 text-gray-400 border border-gray-500/30'
                        }`}>
                          {exp.type}
                        </span>
                        <span className="text-gray-300 text-xs sm:text-sm md:text-base font-medium">{exp.period}</span>
                      </div>
                    </div>

                    {/* Positions */}
                    <div className="space-y-4 sm:space-y-6">
                      {exp.positions.map((position, posIndex) => (
                        <div key={posIndex} className="border-l-2 border-gray-700/50 pl-3 sm:pl-4">
                          <div className="mb-2 sm:mb-3">
                            <h4 className="text-base sm:text-lg md:text-xl font-semibold text-white mb-1">{position.role}</h4>
                            <p className="text-gray-400 text-xs sm:text-sm">{position.period}</p>
                          </div>
                          <div className="space-y-1 sm:space-y-2">
                            {position.description.map((item, i) => (
                              <div key={i} className="flex items-start gap-2">
                                <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${exp.color} mt-1.5 sm:mt-2 flex-shrink-0`}></div>
                                <p className="text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed">{item}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
