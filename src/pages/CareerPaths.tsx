import React, { useState } from 'react';
import { Search, BookOpen, Code, Stethoscope, Building2, Briefcase, ChevronRight, TrendingUp, Users, DollarSign, Clock, MapPin } from 'lucide-react';

interface CareerPath {
  id: number;
  title: string;
  icon: JSX.Element;
  description: string;
  skills: string[];
  averageSalary: string;
  growthRate: string;
  timeToQualify: string;
  companies: string[];
}

const careerPaths: CareerPath[] = [
  {
    id: 1,
    title: "Software Development",
    icon: <Code className="h-6 w-6" />,
    description: "Design, develop, and maintain software applications and systems. Work with various programming languages and frameworks.",
    skills: ["Programming", "Problem Solving", "System Design", "Agile Methodologies"],
    averageSalary: "$95,000",
    growthRate: "22%",
    timeToQualify: "4 years",
    companies: ["Google", "Microsoft", "Amazon", "Apple"]
  },
  {
    id: 2,
    title: "Healthcare Administration",
    icon: <Stethoscope className="h-6 w-6" />,
    description: "Manage healthcare facilities, coordinate medical services, and ensure efficient operation of healthcare organizations.",
    skills: ["Healthcare Management", "Leadership", "Operations", "Compliance"],
    averageSalary: "$85,000",
    growthRate: "18%",
    timeToQualify: "4-6 years",
    companies: ["Mayo Clinic", "Cleveland Clinic", "Kaiser Permanente"]
  },
  {
    id: 3,
    title: "Business Analytics",
    icon: <TrendingUp className="h-6 w-6" />,
    description: "Analyze business data to drive decision-making, identify trends, and improve business operations.",
    skills: ["Data Analysis", "Statistics", "Business Intelligence", "SQL"],
    averageSalary: "$80,000",
    growthRate: "15%",
    timeToQualify: "4 years",
    companies: ["Deloitte", "McKinsey", "IBM", "Oracle"]
  }
];

export default function CareerPaths() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPath, setSelectedPath] = useState<CareerPath | null>(null);

  const filteredPaths = careerPaths.filter(path =>
    path.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    path.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Explore Career Paths</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover detailed information about various career paths, required skills, and growth opportunities
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search career paths..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Career Paths Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPaths.map((path) => (
            <div
              key={path.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
              onClick={() => setSelectedPath(path)}
            >
              <div className="p-6">
                <div className="inline-flex items-center justify-center p-3 bg-indigo-100 rounded-lg mb-4">
                  {path.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{path.title}</h3>
                <p className="text-gray-600 mb-4">{path.description}</p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-500">
                    <DollarSign className="h-4 w-4 mr-2" />
                    Average Salary: {path.averageSalary}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <TrendingUp className="h-4 w-4 mr-2" />
                    Growth Rate: {path.growthRate}
                  </div>
                </div>
                <button className="mt-4 inline-flex items-center text-indigo-600 hover:text-indigo-700">
                  Learn More
                  <ChevronRight className="ml-1 h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Career Path Modal */}
        {selectedPath && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center">
                    <div className="p-3 bg-indigo-100 rounded-lg mr-4">
                      {selectedPath.icon}
                    </div>
                    <h2 className="text-2xl font-bold">{selectedPath.title}</h2>
                  </div>
                  <button
                    onClick={() => setSelectedPath(null)}
                    className="text-gray-400 hover:text-gray-500"
                  >
                    <span className="sr-only">Close</span>
                    <X className="h-6 w-6" />
                  </button>
                </div>

                <div className="space-y-6">
                  <p className="text-gray-600">{selectedPath.description}</p>

                  <div>
                    <h3 className="font-semibold text-lg mb-2">Required Skills</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedPath.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center mb-2">
                        <DollarSign className="h-5 w-5 text-indigo-600 mr-2" />
                        <h4 className="font-semibold">Average Salary</h4>
                      </div>
                      <p className="text-gray-600">{selectedPath.averageSalary}</p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center mb-2">
                        <TrendingUp className="h-5 w-5 text-indigo-600 mr-2" />
                        <h4 className="font-semibold">Growth Rate</h4>
                      </div>
                      <p className="text-gray-600">{selectedPath.growthRate}</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-2">Top Companies</h3>
                    <div className="grid grid-cols-2 gap-2">
                      {selectedPath.companies.map((company, index) => (
                        <div
                          key={index}
                          className="flex items-center p-2 bg-gray-50 rounded-lg"
                        >
                          <Building2 className="h-4 w-4 text-gray-400 mr-2" />
                          {company}
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => setSelectedPath(null)}
                    className="w-full mt-6 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}