import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Code, User, Briefcase, Mail, Home } from 'lucide-react';

export default function Navbar() {
  const location = useLocation();

  const links = [
    { path: '/', icon: <Home />, label: 'Home' },
    { path: '/about', icon: <User />, label: 'About' },
    { path: '/projects', icon: <Code />, label: 'Projects' },
    { path: '/experience', icon: <Briefcase />, label: 'Experience' },
    { path: '/contact', icon: <Mail />, label: 'Contact' }
  ];

  return (
    <nav className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800/80 backdrop-blur-sm px-8 py-4 rounded-2xl z-40">
      <ul className="flex space-x-8">
        {links.map((link) => (
          <li key={link.path}>
            <Link
              to={link.path}
              className="relative group flex flex-col items-center text-gray-400 hover:text-purple-500 transition-colors"
            >
              {location.pathname === link.path && (
                <motion.div
                  layoutId="navbar-indicator"
                  className="absolute -top-2 w-1.5 h-1.5 bg-purple-500 rounded-full"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="text-xl">{link.icon}</span>
              <span className="text-xs mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                {link.label}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}