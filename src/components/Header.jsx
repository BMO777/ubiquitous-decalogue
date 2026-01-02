import React from "react";
import tenCommandmentsImage from "../assets/images/Ten Commandments Fiery Handwriting.png";
import DarkModeToggle from "./DarkModeToggle"; // Import the new component

export default function Header({ onNavigateToEducation }) {
  return (
    <header className="bg-white shadow-sm border-b dark:bg-gray-800 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-4 text-center sm:text-left">
            <img 
              src={tenCommandmentsImage} 
              alt="Ten Commandments" 
              className="w-16 h-16 sm:w-20 sm:h-20 object-contain rounded-lg"
            />
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl text-gray-900 dark:text-white">
                Ten Commandments Light Shedder
              </h1>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mt-2">
                Examine your heart and actions through biblical principles
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4"> {/* Added a div for alignment */}
            <DarkModeToggle /> {/* Add the DarkModeToggle here */}
            <button 
              onClick={onNavigateToEducation}
              className="btn btn-primary text-base sm:text-lg px-5 py-3"
            >
              Learn About Commandments
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}