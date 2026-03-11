import React, { useState } from "react";
import { commandments } from "../utils/commandments";
import tenCommandmentsImage from "../assets/images/Ten Commandments Fiery Handwriting.png";

export default function GuidedReflection({ onComplete, onCancel }) {
  const [step, setStep] = useState(0);
  const [action, setAction] = useState("");
  const [reflections, setReflections] = useState({});

  const totalSteps = commandments.length + 1;

  const handleNext = () => {
    if (step < totalSteps - 1) {
      setStep(step + 1);
    } else {
      onComplete(action, reflections);
    }
  };

  const handleBack = () => {
    if (step > 0) {
      setStep(step - 1);
    } else {
      onCancel();
    }
  };

  const toggleReflection = (id) => {
    setReflections((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="card bg-white dark:bg-gray-800 animate-fade-in">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-advent-primary dark:text-advent-secondary">
          Guided Reflection
        </h2>
        <span className="text-sm font-medium text-gray-500">
          Step {step + 1} of {totalSteps}
        </span>
      </div>

      <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full mb-8">
        <div
          className="bg-advent-primary h-2 rounded-full transition-all duration-300"
          style={{ width: `${((step + 1) / totalSteps) * 100}%` }}
        ></div>
      </div>

      {step === 0 ? (
        <div className="space-y-4">
          <label className="form-label text-lg">
            What action or situation are you reflecting on?
          </label>
          <textarea
            value={action}
            onChange={(e) => setAction(e.target.value)}
            placeholder="Describe what happened in your own words..."
            className="form-input h-40 text-lg"
          />
          <p className="text-sm text-gray-500 italic">
            Be as honest as possible. This is for your own growth and
            understanding.
          </p>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="flex items-start gap-4 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-xl border border-blue-100 dark:border-blue-800">
            <img
              src={tenCommandmentsImage}
              alt="Commandment"
              className="w-12 h-12 object-contain"
            />
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                {commandments[step - 1].id}. {commandments[step - 1].text}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mt-1">
                {commandments[step - 1].keyPoints}
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-lg font-medium text-gray-800 dark:text-gray-200">
              Does this commandment resonate with your situation?
            </p>
            <div className="flex gap-4">
              <button
                onClick={() =>
                  setReflections((prev) => ({
                    ...prev,
                    [commandments[step - 1].id]: true,
                  }))
                }
                className={`flex-1 py-4 rounded-xl font-bold border-2 transition-all ${
                  reflections[commandments[step - 1].id] === true
                    ? "bg-advent-primary text-white border-advent-primary"
                    : "bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700 hover:border-advent-primary"
                }`}
              >
                Yes, I see a connection
              </button>
              <button
                onClick={() =>
                  setReflections((prev) => ({
                    ...prev,
                    [commandments[step - 1].id]: false,
                  }))
                }
                className={`flex-1 py-4 rounded-xl font-bold border-2 transition-all ${
                  reflections[commandments[step - 1].id] === false
                    ? "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700"
                    : "bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700 hover:border-gray-400"
                }`}
              >
                No, not really
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="flex justify-between mt-10">
        <button
          onClick={handleBack}
          className="px-6 py-3 text-gray-600 dark:text-gray-400 font-medium hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          {step === 0 ? "Cancel" : "Back"}
        </button>
        <button
          onClick={handleNext}
          disabled={step === 0 && !action.trim()}
          className="btn btn-primary px-10 py-3 disabled:opacity-50"
        >
          {step === totalSteps - 1 ? "Complete Analysis" : "Next Step"}
        </button>
      </div>
    </div>
  );
}
