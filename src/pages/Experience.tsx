import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Calendar } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      company: 'Tech Solutions Inc.',
      position: 'Senior Full Stack Developer',
      period: '2022 - Present',
      description: 'Led development of multiple high-impact web applications, mentored junior developers, and implemented best practices.',
      technologies: ['React', 'Node.js', 'AWS']
    },
    {
      company: 'Digital Innovations',
      position: 'Frontend Developer',
      period: '2020 - 2022',
      description: 'Developed responsive web applications and improved user experience through modern frontend technologies.',
      technologies: ['React', 'TypeScript', 'Redux']
    },
    {
      company: 'StartUp Labs',
      position: 'Software Engineer',
      period: '2018 - 2020',
      description: 'Built and maintained various web applications, collaborated with cross-functional teams.',
      technologies: ['JavaScript', 'Python', 'Docker']
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-8">Experience</h2>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-purple-500"
            >
              <div className="absolute left-0 top-0 w-2 h-2 bg-purple-500 rounded-full transform -translate-x-1/2" />
              
              <div className="bg-gray-800 rounded-xl p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Building2 className="text-purple-500" />
                  <h3 className="text-xl font-semibold">{exp.company}</h3>
                </div>
                
                <div className="flex items-center gap-2 text-gray-400 mb-2">
                  <Calendar className="w-4 h-4" />
                  <span>{exp.period}</span>
                </div>
                
                <h4 className="text-lg font-medium text-purple-500 mb-4">{exp.position}</h4>
                
                <p className="text-gray-400 mb-4">{exp.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-purple-500/20 text-purple-500 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}