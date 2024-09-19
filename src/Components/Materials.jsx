import React from 'react';
import { Link } from 'react-router-dom';
import ex4 from "../assets/ex4.webp";
import pfd from "../assets/pfd.avif";
import sup from "../assets/sup.jpg";
import elep from "../assets/elep.jpg";
import int from "../assets/int.jpg";
import fac from "../assets/fac.jpeg";

const Materials = () => {
  const phases = [
    { name: "Marking & Excavation", icon: ex4 },
    { name: "Foundation", icon: pfd },
    { name: "Super-Structure", icon: sup },
    { name: "Electrical & Plumbing", icon: elep },
    { name: "Interiors", icon: int },
    { name: "Facade", icon: fac },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-between">
      {/* Header */}
      <header className="bg-gray-900 p-6 shadow-lg">
        <div className="flex justify-between items-center">
          <h1 className="text-white text-3xl font-bold tracking-wide">INFRASNAP</h1>
          <Link to='/createproject'>
            <button className="bg-gray-500 text-white px-5 py-2 rounded-full shadow-lg hover:bg-gray-600 transition duration-200">
              Go Back
            </button>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex justify-center items-center flex-grow">
        <div className="bg-white shadow-xl rounded-lg p-10 space-y-8 w-full max-w-4xl">
          <h2 className="text-2xl font-bold text-center text-gray-800 tracking-wide">
            PHASES OF CONSTRUCTION
          </h2>

          {/* Construction Phases */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
            {phases.map((phase, index) => (
              <Link to='/uploadimage' key={index}>
                <div className="flex flex-col items-center space-y-3 p-4 border rounded-lg hover:shadow-lg transition duration-300 ease-in-out cursor-pointer">
                  <img 
                    src={phase.icon} 
                    alt={phase.name} 
                    className="w-24 h-24 object-cover rounded-lg shadow-md" 
                  />
                  <p className="text-gray-700 font-semibold text-center">{phase.name}</p>
                </div>
              </Link>
            ))}
          </div>

          {/* Add Phase Button */}
          <div className="flex justify-end">
            <button className="bg-indigo-600 text-white px-6 py-3 rounded-full flex items-center shadow-md hover:bg-indigo-700 transition duration-200">
              Add Phase
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </button>
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

export default Materials;
