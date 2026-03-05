import React from 'react';

export default function HistoryCard({ item, index, onRestore, onDelete }) {
  const date = new Date(item.timestamp).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });

  const violationCount = item.results ? item.results.filter(r => r.violated).length : 0;
  const totalCommandments = item.results ? item.results.length : 0;

  const getStatusColor = () => {
    if (violationCount === 0) return 'bg-green-100 border-green-300 dark:bg-green-900 dark:border-green-700';
    if (violationCount <= 3) return 'bg-yellow-100 border-yellow-300 dark:bg-yellow-900 dark:border-yellow-700';
    return 'bg-red-100 border-red-300 dark:bg-red-900 dark:border-red-700';
  };

  const getStatusText = () => {
    if (violationCount === 0) return 'No violations';
    if (violationCount <= 3) return `${violationCount} violation${violationCount > 1 ? 's' : ''}`;
    return `${violationCount} violations (significant)`;
  };

  return (
    <div className={`p-4 rounded-lg border ${getStatusColor()} mb-3 hover:shadow-md transition-shadow`}>
      <div className="flex justify-between items-start gap-3">
        <div className="flex-1 min-w-0">
          <p className="font-medium text-gray-900 dark:text-white truncate mb-2">
            {item.action || `Analysis #${index + 1}`}
          </p>
          <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {date}
            </span>
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 6a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {getStatusText()}
            </span>
            <span className="text-xs">
              {violationCount}/{totalCommandments} commandments
            </span>
          </div>
        </div>
        <div className="flex gap-2 flex-shrink-0">
          <button
            onClick={() => onRestore(item)}
            className="px-3 py-1.5 text-sm bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
            title="View this analysis"
          >
            View
          </button>
          <button
            onClick={() => onDelete(index)}
            className="px-3 py-1.5 text-sm bg-red-600 text-white rounded hover:bg-red-700 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500"
            title="Delete this analysis"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}