import React from 'react';
import tenCommandmentsImage from '../assets/images/Ten Commandments Fiery Handwriting.png';

export default function ResultCard({ cmd }) {
  let statusColor;
  let explanationText = cmd.explanation;
  
  if (!cmd.violated) {
    statusColor = 'text-green-700';
    // Add heart posture phrase for green commandments
    explanationText = `${cmd.explanation} — Reflecting a heart that loves God and neighbor, following Christ's example.`;
  } else if (cmd.isPrimaryViolation) {
    statusColor = 'text-red-700';
    // Add heart posture comment for primary violations
    if (cmd.heartPosture) {
      explanationText = `${cmd.explanation} — Heart posture: ${cmd.heartPosture}`;
    }
  } else if (cmd.isSecondaryViolation) {
    statusColor = 'text-yellow-700';
    // Add the James 2:10 explanation ONLY for secondary violations
    explanationText = `${cmd.explanation} — James 2:10 teaches that breaking one commandment makes us guilty of all, because love fulfills the law (Romans 13:10).`;
    // Add heart posture comment for secondary violations if available
    if (cmd.heartPosture) {
      explanationText = `${cmd.explanation} — James 2:10 teaches that breaking one commandment makes us guilty of all, because love fulfills the law (Romans 13:10). Heart posture: ${cmd.heartPosture}`;
    }
  }

  // Add upstream thinking note for violations
  if (cmd.violated) {
    explanationText += " Remember, lasting change begins with transforming our thoughts and intentions (upstream) before our actions (downstream) can align with God's will. Follow Christ's example in all things.";
  }

  const bgClass = cmd.violated 
    ? cmd.isPrimaryViolation 
      ? 'bg-red-50 border-red-200' 
      : 'bg-yellow-50 border-yellow-200' 
    : 'bg-green-50 border-green-200';

  return (
    <div className={`p-6 rounded-xl border ${bgClass} mb-6`}>
      <div className="flex items-start gap-4">
        <img 
          src={tenCommandmentsImage} 
          alt="Commandment" 
          className={`w-10 h-10 object-contain flex-shrink-0 mt-1 ${statusColor} opacity-80`} 
        />
        <div>
          <h3 className="text-xl font-bold mb-3">{cmd.text}</h3>
          <p className="text-gray-700 mb-4 text-lg">{explanationText}</p>
          
          {cmd.biblicalReasoning && (
            <div className="bg-white p-4 rounded-lg mb-4">
              <h4 className="font-bold text-gray-900 mb-2">Biblical Reasoning:</h4>
              <p className="text-gray-700">{cmd.biblicalReasoning}</p>
            </div>
          )}
          
          {cmd.guidance && (
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-bold text-gray-900 mb-2">Guidance:</h4>
              <p className="text-gray-700">{cmd.guidance}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}