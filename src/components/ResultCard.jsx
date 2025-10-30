import React from 'react';
import AlertTriangle from '../assets/icons/AlertTriangle';
import CheckCircle from '../assets/icons/CheckCircle';
import ExclamationTriangle from '../assets/icons/ExclamationTriangle';

export default function ResultCard({ cmd }) {
  let StatusIcon;
  let statusColor;
  let explanationText = cmd.explanation;

  if (!cmd.violated) {
    StatusIcon = CheckCircle;
    statusColor = 'text-green-500';
    // Add heart posture phrase for green commandments
    explanationText = `${cmd.explanation} — Reflecting a heart that loves God and neighbor.`;
  } else if (cmd.isPrimaryViolation) {
    StatusIcon = AlertTriangle;
    statusColor = 'text-red-500';
    // Add heart posture comment for primary violations
    if (cmd.heartPosture) {
      explanationText = `${cmd.explanation} — Heart posture: ${cmd.heartPosture}`;
    }
  } else if (cmd.isSecondaryViolation) {
    StatusIcon = ExclamationTriangle;
    statusColor = 'text-yellow-500';
    // Add the James 2:10 explanation ONLY for secondary violations
    explanationText = `${cmd.explanation} — James 2:10 teaches that breaking one commandment makes us guilty of all, because love fulfills the law (Romans 13:10).`;
    // Add heart posture comment for secondary violations if available
    if (cmd.heartPosture) {
      explanationText = `${cmd.explanation} — James 2:10 teaches that breaking one commandment makes us guilty of all, because love fulfills the law (Romans 13:10). Heart posture: ${cmd.heartPosture}`;
    }
  }

  const bgClass = cmd.violated
    ? cmd.isPrimaryViolation
      ? 'bg-red-50 border-red-200'
      : 'bg-yellow-50 border-yellow-200'
    : 'bg-green-50 border-green-200';

  return (
    <div className={`p-6 rounded-lg border ${bgClass} mb-4 flex items-center`}>
      <StatusIcon className={`w-6 h-6 mr-3 ${statusColor}`} />
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