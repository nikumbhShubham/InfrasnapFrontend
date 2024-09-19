import React, { useState } from "react";
import { Link } from 'react-router-dom';

const ContinueProject = () => {
  const [stage, setStage] = useState("");

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      {/* Header */}
      <div className="w-full bg-gray-800 p-4 flex justify-between items-center shadow-md">
        <h1 className="text-white text-2xl font-bold">INFRASNAP</h1>
        <Link to='/'>
        <button className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded-md">
          Go Back
        </button>
        </Link>
      </div>

      {/* Main Form Area */}
      <div className="flex flex-col lg:flex-row justify-center items-start mt-8 gap-8 lg:gap-12">
        {/* Form 1: Continue Project */}
        <div className="bg-white shadow-lg rounded-lg p-8 w-full lg:w-1/2">
          <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">
            Continue Project
          </h2>

          {/* Site Name */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Site Name</label>
            <input
              type="text"
              placeholder="Enter Site Name"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Number of Buildings */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Number of Buildings
            </label>
            <input
              type="number"
              placeholder="Input Number of Buildings"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Stage of Construction */}
          <div className="mb-4 relative">
            <label className="block text-gray-700 font-medium mb-2">
              Stage of Construction
            </label>
            <div className="flex items-center border border-gray-300 rounded-md p-3">
              <input
                type="text"
                placeholder="Select Stage of Construction"
                className="w-full focus:outline-none"
                value={stage}
                readOnly
              />
              <button
                className="ml-2 p-2 bg-indigo-500 text-white rounded-full"
                onClick={() => setStage(stage ? "" : "Select")}
              >
                <svg
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 9l6 6 6-6"
                  />
                </svg>
              </button>
            </div>
            {stage && (
              <div className="absolute w-full bg-white shadow-lg mt-1 rounded-md z-10">
                <button
                  onClick={() => setStage("Foundation")}
                  className="w-full text-left p-2 hover:bg-gray-100"
                >
                  Foundation
                </button>
                <button
                  onClick={() => setStage("Super Structure")}
                  className="w-full text-left p-2 hover:bg-gray-100"
                >
                  Super Structure
                </button>
                <button
                  onClick={() => setStage("Facade")}
                  className="w-full text-left p-2 hover:bg-gray-100"
                >
                  Facade
                </button>
                <button
                  onClick={() => setStage("Interiors")}
                  className="w-full text-left p-2 hover:bg-gray-100"
                >
                  Interiors
                </button>
              </div>
            )}
          </div>

          {/* Budget */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Budget</label>
            <input
              type="number"
              placeholder="Input Estimated Budget For The Project"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-between mt-6">
            <Link to='/materials'>
            <button className="bg-gray-100 border border-gray-300 text-gray-700 py-2 px-6 rounded-md hover:bg-gray-200">
              Get the List of Raw Materials
            </button>
            </Link>
            <Link to='/uploadphases'>
            <button className="bg-indigo-500 text-white py-2 px-6 rounded-md hover:bg-indigo-600">
              Start Project
            </button>
            </Link>
          </div>
        </div>

        {/* Form 2: Location Selection */}
        <div className="bg-white shadow-lg rounded-lg p-8 w-full lg:w-1/2">
          <h3 className="text-3xl font-semibold mb-6 text-center text-gray-800">
            Select Location
          </h3>

          {/* Country Selection */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Country
            </label>
            <input
              type="text"
              placeholder="Select Country of the Site"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* State Selection */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              State
            </label>
            <input
              type="text"
              placeholder="Select State"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* City Selection */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">City</label>
            <input
              type="text"
              placeholder="Select City"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Continue Button */}
          {/* <Link to='/dashboard'>
          <button className="bg-indigo-500 text-white py-2 px-6 rounded-md w-full hover:bg-indigo-600">
            Continue
          </button>
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default ContinueProject;
