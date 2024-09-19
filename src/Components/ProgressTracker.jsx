import React from 'react';
import ex1 from "../assets/ex1.webp";
import ex2 from "../assets/ex2.jpg";
import ex3 from "../assets/ex3.jpg";
import ex4 from "../assets/ex4.webp";
import ex5 from "../assets/ex5.jpg";
import ex6 from "../assets/ex6.jpg";

// Updated daysData with images
const daysData = [
  {
    day: "DAY 1",
    progress: [
      { time: "10:27am", percent: 2, image: ex1 },
      { time: "1:30pm", percent: 10, image: ex2 },
      { time: "4:57pm", percent: 10, image: ex3 },
    ],
    message: "Marking of the plot is done",
  },
  {
    day: "DAY 2",
    progress: [
      { time: "11:05am", percent: 55, image: ex4 },
      { time: "5:00pm", percent: 60, image: ex5 },
    ],
    message: "Excavation started and 40% excavation is done",
  },
  {
    day: "DAY 3",
    progress: [
      { time: "12:33am", percent: 70, image: ex6 },
      { time: "2:23pm", percent: 82, image: ex1 },
      { time: "4:15pm", percent: 96, image: ex2 },
      { time: "6:00pm", percent: 100, image: ex3 },
    ],
    message: "This stage is completed",
  },
];

const ProgressTracker = () => {
  return (
    <div className="max-w-6xl mx-auto my-8 p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-semibold text-center mb-6">Track Progress of Marking & Excavation</h2>
      {daysData.map((day, index) => (
        <div key={index} className="mb-8">
          <h3 className="text-lg font-semibold mb-4">{day.day}</h3>
          <div className="flex space-x-4 overflow-x-auto">
            {day.progress.map((entry, idx) => (
              <div key={idx} className="text-center">
                <div className="w-32 h-32 bg-gray-200 rounded-md flex items-center justify-center mb-2">
                  <img
                    src={entry.image}
                    alt={`Progress for ${entry.time}`}
                    className="object-cover h-full w-full rounded-md"
                  />
                </div>
                <p>{entry.time}</p>
                <div className="w-full bg-gray-200 rounded-full h-3 mt-2">
                  <div
                    className="bg-orange-500 h-3 rounded-full"
                    style={{ width: `${entry.percent}%` }}
                  ></div>
                </div>
                <p className="mt-2 font-medium">{entry.percent}%</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-gray-600">{day.message}</p>
        </div>
      ))}
    </div>
  );
};

export default ProgressTracker;
