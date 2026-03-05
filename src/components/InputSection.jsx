import React from "react";
import tenCommandmentsImage from "../assets/images/Ten Commandments Fiery Handwriting.png";
import Shield from "../assets/icons/Shield";

export default function InputSection({ 
  value, 
  onChange, 
  onAnalyze, 
  loading, 
  selectedModel, 
  onModelChange, 
  availableModels = [],
  isPrivateMode,
  onTogglePrivateMode
}) {
  const handleKeyDown = (e) => {
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
        <div className="flex-1 w-full">
          <h2 className="text-2xl sm:text-3xl mb-4 text-advent-primary dark:text-advent-secondary">
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
              <li className="italic"><strong>Disclaimer:</strong> The law of God is broad in its requirements, reaching to the very thoughts and intents of the heart. This tool focuses on "upstream" heart postures that may be traced to downstream violations. Because internal motivations are broad and deeply personal, the light shedder may not flag every possible violation. It is intended as a guide for self-reflection.</li>
            </ul>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded-lg mb-6 border-l-4 border-yellow-400">
            <div className="flex items-center gap-2 text-yellow-800 dark:text-yellow-200 mb-2">
              <Shield className="w-5 h-5" />
              <span className="font-bold">Privacy Notice:</span>
            </div>
            <p className="text-sm text-yellow-700 dark:text-yellow-300">
              By default, Private Mode is enabled and your analysis history is NOT saved. If you wish to save your history locally on this device, you can disable Private Mode. Note that local history is not encrypted.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 mb-6">
            {availableModels.length > 0 && (
              <div className="flex-1 min-w-[200px]">
                <label htmlFor="modelSelect" className="form-label text-lg">
                  Select AI Model:
                </label>
                <select
                  id="modelSelect"
                  value={selectedModel}
                  onChange={(e) => onModelChange(e.target.value)}
                  className="form-input text-lg"
                  disabled={loading}
                >
                  {availableModels.map(model => (
                    <option key={model.id} value={model.id}>
                      {model.name}
                    </option>
                  ))}
                </select>
              </div>
            )}

            <div className="flex items-center gap-3 pt-6">
              <label className="relative inline-flex items-center cursor-pointer">
                <input 
                  type="checkbox" 
                  className="sr-only peer" 
                  checked={isPrivateMode}
                  onChange={onTogglePrivateMode}
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                <span className="ml-3 text-lg font-medium text-gray-900 dark:text-gray-300">Private Mode</span>
              </label>
            </div>
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
              placeholder="Example: 'I spent my entire Saturday working on a side project to make more money, ignoring my family's needs and feeling jealous of my neighbor's new car.'"
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