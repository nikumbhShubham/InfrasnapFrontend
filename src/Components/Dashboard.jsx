import React from 'react';
import { FiDownload } from 'react-icons/fi';
import { AiOutlineUpload } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import pd1 from "../assets/pd1.webp";
import degree from "../assets/degree.png";
import dchart from "../assets/dchart.png";
import donut from "../assets/donut.png";
import pr3 from "../assets/pr03.jpg";
import pr4 from "../assets/pr4.jpg";
import pr5 from "../assets/pr5.jpg";


const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white text-xl font-bold">iNFRASNAP</div>
          <div className="space-x-8 flex">
            <a href="#" className="text-white hover:text-gray-300">Home</a>
            <a href="#" className="text-white hover:text-gray-300">Projects</a>
            <a href="#" className="text-white hover:text-gray-300">Reports</a>
            <a href="#" className="text-white hover:text-gray-300">Tools</a>
            <a href="#" className="text-white hover:text-gray-300">About</a>
            <div className="flex space-x-4">
              <button className="flex items-center bg-gray-700 text-white px-4 py-2 rounded-lg">
                <FiDownload className="mr-2" /> Download Report
              </button>
              <Link to='/uploadimage'>
                <button className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg">
                  <AiOutlineUpload className="mr-2" /> Upload
                </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Project Image & 3D View */}
          <div className="space-y-4">
            <img
              src={pd1}
              alt="Project"
              className="rounded-lg w-full h-auto"
            />
            <button className="flex justify-center items-center space-x-2 text-blue-600 hover:text-blue-400 mx-auto"> {/* Added justify-center and mx-auto */}
              <img src={degree} className="w-8 h-8" alt="3D View" />
              <span>3D View</span>
            </button>
          </div>

          {/* Progress & Details */}
          <div>
            <div className="bg-white shadow-md p-6 rounded-lg space-y-6">
              {/* Chart - placeholder */}
              <div className="flex justify-between">
                {/* Chart */}
                <div className=" w-3/4 h-full">
                  <img
                    src={dchart}
                    alt="Chart"
                    className="w-full h-full"  // Ensures the chart fills both width and height
                  />
                </div>

                {/* Side Progress Div */}
                <div className=" w-2/5 h-full flex items-center">
                  <div className="relative">
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                      {/* <span className="text-2xl font-bold">80%</span> */}
                    </div>
                    <img
                      src={donut}
                      alt="Chart"
                      className="w-full"
                    />
                  </div>
                </div>
              </div>

              <div className="text-center">
                <ul className="space-y-2">
                  <li className="flex justify-between items-center">
                    <span>Excavation</span>
                    <span>100/100</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>Foundation</span>
                    <span>80/100</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>Walls and Columns</span>
                    <span>10/100</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>Slab</span>
                    <span>10/100</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>Interior</span>
                    <span>5/100</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="text-center mt-8">
              <Link to='/createproject'>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700">
                  Create New Project
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Other Projects Section */}
        {/* Other Projects Section */}
        <div className="mt-12">
          <h2 className="text-xl font-bold text-gray-700 mb-6">Check Other Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Project 1 */}
            <div className="bg-white shadow-md rounded-lg p-4">
              <img
                src={pr3} // Using pr3 image here
                alt="Project 1"
                className="rounded-lg h-40 w-full object-cover"
              />
              <div className="mt-4 text-center">Project 1</div>
            </div>

            {/* Project 2 */}
            <div className="bg-white shadow-md rounded-lg p-4">
              <img
                src={pr4} // Using pr4 image here
                alt="Project 2"
                className="rounded-lg h-40 w-full object-cover"
              />
              <div className="mt-4 text-center">Project 2</div>
            </div>

            {/* Project 3 */}
            <div className="bg-white shadow-md rounded-lg p-4">
              <img
                src={pr5} // Using pr5 image here
                alt="Project 3"
                className="rounded-lg h-40 w-full object-cover"
              />
              <div className="mt-4 text-center">Project 3</div>
            </div>
          </div>
        </div>

      </div>

      {/* Footer */}
      <footer className="bg-gray-800 py-8">
        <div className="container mx-auto text-white text-center space-y-4">
          <div className="flex justify-center space-x-4">
            <a href="#" className="hover:text-gray-400">Download Now</a>
            <a href="#" className="hover:text-gray-400">License</a>
            <a href="#" className="hover:text-gray-400">About</a>
            <a href="#" className="hover:text-gray-400">Features</a>
            <a href="#" className="hover:text-gray-400">Pricing</a>
            <a href="#" className="hover:text-gray-400">Careers</a>
            <a href="#" className="hover:text-gray-400">Help</a>
            <a href="#" className="hover:text-gray-400">Privacy Policy</a>
          </div>
          <div className="space-x-4">
            <a href="#">
              {/* <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Google_Play_Store_badge_EN.svg/512px-Google_Play_Store_badge_EN.svg.png"
                alt="Google Play"
                className="w-32 inline-block"
              /> */}
            </a>
            <a href="#">
              {/* <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/58/Download_on_the_App_Store_Badge.svg"
                alt="App Store"
                className="w-32 inline-block"
              /> */}
            </a>
          </div>
          <div className="text-gray-400">© 2024 Infrasnap. All rights reserved</div>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;
