import React from 'react';
import { AlertCircle, CheckCircle } from 'lucide-react';

interface ResultSectionProps {
  result: {
    probability: number;
    type: 'benign' | 'malignant' | null;
  };
}

export default function ResultSection({ result }: ResultSectionProps) {
  const isBenign = result.type === 'benign';
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4">Analysis Results</h2>
      
      <div className={`p-4 rounded-lg ${
        isBenign ? 'bg-green-50' : 'bg-red-50'
      }`}>
        <div className="flex items-center space-x-3">
          {isBenign ? (
            <CheckCircle className="w-6 h-6 text-green-600" />
          ) : (
            <AlertCircle className="w-6 h-6 text-red-600" />
          )}
          <h3 className={`font-semibold ${
            isBenign ? 'text-green-800' : 'text-red-800'
          }`}>
            {isBenign ? 'Benign Indication' : 'Malignant Indication'}
          </h3>
        </div>
        
        <div className="mt-4">
          <div className="mb-2 flex justify-between">
            <span className="text-sm font-medium text-gray-600">
              Confidence Level
            </span>
            <span className="text-sm font-semibold">
              {result.probability.toFixed(1)}%
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className={`h-2 rounded-full ${
                isBenign ? 'bg-green-600' : 'bg-red-600'
              }`}
              style={{ width: `${result.probability}%` }}
            />
          </div>
        </div>
      </div>

      <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
        <p className="text-sm text-yellow-800">
          <strong>Important Notice:</strong> This is an AI-assisted analysis and should not be considered as a final diagnosis. Please consult with a qualified healthcare professional for proper medical evaluation and diagnosis.
        </p>
      </div>
    </div>
  );
}