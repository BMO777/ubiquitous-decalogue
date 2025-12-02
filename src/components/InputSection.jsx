import React from "react";
import tenCommandmentsImage from "../assets/images/Ten Commandments Fiery Handwriting.png";

export default function InputSection({ value, onChange, onAnalyze, loading }) {
  const handleKeyDown = (e) => {
    // Allow submission with Enter key (but still allow Shift+Enter for new lines)
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (!loading && value.trim()) {
        onAnalyze();
      }
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
      <div className="flex items-start space-x-4">
        <img src={tenCommandmentsImage} alt="Ten Commandments" className="w-12 h-12 object-contain bg-blue-100 p-2 rounded-lg" />
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Shed Light on an Action
          </h2>
          <p className="text-gray-600 mb-6">
            Describe an action, decision, or situation you'd like to evaluate against the Ten Commandments. 
            Our AI-powered light shedder will provide deep insights into how your described scenario aligns with biblical principles.
          </p>
          
          <div className="bg-blue-50 p-4 rounded-lg mb-6">
            <h3 className="font-bold text-blue-800 mb-2">Important Analysis Notes:</h3>
            <ul className="list-disc pl-5 text-blue-700 text-sm space-y-1">
              <li>Sabbath analysis focuses on Friday evening through Saturday evening activities</li>
              <li>Work and worldly concerns during Sabbath hours are flagged (exceptions: necessity, mercy, good works)</li>
              <li>Christ's example of doing good on Sabbath (including meeting immediate needs) is considered</li>
            </ul>
          </div>
          
          <textarea 
            value={value} 
            onChange={onChange} 
            onKeyDown={handleKeyDown}
            placeholder="Example: 'I lied to my boss about why I was late'" 
            className="w-full h-32 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
            disabled={loading}
          />
          <button 
            type="submit" 
            disabled={loading || !value.trim()}
            className="mt-4 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {loading ? "Shedding Light..." : "Shed Light"}
          </button>
          <p className="text-sm text-gray-500 mt-2">
            Tip: Press <kbd className="px-1.5 py-0.5 bg-gray-100 rounded border">Enter</kbd> to submit or <kbd className="px-1.5 py-0.5 bg-gray-100 rounded border">Shift</kbd> + <kbd className="px-1.5 py-0.5 bg-gray-100 rounded border">Enter</kbd> for a new line
          </p>
        </div>
      </div>
    </div>
  );
}