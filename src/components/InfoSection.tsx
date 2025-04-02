import React from 'react';
import { Info, CheckCircle2 } from 'lucide-react';

export default function InfoSection() {
  const features = [
    'Advanced AI-powered analysis',
    'Quick results in seconds',
    'Support for multiple image formats',
    'High accuracy rate',
    'HIPAA compliant',
    'Secure data handling'
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center space-x-2 mb-4">
        <Info className="w-5 h-5 text-blue-600" />
        <h2 className="text-xl font-semibold">About Our Technology</h2>
      </div>

      <p className="text-gray-600 mb-6">
        Our AI-powered brain tumor detection system uses state-of-the-art deep learning algorithms to analyze MRI scans and identify potential abnormalities with high accuracy.
      </p>

      <div className="space-y-3">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center space-x-2">
            <CheckCircle2 className="w-5 h-5 text-green-600" />
            <span className="text-gray-700">{feature}</span>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
        <h3 className="font-semibold text-blue-800 mb-2">How It Works</h3>
        <ol className="list-decimal list-inside space-y-2 text-sm text-blue-800">
          <li>Upload your MRI scan image</li>
          <li>Our AI analyzes the image in seconds</li>
          <li>Receive detailed analysis results</li>
          <li>Share results with your healthcare provider</li>
        </ol>
      </div>
    </div>
  );
}