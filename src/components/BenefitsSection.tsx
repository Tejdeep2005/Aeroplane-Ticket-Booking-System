import React from 'react';
import { Heart, Users2, Trophy, Coffee, ArrowRight } from 'lucide-react';

export default function BenefitsSection() {
  const benefits = [
    {
      icon: <Heart className="h-8 w-8 text-indigo-600" />,
      title: 'Health & Insurance',
      description: 'Comprehensive medical, dental, and vision coverage for you and your family.',
      link: '#'
    },
    {
      icon: <Users2 className="h-8 w-8 text-indigo-600" />,
      title: 'Family Care',
      description: 'Parental leave, childcare support, and family planning assistance.',
      link: '#'
    },
    {
      icon: <Trophy className="h-8 w-8 text-indigo-600" />,
      title: 'Professional Growth',
      description: 'Learning stipends, career development programs, and mentorship opportunities.',
      link: '#'
    },
    {
      icon: <Coffee className="h-8 w-8 text-indigo-600" />,
      title: 'Work-Life Balance',
      description: 'Flexible working hours, remote work options, and paid time off.',
      link: '#'
    }
  ];

  return (
    <section id="benefits" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900">
            Comprehensive Benefits
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            We offer a complete package of benefits designed to support your health, happiness, and growth.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group relative p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="absolute -top-6 left-8">
                <div className="inline-block p-4 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl shadow-lg">
                  {benefit.icon}
                </div>
              </div>
              <div className="pt-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 mb-6">{benefit.description}</p>
                <a
                  href={benefit.link}
                  className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium group-hover:underline"
                >
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}