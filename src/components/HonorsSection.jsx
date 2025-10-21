import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, BookOpen, Users } from 'lucide-react';

export default function HonorsSection() {
  const honors = [
    {
      id: 1,
      title: "AWS DeepRacer Instructor",
      organization: "Federal University of Ceará",
      period: "September 2023 - July 2024",
      type: "Teaching",
      icon: Users,
      color: "from-blue-500 to-cyan-600",
      description: "Taught and mentored 20+ students on Reinforcement Learning concepts using AWS DeepRacer. Organized a university-wide race in collaboration with AWS, attracting over 30 participants.",
      metrics: "20+ students mentored"
    },
    {
      id: 2,
      title: "5th Place National",
      organization: "AWS DeepRacer at CSBC",
      period: "2024",
      type: "Competition",
      icon: Trophy,
      color: "from-yellow-500 to-orange-600",
      description: "Achieved 5th place out of 150 participants in the national phase of AWS DeepRacer competition at the Brazilian Computing Society Congress.",
      metrics: "Top 3.3% of 150 participants"
    },
    {
      id: 3,
      title: "1st Place Winner",
      organization: "AWS DeepRacer for Students",
      period: "São Paulo, 2023",
      type: "Competition",
      icon: Award,
      color: "from-green-500 to-emerald-600",
      description: "Won first place in the AWS DeepRacer competition for students in São Paulo, demonstrating expertise in reinforcement learning and autonomous vehicle programming.",
      metrics: "1st Place Winner"
    },
    {
      id: 4,
      title: "Published Research Paper",
      organization: "Brazilian Computing Society (CSBC)",
      period: "2022",
      type: "Research",
      icon: BookOpen,
      color: "from-purple-500 to-pink-600",
      description: "Authored and presented 'Performance Comparison of Interoperability Solutions' at the Congress of the Brazilian Computing Society, contributing to the field of system interoperability.",
      metrics: "Peer-reviewed publication"
    }
  ];

  return (
    <section id="honors" className="py-12 md:py-20 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12">Achievements & Recognition</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
          {honors.map((honor, index) => {
            const IconComponent = honor.icon;
            return (
              <motion.div
                key={honor.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 md:p-8 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 hover:bg-gray-800/50 h-full relative overflow-hidden">
                  {/* Background gradient effect */}
                  <div className={`absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br ${honor.color} opacity-5 rounded-full -translate-y-12 translate-x-12 sm:-translate-y-16 sm:translate-x-16`}></div>
                  
                  {/* Header */}
                  <div className="relative z-10 flex items-start justify-between mb-4 sm:mb-6">
                    <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
                      <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-r ${honor.color} flex items-center justify-center shadow-lg flex-shrink-0`}>
                        <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-1 truncate">{honor.title}</h3>
                        <p className="text-gray-400 text-xs sm:text-sm truncate">{honor.organization}</p>
                      </div>
                    </div>
                  </div>

                  {/* Type Badge */}
                  <div className="relative z-10 mb-3 sm:mb-4">
                    <span className={`inline-block px-2 sm:px-3 py-1 rounded-full text-xs font-semibold ${
                      honor.type === 'Teaching' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' :
                      honor.type === 'Competition' ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' :
                      'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                    }`}>
                      {honor.type}
                    </span>
                  </div>

                  {/* Description */}
                  <div className="relative z-10 mb-4 sm:mb-6">
                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                      {honor.description}
                    </p>
                  </div>

                  {/* Period and Metrics */}
                  <div className="relative z-10 flex items-center justify-between pt-3 sm:pt-4 border-t border-gray-700/50">
                    <div className="flex items-center gap-2 min-w-0 flex-1">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${honor.color} flex-shrink-0`}></div>
                      <span className="text-gray-400 text-xs sm:text-sm font-medium truncate">{honor.period}</span>
                    </div>
                    <span className="text-white text-xs sm:text-sm font-semibold ml-2 flex-shrink-0">{honor.metrics}</span>
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
