import React, { useState } from "react";
import { Link } from 'react-router-dom';

const CreateProject = () => {
  const [projectName, setProjectName] = useState("");
  const [description, setDescription] = useState("");
  const [blueprint, setBlueprint] = useState(null);
  const [threeDView, setThreeDView] = useState(null);

  const handleBlueprintUpload = (e) => {
    if (e.target.files.length > 0) {
      setBlueprint(e.target.files[0]);
    }
  };

  const handleThreeDViewUpload = (e) => {
    if (e.target.files.length > 0) {
      setThreeDView(e.target.files[0]);
    }
  };

  const handleSubmit = () => {
    if (!projectName || !description || !blueprint || !threeDView) {
      alert("Please fill all the fields and upload the required files.");
      return;
    }

    console.log({
      projectName,
      description,
      blueprint,
      threeDView,
    });
    alert("Project submitted successfully!");
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-50 py-8">
      {/* Header */}
      <div className="w-full bg-gray-800 p-4 flex justify-between items-center shadow-md">
        <h1 className="text-white text-2xl font-bold">INFRASNAP</h1>
        <Link to='/'>
          <button className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded-md">
            Go Back
          </button>
        </Link>
      </div>

      {/* Flex container to place both forms side by side */}
      <div className="flex flex-col md:flex-row justify-center items-start w-full mt-8 space-y-8 md:space-y-0 md:space-x-8 px-4 md:px-0">
        {/* Form for Project creation */}
        <div className="bg-white shadow-lg rounded-lg p-8 w-full md:w-1/2">
          <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">
            Create New Project
          </h2>

          {/* Project Name Input */}
          <div className="mb-6">
            <label className="block text-gray-700 text-lg font-medium mb-2">
              Project Name
            </label>
            <input
              type="text"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              placeholder="Enter your project name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Project Description Input */}
          <div className="mb-6">
            <label className="block text-gray-700 text-lg font-medium mb-2">
              Project Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter your project description"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              rows={4}
            ></textarea>
          </div>

          {/* Blueprint Upload */}
          <div className="mb-6">
            <label className="block text-gray-700 text-lg font-medium mb-2">
              Upload Blueprint
            </label>
            <input
              type="file"
              accept=".pdf,.png,.jpg,.jpeg"
              onChange={handleBlueprintUpload}
              className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            {blueprint && <p className="mt-2 text-green-600">Uploaded: {blueprint.name}</p>}
          </div>

          {/* 3D View Upload */}
          <div className="mb-6">
            <label className="block text-gray-700 text-lg font-medium mb-2">
              Upload 3D View
            </label>
            <input
              type="file"
              accept=".obj,.stl,.png,.jpg,.jpeg"
              onChange={handleThreeDViewUpload}
              className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            {threeDView && <p className="mt-2 text-green-600">Uploaded: {threeDView.name}</p>}
          </div>

          {/* Submit Button */}
          <div className="flex justify-center space-x-4">
            <Link to='/uploadphases'>
              <button
                onClick={handleSubmit}
                className="bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-6 rounded-md text-lg transition duration-200"
              >
                Submit Project
              </button>
            </Link>
            <Link to='/materials'>
              <button className="bg-gray-100 border border-gray-300 text-gray-700 py-2 px-6 rounded-md hover:bg-gray-200">
                Get the List of Raw Materials
              </button>
            </Link>
          </div>
        </div>

        {/* Form for Location selection */}
        <div className="bg-white shadow-lg rounded-lg p-8 w-full md:w-1/2">
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
          {/* <Link to='/uploadphases'>
          <button className="bg-indigo-500 text-white py-2 px-6 rounded-md w-full hover:bg-indigo-600">
            Continue
          </button>
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default CreateProject;
