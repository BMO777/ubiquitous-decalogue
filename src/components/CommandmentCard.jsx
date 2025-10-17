import React from 'react';
import AlertTriangle from '../assets/icons/AlertTriangle';
import CheckCircle from '../assets/icons/CheckCircle';

export default function CommandmentCard({ cmd, isGloballyViolated }) {
  const StatusIcon = cmd.violated ? AlertTriangle : CheckCircle;
  const statusColor = cmd.violated ? 'text-red-500' : 'text-green-500';

  return (
    <div className={`p-6 rounded-lg border ${cmd.violated ? 'border-red-200 bg-red-50' : 'border-green-200 bg-green-50'} mb-4`}>
      <div className="flex items-start space-x-3">
        <StatusIcon className={`w-6 h-6 mt-1 ${statusColor}`} />
        <div className="flex-1">
          <h3 className="font-bold text-gray-900">{cmd.text}</h3>
          <p className="text-sm text-gray-600 mt-1">{cmd.keyPoints}</p>
          {isGloballyViolated && (
            <div className="mt-2 px-3 py-1 bg-yellow-100 text-yellow-800 text-xs rounded">
              Marked violated due to principle of love (James 2:10)
            </div>
          )}
          <div className="mt-4">
            <h4 className="font-semibold text-gray-800">Analysis:</h4>
            <p className="text-gray-700 mt-2">{cmd.explanation}</p>
          </div>
        </div>
      </div>
    </div>
  );
}