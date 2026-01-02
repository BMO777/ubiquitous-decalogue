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
    <div className="card bg-white dark:bg-gray-800">
      <div className="flex flex-col md:flex-row items-start gap-6">
        <img 
          src={tenCommandmentsImage} 
          alt="Ten Commandments" 
          className="w-14 h-14 object-contain bg-blue-100 dark:bg-blue-900 p-3 rounded-lg flex-shrink-0"
        />
        <div className="flex-1">
          <h2 className="text-2xl sm:text-3xl mb-4 text-gray-900 dark:text-white">
            Shed Light on an Action
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">
            Describe an action, decision, or situation you'd like to evaluate against the Ten Commandments. Our AI-powered light shedder will provide deep insights into how your described scenario aligns with biblical principles.
          </p>
          
          <div className="bg-blue-50 dark:bg-blue-950 p-5 rounded-lg mb-6">
            <h3 className="font-bold text-blue-800 dark:text-blue-200 text-lg mb-3">Important Analysis Notes:</h3>
            <ul className="list-disc pl-5 text-blue-700 dark:text-blue-300 space-y-2">
              <li>Sabbath analysis focuses on Friday evening through Saturday evening activities</li>
              <li>Work and worldly concerns during Sabbath hours are flagged (exceptions: necessity, mercy, good works)</li>
              <li>Christ's example of doing good on Sabbath (including meeting immediate needs) is considered</li>
            </ul>
          </div>
          
          <div className="form-group">
            <label htmlFor="actionInput" className="form-label text-lg">
              Describe your action or situation:
            </label>
            <textarea
              id="actionInput"
              value={value}
              onChange={onChange}
              onKeyDown={handleKeyDown}
              placeholder="Example: 'I lied to my boss about why I was late'"
              className="form-input h-40 text-lg"
              disabled={loading}
            />
          </div>
          
          <button 
            type="submit" 
            disabled={loading || !value.trim()}
            className="btn btn-primary text-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Shedding Light..." : "Shed Light"}
          </button>
          
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
            Tip: Press <kbd className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded border dark:border-gray-600">Enter</kbd> to submit or <kbd className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded border dark:border-gray-600">Shift</kbd> + <kbd className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded border dark:border-gray-600">Enter</kbd> for a new line
          </p>
        </div>
      </div>
    </div>
  );
}