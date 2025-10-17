// src/components/ResultCard.jsx

import React from 'react';
import AlertTriangle from '../assets/icons/AlertTriangle';
import CheckCircle from '../assets/icons/CheckCircle';
import ExclamationTriangle from '../assets/icons/ExclamationTriangle';

export default function ResultCard({ cmd }) {
  let StatusIcon;
  let statusColor;

  if (!cmd.violated) {
    StatusIcon = CheckCircle;
    statusColor = 'text-green-500';
  } else if (cmd.isPrimaryViolation) {
    StatusIcon = AlertTriangle;
    statusColor = 'text-red-500';
  } else if (cmd.isSecondaryViolation) {
    StatusIcon = ExclamationTriangle;
    statusColor = 'text-yellow-500';
  }

  const bgClass = cmd.violated
    ? cmd.isPrimaryViolation
      ? 'bg-red-50 border-red-200'
      : 'bg-yellow-50 border-yellow-200'
    : 'bg-green-50 border-green-200';

  return (
    
`}> <div className="flex items-start space-x-3"> <StatusIcon className={`w-6 h-6 mt-1 ${statusColor}`} /> <div className="flex-1"> <h3 className="font-bold text-gray-900">{cmd.text}</h3> <p className="text-sm text-gray-600 mt-1">{cmd.keyPoints}</p> {cmd.isSecondaryViolation && ( <div className="mt-2 px-3 py-1 bg-yellow-100 text-yellow-800 text-xs rounded"> Marked due to principle of love (James 2:10) </div> )} <div className="mt-4"> <h4 className="font-semibold text-gray-800">Analysis:</h4> <p className="text-gray-700 mt-2">{cmd.explanation}</p> </div> <div className="mt-4"> <h4 className="font-semibold text-gray-800">Biblical Reasoning:</h4> <p className="text-gray-700 mt-2 italic">{cmd.biblicalReasoning}</p> </div> <div className="mt-4"> <h4 className="font-semibold text-gray-800">Guidance:</h4> <p className="text-gray-700 mt-2">{cmd.guidance}</p> </div> </div> </div> </div> {/* ✅ This closes the outer div */} ); }
