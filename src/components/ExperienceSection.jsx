import React from 'react';
import { motion } from 'framer-motion';

export default function ExperienceSection() {
  const experiences = [
    {
      title: "marIA Educação (January 2024 - Present)",
      positions: [
        {
          role: "Machine Learning Engineer | Mid-Level",
          period: "January 2025 - Present",
          description: [
            "Development of multi-agent architectures integrating multiple language models (LLMs), enabling complex and effective solutions",
            "Technical review (code review), ensuring code quality and best development practices",
            "Automation and optimization of manual processes, reducing operational overhead and increasing team efficiency",
            "Development of validation strategies with human annotators, aiming for continuous improvement in language model accuracy",
            "Direct implementation of multiple architectures involving ML components",
            "Creation and maintenance of robust pipelines for model monitoring and evaluation, enabling agile, data-driven decision-making",
            "Implementation of advanced enterprise content indexing strategies, improving model responses to meet product and cross-functional team demands"
          ]
        },
        {
          role: "Tech Lead",
          period: "January 2025 - March 2025",
          description: [
            "Stepped into a leadership role in the Machine Learning squad alongside the CTO to enhance and scale ML-driven products with a focus on quality and performance",
            "Acted as the bridge between the product team and the Machine Learning squad, ensuring strategic and technical alignment"
          ]
        },
        {
          role: "Software Engineer | Mid-Level",
          period: "November 2024 - December 2024",
          description: [
            "Worked on a project to help teachers create personalized workbooks and classes, supported by a specialized LLM model",
            "Applied microservices patterns to optimize material generation without affecting user experience or API performance",
            "Supported implementation of best development practices including design patterns and linters",
            "Designed and implemented CI/CD workflows to automate tasks and streamline testing, improving delivery cycles"
          ]
        }
      ]
    },
    {
      title: "Youth With A Mission (October 2025 - Present)",
      positions: [
        {
          role: "AI Software Engineer (Volunteer)",
          period: "Kansas City, Missouri, United States",
          description: [
            "Building speech-to-speech translation system for the Oral Bible Translation project",
            "Collaborating with global team of developers and linguists on low-resource language solutions"
          ]
        }
      ]
    },
    {
      title: "IDEOS (July 2023 - October 2024)",
      positions: [
        {
          role: "Software Developer",
          period: "Ceará, Brazil",
          description: [
            "Contributed as versatile member of agile team on diverse project aspects including robust data platform and data retrieval API",
            "Focused on efficiently managing payment contracts for supermarket chains",
            "Led refactoring efforts, optimizing existing functionalities to align with new client requirements",
            "Implemented robust testing strategy to ensure reliability of key components, minimizing risk of failures"
          ]
        }
      ]
    },
    {
      title: "Insight Data Science Lab (August 2021 - November 2023)",
      positions: [
        {
          role: "Software Developer/Scholarship Holder in AI",
          period: "September 2022 - November 2023",
          description: [
            "Samsung-sponsored project in partnership with CRIA working with professionals from medicine, physiotherapy, and engineering",
            "Explored eXplainable Artificial Intelligence (XAI), examining state-of-the-art solutions for project application",
            "Developed new functionalities for Samsung SmartWatches app, leveraging sensor data to generate insights for doctors and patients to predict health framework"
          ]
        },
        {
          role: "Back End Developer/Scholarship Holder",
          period: "August 2021 - August 2022",
          description: [
            "Worked on integrating government agencies in Ceará state, Brazil, using service mesh and microservices",
            "Applied microservices principles to identify necessary components, containerized them, and utilized network communication",
            "Integrated components with existing services, extended API Gateway functionalities with plugins",
            "Applied REST principles and automation including certificate generation, application registration, and solution replication",
            "Tested system behavior under load, checking communication latency"
          ]
        }
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-12">Overview of Current and Previous Positions</h2>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h3 className="text-2xl font-bold mb-6">{exp.title}</h3>
              
              {exp.positions.map((position, posIndex) => (
                <div key={posIndex} className="mb-6 last:mb-0">
                  <p className="text-gray-400 mb-2 italic">
                    {position.role}
                    {position.period && ` (${position.period})`}
                  </p>
                  <div className="text-gray-300 space-y-2">
                    {position.description.map((item, i) => (
                      <p key={i} className="text-sm leading-relaxed">• {item}</p>
                    ))}
                  </div>
                  {posIndex < exp.positions.length - 1 && (
                    <div className="mt-4 border-t border-gray-800 pt-4" />
                  )}
                </div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
