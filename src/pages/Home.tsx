import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Twitter, Code, Briefcase, User } from 'lucide-react';

export default function Home() {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-600 via-indigo-800 to-purple-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtNi42MjcgMC0xMiA1LjM3My0xMiAxMnM1LjM3MyAxMiAxMiAxMiAxMi01LjM3MyAxMi0xMi01LjM3My0xMi0xMi0xMnptLTEyIDEyYzAtNi42MjctNS4zNzMtMTItMTItMTJTMCAyMy4zNzMgMCAzMHM1LjM3MyAxMiAxMiAxMiAxMi01LjM3MyAxMi0xMnoiIGZpbGw9IiNmZmYiIG9wYWNpdHk9Ii4wNSIvPjwvZz48L3N2Zz4=')] opacity-20"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block p-2 px-4 rounded-full bg-white/10 backdrop-blur-sm mb-8"
          >
            <span className="text-white/80">Welcome to my portfolio</span>
          </motion.div>

          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            Hi, I'm{' '}
            <span className="relative">
              <span className="relative z-10 bg-gradient-to-r from-cyan-400 via-pink-500 to-violet-500 text-transparent bg-clip-text">
                Tejdeep
              </span>
              <motion.span
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="absolute bottom-0 left-0 h-3 bg-gradient-to-r from-cyan-400/20 via-pink-500/20 to-violet-500/20 -z-10"
              />
            </span>
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-2xl mx-auto">
              A creative full-stack developer crafting innovative digital experiences with modern technologies.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a
              href="#contact"
              className="group relative px-8 py-4 bg-white rounded-xl text-violet-900 font-semibold hover:scale-105 transition-transform"
            >
              <span className="relative z-10 flex items-center gap-2">
                Get in touch
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-pink-500 to-violet-500 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity" />
            </a>

            <div className="flex gap-4">
              {[
                { icon: <Github className="w-6 h-6" />, href: 'https://github.com', label: 'GitHub' },
                { icon: <Linkedin className="w-6 h-6" />, href: 'https://linkedin.com', label: 'LinkedIn' },
                { icon: <Twitter className="w-6 h-6" />, href: 'https://twitter.com', label: 'Twitter' }
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating icons */}
      {[Code, Briefcase, User].map((Icon, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.2, scale: 1 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
            delay: index * 0.5
          }}
          className="absolute text-white/20"
          style={{
            top: `${20 + index * 30}%`,
            left: `${10 + index * 30}%`,
            transform: 'translate(-50%, -50%)'
          }}
        >
          <Icon size={40} />
        </motion.div>
      ))}
    </div>
  );
}