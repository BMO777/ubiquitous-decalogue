import React, { useState } from "react";
import { commandments } from "../utils/commandments";
import CheckCircle from "../assets/icons/CheckCircle";
import AlertTriangle from "../assets/icons/AlertTriangle";

export default function GuidedReflection({ onComplete }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isFinished, setIsFinished] = useState(false);

  const currentCommandment = commandments[currentStep];

  const handleAnswer = (questionIndex, value) => {
    setAnswers((prev) => ({
      ...prev,
      [`${currentStep}-${questionIndex}`]: value,
    }));
  };

  const nextStep = () => {
    if (currentStep < commandments.length - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      finishReflection();
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const finishReflection = () => {
    const results = commandments.map((cmd, idx) => {
      const cmdAnswers = Object.keys(answers)
        .filter((key) => key.startsWith(`${idx}-`))
        .map((key) => answers[key]);

      const violated = cmdAnswers.some((a) => a === true);

      return {
        ...cmd,
        violated,
        isPrimaryViolation: violated,
        isSecondaryViolation: false,
        explanation: violated
          ? "Based on your reflection, this area may need attention and renewal of the mind."
          : "Your reflection suggests alignment with this principle.",
        biblicalReasoning: cmd.analyze("").biblicalReasoning,
        guidance: cmd.analyze("").guidance,
      };
    });

    const anyViolated = results.some((r) => r.violated);

    onComplete({
      action: "Guided Self-Reflection",
      results,
      anyViolated,
      timestamp: new Date().toISOString(),
      principleOfLove: anyViolated
        ? "Your reflection has identified areas for growth. Remember that love fulfills the law, and true change begins with a heart surrendered to God's principles."
        : "Your reflection shows a heart in harmony with God's law. Continue to walk in the light of His Word.",
    });
    setIsFinished(true);
  };

  if (isFinished) return null;

  return (
    <div className="card bg-white dark:bg-gray-800 animate-fade-in">
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm font-bold text-advent-primary dark:text-advent-secondary uppercase tracking-wider">
            Step {currentStep + 1} of {commandments.length}
          </span>
          <div className="w-2/3 bg-gray-200 dark:bg-gray-700 h-2 rounded-full overflow-hidden">
            <div
              className="bg-advent-primary h-full transition-all duration-500"
              style={{
                width: `${((currentStep + 1) / commandments.length) * 100}%`,
              }}
            ></div>
          </div>
        </div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          {currentCommandment.id}. {currentCommandment.text}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 italic">
          {currentCommandment.keyPoints}
        </p>
      </div>

      <div className="space-y-8 mb-10">
        {currentCommandment.questions.map((q, idx) => (
          <div
            key={idx}
            className="p-6 bg-gray-50 dark:bg-gray-700/50 rounded-xl border border-gray-100 dark:border-gray-700"
          >
            <p className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-6">
              {q}
            </p>
            <div className="flex gap-4">
              <button
                onClick={() => handleAnswer(idx, true)}
                className={`flex-1 py-3 px-6 rounded-lg font-bold transition-all ${
                  answers[`${currentStep}-${idx}`] === true
                    ? "bg-red-600 text-white shadow-lg"
                    : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-600 hover:border-red-400"
                }`}
              >
                Yes
              </button>
              <button
                onClick={() => handleAnswer(idx, false)}
                className={`flex-1 py-3 px-6 rounded-lg font-bold transition-all ${
                  answers[`${currentStep}-${idx}`] === false
                    ? "bg-green-600 text-white shadow-lg"
                    : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-600 hover:border-green-400"
                }`}
              >
                No
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-between gap-4">
        <button
          onClick={prevStep}
          disabled={currentStep === 0}
          className="px-6 py-3 rounded-lg font-bold text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-30"
        >
          Back
        </button>
        <button onClick={nextStep} className="btn btn-primary px-10">
          {currentStep === commandments.length - 1
            ? "Finish Reflection"
            : "Next Principle"}
        </button>
      </div>
    </div>
  );
}
