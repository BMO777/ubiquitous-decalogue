import React from 'react';
import CommandmentCard from './CommandmentCard';

export default function ResultCard({ analysis }) {
  if (!analysis) return null;

  const { anyViolated, principleOfLove, results } = analysis;

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Analysis Results</h2>
        <p className="text-gray-600">
          {anyViolated 
            ? "⚠️ Your action appears to violate one or more commandments." 
            : "✅ Your action aligns with biblical principles."}
        </p>
        <div className="mt-4 p-4 bg-blue-50 rounded-lg">
          <p className="text-blue-800 font-medium">{principleOfLove}</p>
        </div>
      </div>

      <div className="space-y-4">
        {results.map(cmd => (
          <CommandmentCard 
            key={cmd.id} 
            cmd={cmd} 
            isGloballyViolated={anyViolated && !cmd.originallyViolated} // Only show yellow badge if it was NOT originally violated but got marked due to global rule
          />
        ))}
      </div>
    </div>
  );
}