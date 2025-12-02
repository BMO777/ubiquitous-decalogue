import React from 'react';

export default function Navigation({ activeTab, setActiveTab }) {
  return (
    <nav className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex space-x-8">
          <button
            onClick={() => setActiveTab('analyzer')}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'analyzer'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Commandment Light Shedder
          </button>
          <button
            onClick={() => setActiveTab('education')}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'education'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Learn About the Commandments
          </button>
        </div>
      </div>
    </nav>
  );
}