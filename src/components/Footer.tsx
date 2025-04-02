import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-6">
              <Briefcase className="h-8 w-8 text-indigo-400" />
              <span className="ml-2 text-2xl font-bold">CareerPro</span>
            </div>
            <p className="text-gray-400 mb-8 max-w-md">
              Empowering students and professionals to make informed career decisions and achieve their professional goals.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-indigo-400" />
                <span className="ml-3 text-gray-400">123 Career Avenue, Education City, EC 12345</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-indigo-400" />
                <span className="ml-3 text-gray-400">1-800-CAREER-PRO</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-indigo-400" />
                <span className="ml-3 text-gray-400">contact@careerpro.com</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/student-guidance" className="text-gray-400 hover:text-indigo-400 transition-colors">
                  School Students
                </Link>
              </li>
              <li>
                <Link to="/college-guidance" className="text-gray-400 hover:text-indigo-400 transition-colors">
                  College Students
                </Link>
              </li>
              <li>
                <Link to="/career-paths" className="text-gray-400 hover:text-indigo-400 transition-colors">
                  Career Paths
                </Link>
              </li>
              <li>
                <Link to="/job-search" className="text-gray-400 hover:text-indigo-400 transition-colors">
                  Job Search
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Resources</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-indigo-400 transition-colors">
                  Career Blog
                </Link>
              </li>
              <li>
                <Link to="/webinars" className="text-gray-400 hover:text-indigo-400 transition-colors">
                  Webinars
                </Link>
              </li>
              <li>
                <Link to="/success-stories" className="text-gray-400 hover:text-indigo-400 transition-colors">
                  Success Stories
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-indigo-400 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">&copy; {new Date().getFullYear()} CareerPro. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}