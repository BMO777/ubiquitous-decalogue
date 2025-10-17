import React from 'react';
import AlertTriangle from '../assets/icons/AlertTriangle';
import CheckCircle from '../assets/icons/CheckCircle';

export default function CommandmentCard({ cmd }) {
  const StatusIcon = cmd.violated ? AlertTriangle : CheckCircle;
  const statusColor = cmd.violated ? 'text-red-500' : 'text-green-500';

  return (
    <div className={`p-6 rounded-lg border ${cmd.violated ? 'border-red-200 bg-red-50' : 'border-green-200 bg-green-50'} mb-4`}>
      <div className="flex items-start space-x-3">
        <StatusIcon className={`w-6 h-6 ${statusColor} mt-1`} />
        <div>
          <h3 className="font-semibold text-lg text-gray-900">{cmd.text}</h3>
          <p className="text-gray-700 mt-1">{cmd.explanation}</p>
          <p className="text-gray-600 text-sm mt-2"><span className="font-medium">Biblical Reasoning:</span> {cmd.biblicalReasoning}</p>
          <p className="text-gray-600 text-sm mt-1"><span className="font-medium">Guidance:</span> {cmd.guidance}</p>
        </div>
      </div>
    </div>
  );
}