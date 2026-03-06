import React from 'react';
import tenCommandmentsImage from '../assets/images/Ten Commandments Fiery Handwriting.png';

export default function ResultCard({ cmd, isSummary = false }) {
  let statusColor = 'text-gray-700 dark:text-gray-300';
  let explanationText = cmd.explanation;
  
  if (isSummary) {
    statusColor = 'text-advent-primary dark:text-advent-secondary font-medium';
  } else if (!cmd.violated) {
    statusColor = 'text-green-700 dark:text-green-400';
    explanationText = `${cmd.explanation} — Reflecting a heart that loves God and neighbor, following Christ's example.`;
  } else if (cmd.isPrimaryViolation) {
    statusColor = 'text-red-700 dark:text-red-400';
    if (cmd.heartPosture) {
      explanationText = `${cmd.explanation} — Heart posture: ${cmd.heartPosture}`;
    }
  } else if (cmd.isSecondaryViolation) {
    statusColor = 'text-yellow-700 dark:text-yellow-400';
    explanationText = `${cmd.explanation} — James 2:10 teaches that breaking one commandment makes us guilty of all, because love fulfills the law (Romans 13:10).`;
    if (cmd.heartPosture) {
      explanationText = `${cmd.explanation} — James 2:10 teaches that breaking one commandment makes us guilty of all, because love fulfills the law (Romans 13:10). Heart posture: ${cmd.heartPosture}`;
    }
  }

  if (!isSummary && cmd.violated) {
    explanationText += " Remember, lasting change begins with transforming our thoughts and intentions (upstream) before our actions (downstream) can align with God's will. Follow Christ's example in all things.";
  }

  const bgClass = isSummary
    ? 'bg-blue-50/50 border-blue-100 dark:bg-blue-900/20 dark:border-blue-800'
    : cmd.violated 
      ? cmd.isPrimaryViolation 
        ? 'bg-red-50 border-red-200 dark:bg-red-950 dark:border-red-700' 
        : 'bg-yellow-50 border-yellow-200 dark:bg-yellow-950 dark:border-yellow-700' 
      : 'bg-green-50 border-green-200 dark:bg-green-950 dark:border-green-700';

  return (
    <div className={`p-6 rounded-xl border ${bgClass} mb-6`}>
      <div className="flex items-start gap-4">
        <a href={tenCommandmentsImage} className="flex-shrink-0 mt-1">
          <img 
            src={tenCommandmentsImage} 
            alt="Commandment" 
            className={`w-10 h-10 object-contain opacity-80 hover:opacity-100 transition-opacity`} 
          />
        </a>
        <div className="flex-1">
          <h3 className={`text-xl font-bold mb-3 ${isSummary ? 'text-advent-primary dark:text-advent-secondary' : statusColor}`}>
            {cmd.text}
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4 text-lg">{explanationText}</p>
          
          {!isSummary && cmd.biblicalReasoning && (
            <div className="bg-white dark:bg-gray-700 p-4 rounded-lg mb-4">
              <h4 className="font-bold text-advent-primary dark:text-advent-secondary mb-2">Biblical Reasoning:</h4>
              <p className="text-gray-700 dark:text-gray-300">{cmd.biblicalReasoning}</p>
            </div>
          )}
          
          {!isSummary && cmd.guidance && (
            <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
              <h4 className="font-bold text-advent-primary dark:text-advent-secondary mb-2">Guidance:</h4>
              <p className="text-gray-700 dark:text-gray-300">{cmd.guidance}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}