import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Server, Lightbulb } from 'lucide-react';

export default function About() {
  const skills = [
    { icon: <Code />, title: 'Frontend Development', items: ['React', 'TypeScript', 'Tailwind CSS'] },
    { icon: <Server />, title: 'Backend Development', items: ['Node.js', 'Python', 'PostgreSQL'] },
    { icon: <Palette />, title: 'Design', items: ['UI/UX', 'Figma', 'Adobe XD'] },
    { icon: <Lightbulb />, title: 'Other Skills', items: ['Git', 'Docker', 'AWS'] }
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16"
        >
          <div>
            <h2 className="text-4xl font-bold mb-6 text-[#64ffda]">About Me</h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-xl text-gray-300">
                I'm a passionate developer with a keen eye for design and a love for creating seamless user experiences. 
                With several years of experience in full-stack development, I specialize in building modern web applications 
                that combine beautiful interfaces with robust functionality.
              </p>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-[#64ffda] rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80"
                alt="Tejdeep"
                className="rounded-lg w-full object-cover aspect-square"
              />
              <div className="absolute inset-0 border-2 border-[#64ffda] rounded-lg transform translate-x-3 translate-y-3 -z-10"></div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold mb-8 text-[#64ffda]">Skills & Expertise</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="bg-[#112240] rounded-xl p-6 hover:bg-[#1a2f50] transition-colors"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-2 bg-[#64ffda]/20 text-[#64ffda] rounded-lg">
                    {skill.icon}
                  </div>
                  <h4 className="text-xl font-semibold text-[#ccd6f6]">{skill.title}</h4>
                </div>
                <ul className="space-y-2">
                  {skill.items.map((item) => (
                    <li key={item} className="text-[#8892b0]">
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}