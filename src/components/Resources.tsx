import React from 'react';
import { BookOpen, Mail, Phone, ArrowRight, FileText, Calendar, HeartPulse, HelpCircle } from 'lucide-react';

export default function Resources() {
  const quickLinks = [
    {
      icon: <FileText className="h-5 w-5" />,
      title: "Benefits Enrollment Guide",
      description: "Step-by-step guide to enrolling in your benefits"
    },
    {
      icon: <HeartPulse className="h-5 w-5" />,
      title: "Healthcare Provider Directory",
      description: "Find in-network healthcare providers"
    },
    {
      icon: <Calendar className="h-5 w-5" />,
      title: "Wellness Program Calendar",
      description: "Schedule of upcoming wellness events"
    },
    {
      icon: <HelpCircle className="h-5 w-5" />,
      title: "Employee Assistance Program",
      description: "24/7 support for work-life challenges"
    }
  ];

  return (
    <section id="resources" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center justify-center p-2 bg-indigo-100 rounded-full mb-8">
            <BookOpen className="h-6 w-6 text-indigo-600" />
            <span className="ml-2 text-indigo-800 font-medium">Resources Hub</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900">Employee Resources</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to make the most of your benefits and wellness programs.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Quick Access
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="group flex items-start p-4 bg-white rounded-xl hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex-shrink-0 p-2 bg-indigo-100 rounded-lg">
                    {link.icon}
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900 group-hover:text-indigo-600 transition-colors">
                      {link.title}
                    </h4>
                    <p className="text-sm text-gray-600">{link.description}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-indigo-900 text-white rounded-2xl p-8">
            <h3 className="text-2xl font-semibold mb-6">
              Need Assistance?
            </h3>
            <p className="text-gray-300 mb-8">
              Our dedicated HR team is here to help you navigate your benefits and answer any questions you may have.
            </p>
            <div className="space-y-6">
              <div className="flex items-center">
                <Mail className="h-6 w-6 text-indigo-400" />
                <span className="ml-3 text-lg">hr@wellcorp.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-6 w-6 text-indigo-400" />
                <span className="ml-3 text-lg">1-800-WELLCORP</span>
              </div>
              <button className="w-full mt-8 px-6 py-3 bg-white text-gray-900 rounded-xl hover:bg-gray-100 transition-colors flex items-center justify-center group">
                Schedule a Consultation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}