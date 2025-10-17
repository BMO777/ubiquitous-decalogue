// src/components/InputSection.jsx

import React from "react";
import FileText from "../assets/icons/FileText";

export default function InputSection({ value, onChange, onAnalyze, loading }) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
      <div className="flex items-start space-x-4">
        <div className="bg-blue-100 p-3 rounded-lg">
          <FileText className="w-6 h-6 text-blue-600" />
        </div>
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Analyze an Action
          </h2>
          <p className="text-gray-600 mb-6">
            Describe an action, decision, or situation you'd like to evaluate
            against the Ten Commandments. Our AI-powered analysis will provide
            deep insights into how your described scenario aligns with biblical
            principles.
          </p>
          <textarea
            value={value}
            onChange={onChange}
            placeholder="Example: 'I lied to my boss about why I was late'"
            className="w-full h-32 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
            disabled={loading}
          />
          <button
            type="submit"
            disabled={loading || !value.trim()}
            className="mt-4 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {loading ? "Analyzing..." : "Analyze Action"}
          </button>
        </div>
      </div>
    </div>
  );
}
