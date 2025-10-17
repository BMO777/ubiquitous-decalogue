import React from 'react';

export default function ErrorFallback({ onRetry }) {
  return (
    <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg mb-8">
      <h3 className="text-lg font-semibold text-red-800 mb-2">Oops! Something went wrong</h3>
      <p className="text-red-700 mb-4">We couldn't analyze your action. This might be due to network issues or AI service unavailability.</p>
      <button
        onClick={onRetry}
        className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
      >
        Try Again
      </button>
    </div>
  );
}