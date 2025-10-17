import React from "react";
import Shield from "../assets/icons/Shield";

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center space-x-3">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Ten Commandments Analyzer
            </h1>
            <p className="text-gray-600">
              Evaluate actions against biblical principles with AI-powered
              insights
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
