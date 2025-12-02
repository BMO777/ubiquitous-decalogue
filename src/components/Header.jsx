import React from "react";
import tenCommandmentsImage from "../assets/images/Ten Commandments Fiery Handwriting.png";

export default function Header({ onNavigateToEducation }) {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img src={tenCommandmentsImage} alt="Ten Commandments" className="w-16 h-16 object-contain rounded-lg" />
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Ten Commandments Light Shedder
              </h1>
              <p className="text-gray-600">
                Examine your heart and actions through biblical principles
              </p>
            </div>
          </div>
          <button 
            onClick={onNavigateToEducation}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            Learn About Commandments
          </button>
        </div>
      </div>
    </header>
  );
}