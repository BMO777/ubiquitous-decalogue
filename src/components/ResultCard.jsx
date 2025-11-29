import React from 'react';
import tenCommandmentsImage from '../assets/images/Ten Commandments Fiery Handwriting.png';

export default function ResultCard({ cmd }) {
  let statusColor;
  let explanationText = cmd.explanation;

  if (!cmd.violated) {
    statusColor = 'text-green-500';
    // Add heart posture phrase for green commandments
    explanationText = `${cmd.explanation} — Reflecting a heart that loves God and neighbor, following Christ's example.`;
  } else if (cmd.isPrimaryViolation) {
    statusColor = 'text-red-500';
    // Add heart posture comment for primary violations
    if (cmd.heartPosture) {
      explanationText = `${cmd.explanation} — Heart posture: ${cmd.heartPosture}`;
    }
  } else if (cmd.isSecondaryViolation) {
    statusColor = 'text-yellow-500';
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
    <div className={`p-6 rounded-lg border ${bgClass} mb-4 flex items-center`}>
      <img 
        src={tenCommandmentsImage} 
        alt="Commandment" 
        className={`w-8 h-8 object-contain mr-3 ${statusColor} opacity-80`}
      />
      <div>
        <div className="font-semibold">{cmd.text}</div>
        <div className="text-sm text-gray-700">{explanationText}</div>
        {cmd.biblicalReasoning && (
          <div className="text-sm text-gray-600 mt-2 italic">
            Biblical reasoning: {cmd.biblicalReasoning}
          </div>
        )}
        {cmd.guidance && (
          <div className="text-sm text-gray-600 mt-1">
            Guidance: {cmd.guidance}
          </div>
        )}
      </div>
    </div>
  );
}