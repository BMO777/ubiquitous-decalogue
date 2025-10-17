import React, { useState } from 'react';
import Header from '../components/Header';
import InputSection from '../components/InputSection';
import ResultCard from '../components/ResultCard';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorFallback from '../components/ErrorFallback';
import { commandments } from '../utils/commandments';
import useLocalStorage from '../hooks/useLocalStorage';

export default function Home() {
  const [inputText, setInputText] = useState('');
  const [analysis, setAnalysis] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [history, setHistory] = useLocalStorage('analysisHistory', []);

  const analyzeAction = async () => {
    if (!inputText.trim()) return;

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: inputText,
          commandments: commandments.map(c => ({ id: c.id, text: c.text, keyPoints: c.keyPoints }))
        })
      });

      if (!response.ok) throw new Error('Network response was not ok');

      const data = await response.json();
      setAnalysis(data);
      setHistory(prev => [data, ...prev.slice(0, 9)]); // Keep last 10

    } catch (err) {
      console.error('Analysis error:', err);
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const retryAnalysis = () => {
    setError(null);
    analyzeAction();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <InputSection
          inputText={inputText}
          setInputText={setInputText}
          analyzeAction={analyzeAction}
          isLoading={isLoading}
        />

        {isLoading && <LoadingSpinner />}
        {error && <ErrorFallback onRetry={retryAnalysis} />}
        {analysis && <ResultCard analysis={analysis} />}

        {/* History Section */}
        {history.length > 0 && (
          <div className="bg-white rounded-xl shadow-lg p-8 mt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Recent Analyses</h2>
            <div className="space-y-4">
              {history.map((item, index) => (
                <div key={index} className="p-4 border border-gray-200 rounded-lg">
                  <p className="text-sm text-gray-600">Analysis #{history.length - index}</p>
                  <p className="text-gray-800 mt-2 line-clamp-2">{item.results[0]?.explanation}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}