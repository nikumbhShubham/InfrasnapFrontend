import React from "react";
import bgimg2 from "../assets/bgimg2.jpeg";
import continueProject from "../assets/continueProject.jpg"
import pr01 from "../assets/pr01.jpg"
import pr02 from "../assets/pr02.jpg"
import pr03 from "../assets/pr03.jpg"
import crw from "../assets/crw.jpg"
import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <header className="bg-gray-900 text-white py-4 shadow-md">
        <nav className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            {/* <img src="logo.png" alt="Infrasnap Logo" className="h-10" /> */}
            <h1 className="text-3xl font-bold">INFRASNAP</h1>
          </div>
          <ul className="flex space-x-6">
            <li><a href="#" className="hover:text-blue-400 transition-colors duration-200">Home</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors duration-200">Projects</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors duration-200">Reports</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors duration-200">Tools</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors duration-200">About</a></li>
          </ul>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-lg transition-colors duration-200">
            Get Started
          </button>
        </nav>
      </header>

      {/* Hero Section with Background Image */}
      <section
        className="relative py-32 bg-cover bg-center"
        style={{
          backgroundImage: `url(${bgimg2})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed"
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="container mx-auto relative z-10 text-center text-white">
          <h2 className="text-5xl font-extrabold mb-6">
            Real-Time Construction Progress, Simplified.
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Monitor your construction projects effortlessly. Get AI-driven insights and tracking to ensure your projects stay on track.
          </p>
          <Link to='/dashboard'>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg text-lg transition-colors duration-200">
            Check Project Dashboard
          </button>
          </Link>
        </div>
      </section>

      {/* Project Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold text-gray-800 mb-10">Start a New Project</h3>
          <div className="flex justify-center space-x-10">
            <Link to='/createproject'>
            <div className="w-64 h-64 bg-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-center hover:shadow-2xl transition-shadow duration-200 cursor-pointer">
              <div className="text-6xl font-bold text-gray-800">+</div>
              <p className="mt-4 text-gray-600">Blank Project</p>
            </div>
            </Link>
            <Link to='/continueproject'>
            <div className="w-64 h-64 bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition-shadow duration-200 cursor-pointer">
              <img src={continueProject} alt="Continue Project" className="w-full h-40 object-cover rounded-md" />
              <p className="mt-4 text-gray-600 text-center">Continue Project</p>
            </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Construction Sites Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold text-gray-800 mb-10">Sites Under Construction</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-100 rounded-lg shadow-lg p-4 hover:shadow-2xl transition-shadow duration-200">
              <img
                src={pr01}
                alt="Mumbai Construction Site"
                className="w-full h-40 object-cover rounded-md"
              />
              <p className="mt-4 font-medium text-gray-700">Mumbai Construction Site</p>
            </div>
            <div className="bg-gray-100 rounded-lg shadow-lg p-4 hover:shadow-2xl transition-shadow duration-200">
              <img
                src={pr02}
                alt="Pune Construction Site"
                className="w-full h-40 object-cover rounded-md"
              />
              <p className="mt-4 font-medium text-gray-700">Pune Construction Site</p>
            </div>
            <div className="bg-gray-100 rounded-lg shadow-lg p-4 hover:shadow-2xl transition-shadow duration-200">
              <img
                src={pr03}
                alt="Bhopal Construction Site"
                className="w-full h-40 object-cover rounded-md"
              />
              <p className="mt-4 font-medium text-gray-700">Bhopal Construction Site</p>
            </div>
          </div>
        </div>
      </section>

      {/* Let Us Help Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-y-10 md:space-y-0 md:space-x-10">
          <div className="md:w-1/2">
            <img
              src={crw}
              alt="Construction Worker"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <h3 className="text-3xl font-bold text-gray-800">Let us help you build.</h3>
            <p className="mt-4 text-gray-600">
              Our tools and insights will help you manage construction with ease and efficiency. Get your projects up and running faster.
            </p>
          </div>
        </div>
      </section>

      {/* Get a Free Quote Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto flex flex-col items-center text-center">
          <div className="flex items-center space-x-4 mb-6">
            <img
              src={crw}
              alt="Construction Worker"
              className="w-24 h-24 rounded-full shadow-lg"
            />
            <h3 className="text-2xl font-bold text-gray-800">Get a Free Quote Now!</h3>
          </div>
          <div className="flex space-x-4">
            <input
              type="email"
              className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-500 w-full md:w-auto"
              placeholder="Your work email address"
            />
            <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors duration-200">
              Join the waitlist
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8">
        <div className="container mx-auto flex flex-col items-center space-y-4">
          {/* <img src="logo.png" alt="Infrasnap Logo" className="h-10" /> */}
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors duration-200">Download Now</a>
            <a href="#" className="hover:text-white transition-colors duration-200">License</a>
            <a href="#" className="hover:text-white transition-colors duration-200">Features</a>
            <a href="#" className="hover:text-white transition-colors duration-200">Pricing</a>
            <a href="#" className="hover:text-white transition-colors duration-200">Careers</a>
            <a href="#" className="hover:text-white transition-colors duration-200">Help</a>
            <a href="#" className="hover:text-white transition-colors duration-200">Privacy Policy</a>
          </div>
          <p className="text-sm">&copy; 2024 InfraSnap. All rights reserved.</p>
          {/* <div className="flex space-x-4">
            <a href="#"><img src="appstore.png" alt="App Store" className="h-8" /></a>
            <a href="#"><img src="playstore.png" alt="Google Play" className="h-8" /></a>
          </div> */}
        </div>
      </footer>
    </div>
  );
};

export default Homepage;
