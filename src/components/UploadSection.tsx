import React, { useCallback } from 'react';
import { Upload, X } from 'lucide-react';

interface UploadSectionProps {
  onFileSelect: (file: File) => void;
  selectedFile: File | null;
  previewUrl: string | null;
}

export default function UploadSection({ onFileSelect, selectedFile, previewUrl }: UploadSectionProps) {
  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      onFileSelect(file);
    }
  }, [onFileSelect]);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
  }, []);

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4">Upload MRI Scan</h2>
      
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center"
      >
        {!previewUrl ? (
          <div className="space-y-4">
            <div className="flex justify-center">
              <Upload className="w-12 h-12 text-gray-400" />
            </div>
            <div>
              <p className="text-gray-600">Drag and drop your MRI scan here, or</p>
              <label className="mt-2 inline-block">
                <input
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) onFileSelect(file);
                  }}
                />
                <span className="text-blue-600 hover:text-blue-700 cursor-pointer">
                  browse to upload
                </span>
              </label>
            </div>
            <p className="text-sm text-gray-500">
              Supported formats: JPEG, PNG, DICOM
            </p>
          </div>
        ) : (
          <div className="relative">
            <img
              src={previewUrl}
              alt="MRI Scan Preview"
              className="max-w-full h-auto rounded-lg"
            />
            <button
              onClick={() => {
                URL.revokeObjectURL(previewUrl);
                onFileSelect(null as any);
              }}
              className="absolute top-2 right-2 p-1 bg-red-600 text-white rounded-full hover:bg-red-700"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}