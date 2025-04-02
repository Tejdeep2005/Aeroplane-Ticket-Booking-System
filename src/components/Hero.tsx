import React from 'react';
import { Heart, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative pt-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtNi42MjcgMC0xMiA1LjM3My0xMiAxMnM1LjM3MyAxMiAxMiAxMiAxMi01LjM3MyAxMi0xMi01LjM3My0xMi0xMi0xMnptLTEyIDEyYzAtNi42MjctNS4zNzMtMTItMTItMTJTMCAyMy4zNzMgMCAzMHM1LjM3MyAxMiAxMiAxMiAxMi01LjM3MyAxMi0xMnoiIGZpbGw9IiM2MzY2ZjEiIG9wYWNpdHk9Ii4wNSIvPjwvZz48L3N2Zz4=')] opacity-40"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-48">
        <div className="text-center relative">
          <div className="inline-flex items-center justify-center p-2 bg-indigo-100 rounded-full mb-8">
            <Heart className="h-6 w-6 text-indigo-600" />
            <span className="ml-2 text-indigo-800 font-medium">Employee First</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Your Wellness,{' '}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">
              Our Priority
            </span>
          </h1>
          
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            Experience a workplace that prioritizes your well-being with comprehensive benefits, wellness programs, and support systems designed for your success.
          </p>
          
          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-4 text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-indigo-500/25 flex items-center justify-center group">
              Explore Benefits
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 text-indigo-600 bg-white rounded-full hover:bg-indigo-50 transition-all shadow-lg border-2 border-indigo-100">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Decorative blob */}
      <div className="absolute -bottom-48 left-1/2 -translate-x-1/2">
        <div className="w-[800px] h-[800px] bg-gradient-to-br from-indigo-100/50 to-purple-100/50 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
}