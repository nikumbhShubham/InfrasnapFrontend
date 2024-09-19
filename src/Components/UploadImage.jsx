import React from 'react';
import ProgressTracker from './ProgressTracker';

const ImageUpload = () => {
  return (
    <div className="bg-white shadow-md rounded-md p-6 max-w-4xl mx-auto mt-6">
      <h1 className="text-xl font-bold text-center mb-4">Upload Image</h1>
      <div className="border-2 border-dashed border-gray-300 h-48 flex justify-center items-center rounded-md">
        <div className="text-center">
          <button className="bg-gray-100 p-3 rounded-full">
            <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
            </svg>
          </button>
          <p className="mt-4 text-sm text-gray-600">Upload Image</p>
        </div>
      </div>
      <button className="mt-4 w-full bg-gray-600 text-white py-2 px-4 rounded-md hover:bg-gray-700 transition">Generate 360 Degree View</button>
    <ProgressTracker/>
    </div>
  );
};

export default ImageUpload;
