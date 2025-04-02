import React from 'react';
import { Smile, ArrowRight } from 'lucide-react';

export default function WellnessPrograms() {
  const programs = [
    {
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80",
      title: "Fitness & Health",
      description: "Access to premium fitness classes, gym memberships, and wellness coaching.",
      features: ["Virtual fitness classes", "Gym reimbursement", "Personal training"]
    },
    {
      image: "https://images.unsplash.com/photo-1527525443983-6e60c75fff46?auto=format&fit=crop&w=800&q=80",
      title: "Mental Wellness",
      description: "Comprehensive mental health support and resources for your well-being.",
      features: ["24/7 counseling", "Meditation apps", "Stress management"]
    },
    {
      image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=800&q=80",
      title: "Team Building",
      description: "Foster connections and build stronger relationships with your colleagues.",
      features: ["Social events", "Team retreats", "Community service"]
    }
  ];

  return (
    <section id="wellness" className="py-24 bg-gradient-to-b from-indigo-50/50 to-purple-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center justify-center p-2 bg-indigo-100 rounded-full mb-8">
            <Smile className="h-6 w-6 text-indigo-600" />
            <span className="ml-2 text-indigo-800 font-medium">Wellness Initiatives</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900">Wellness Programs</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive programs designed to support your physical and mental well-being.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {programs.map((program, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                  {program.title}
                </h3>
                <p className="text-gray-600 mb-6">{program.description}</p>
                <ul className="space-y-2 mb-6">
                  {program.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="inline-flex items-center text-indigo-600 font-medium hover:text-indigo-700 group/btn">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}