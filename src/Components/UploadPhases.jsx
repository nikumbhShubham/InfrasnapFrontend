import React from 'react';
import { Link } from 'react-router-dom';
import brick from "../assets/brick.jpg";
import cement from "../assets/cement.webp";
import concrete from "../assets/concrete.png";
import steel from "../assets/teel.jpg";
import stone from "../assets/stone.jpg";

const UploadPhases = () => {
  const materials = [
    { name: "BRICKS", icon: brick, quantity: "20,000 to 25,000 bricks" },
    { name: "CEMENT", icon: cement, quantity: "600 bags (50 kg each)" },
    { name: "CONCRETE", icon: concrete, quantity: "100 to 150 cubic meters" },
    { name: "STEEL", icon: steel, quantity: "4 to 6 metric tons" },
    { name: "STONE", icon: stone, quantity: "10 to 15 cubic meters" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-between">
      {/* Header */}
      <header className="bg-gray-900 p-6 shadow-lg">
        <div className="flex justify-between items-center">
          <h1 className="text-white text-3xl font-bold tracking-wide">INFRASNAP</h1>
          <Link to='/createproject'>
            <button className="bg-gray-500 text-white px-5 py-2 rounded-full shadow-lg hover:bg-gray-400 transition duration-200">
              Go Back
            </button>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex justify-center items-center flex-grow">
        <div className="bg-white shadow-xl rounded-lg p-10 space-y-8 w-full max-w-3xl">
          <h2 className="text-2xl font-bold text-center text-gray-800 tracking-wide">RAW MATERIALS</h2>

          {/* Raw Materials Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
            {materials.map((material, index) => (
              <div key={index} className="flex flex-col items-center space-y-3 p-4 border rounded-lg hover:shadow-lg transition duration-300 ease-in-out">
                <img 
                  src={material.icon} 
                  alt={material.name} 
                  className="w-28 h-28 object-cover rounded-lg shadow-md" 
                />
                <p className="text-gray-700 font-semibold text-lg">{material.name}</p>
                <span className="text-gray-500">{material.quantity}</span>
              </div>
            ))}
          </div>

          {/* Start Button */}
          <div className="flex justify-end">
            <Link to='/uploadimage'>
              <button className="bg-indigo-600 text-white px-6 py-3 rounded-full flex items-center shadow-md hover:bg-indigo-700 transition duration-200">
                Start
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 p-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center text-white">
          <p className="text-sm">&copy; 2024 Infrasnap. All rights reserved</p>
          {/* <div className="flex space-x-6 mt-4 sm:mt-0">
            <img src="/path-to-appstore-logo.png" alt="App Store" className="w-10 h-10 object-cover" />
            <img src="/path-to-playstore-logo.png" alt="Google Play" className="w-10 h-10 object-cover" />
          </div> */}
        </div>
      </footer>
    </div>
  );
};

export default UploadPhases;
