import React, { useState } from 'react';
import Header from '../components/Header';
import InputSection from '../components/InputSection';
import ResultCard from '../components/ResultCard';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorFallback from '../components/ErrorFallback';
import { commandments } from '../utils/commandments';
import useLocalStorage from '../hooks/useLocalStorage';
import OfflineIndicator from '../components/OfflineIndicator';

export default function Home({ onNavigateToEducation }) {
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
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          action: inputText,
          commandments: commandments.map(c => ({
            id: c.id,
            text: c.text,
            keyPoints: c.keyPoints
          }))
        })
      });
      
      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();
      
      // Determine if *any* commandment was violated by the AI's direct assessment
      const anyViolatedByAI = data.results.some(cmd => cmd.violated);
      
      const finalResults = data.results.map(cmd => {
        const isPrimary = cmd.violated; // This commandment was directly violated by the action
        const isSecondary = anyViolatedByAI && !isPrimary; // Any commandment was violated, but not this one directly
        
        return {
          ...cmd,
          violated: isPrimary || isSecondary, // Mark as violated if primary or secondary
          isPrimaryViolation: isPrimary,
          isSecondaryViolation: isSecondary,
        };
      });
      
      setAnalysis({
        results: finalResults,
        anyViolated: anyViolatedByAI, // Use the AI's direct assessment for the overall flag
        principleOfLove: anyViolatedByAI 
          ? "As Jesus taught, 'On these two commandments hang all the law and the prophets' (Matthew 22:40). When we violate any commandment, we break the law of love that underlies all of God's precepts. James 2:10 reminds us: 'Whoever keeps the whole law but fails in one point has become guilty of all of it.' True transformation begins with renewing our minds (Romans 12:2) - changing our upstream thinking and attention - before our downstream actions can align with God's will. Follow Christ's example in all things."
          : "The action aligns with all commandments, reflecting a heart that loves God and neighbor. Remember, maintaining this alignment requires continuous attention to our thoughts and intentions, as they determine our actions. Continue to imitate Christ in all things."
      });
      
      setHistory(prev => [data, ...prev.slice(0, 9)]); // Keep last 10
    } catch (err) {
      console.error('Analysis error:', err);
      // Fallback to local keyword-based analysis
      const mockResults = commandments.map(cmd => {
        if (typeof cmd.analyze === 'function') {
          const result = cmd.analyze(inputText);
          return {
            ...cmd,
            ...result
          };
        }
        // Simple fallback stub
        return {
          ...cmd,
          violated: false,
          explanation: "No AI result available.",
          biblicalReasoning: "",
          guidance: ""
        };
      });
      
      const anyViolatedByFallback = mockResults.some(cmd => cmd.violated);
      
      const finalResults = mockResults.map(cmd => {
        const isPrimary = cmd.violated; // This commandment was directly violated by the action
        const isSecondary = anyViolatedByFallback && !isPrimary; // Any commandment was violated, but not this one directly
        
        return {
          ...cmd,
          violated: isPrimary || isSecondary, // Mark as violated if primary or secondary
          isPrimaryViolation: isPrimary,
          isSecondaryViolation: isSecondary,
        };
      });
      
      setAnalysis({
        results: finalResults,
        anyViolated: anyViolatedByFallback, // Use the fallback's direct assessment for the overall flag
        principleOfLove: anyViolatedByFallback 
          ? "As Jesus taught, 'On these two commandments hang all the law and the prophets' (Matthew 22:40). When we violate any commandment, we break the law of love that underlies all of God's precepts. James 2:10 reminds us: 'Whoever keeps the whole law but fails in one point has become guilty of all of it.' True transformation begins with renewing our minds (Romans 12:2) - changing our upstream thinking and attention - before our downstream actions can align with God's will. Follow Christ's example in all things."
          : "The action aligns with all commandments, reflecting a heart that loves God and neighbor. Remember, maintaining this alignment requires continuous attention to our thoughts and intentions, as they determine our actions. Continue to imitate Christ in all things."
      });
    }
    
    setIsLoading(false);
  };

  const handleInputChange = e => setInputText(e.target.value);
  const handleAnalyze = e => {
    e.preventDefault();
    analyzeAction();
  };

  return (
    <div className="min-h-screen">
      <OfflineIndicator />
      <div className="content-overlay">
        <Header onNavigateToEducation={onNavigateToEducation} />
        
        <main className="max-w-4xl mx-auto px-4 py-8">
          <form onSubmit={handleAnalyze}>
            <InputSection 
              value={inputText} 
              onChange={handleInputChange} 
              onAnalyze={analyzeAction} 
              loading={isLoading} 
            />
          </form>
          
          {isLoading && <LoadingSpinner />}
          
          {error && <ErrorFallback error={error} />}
          
          {analysis && (
            <section className="mt-10">
              {analysis.anyViolated && analysis.principleOfLove && (
                <div className="my-6 p-5 rounded-lg bg-yellow-50 border-l-4 border-yellow-400 dark:bg-yellow-950 dark:border-yellow-700 text-yellow-800 dark:text-yellow-300">
                  <h3 className="font-bold text-lg mb-2">Theology Note:</h3>
                  <p className="text-lg">{analysis.principleOfLove}</p>
                </div>
              )}
              
              <div className="mt-8">
                <h2 className="text-2xl sm:text-3xl mb-6 text-gray-900 dark:text-white">Analysis Results</h2>
                {analysis.results.map(cmd => (
                  <ResultCard key={cmd.id} cmd={cmd} />
                ))}
              </div>
            </section>
          )}
          
          {history.length > 0 && (
            <section className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Analysis History</h2>
              <ul className="space-y-3">
                {history.map((item, idx) => (
                  <li key={idx}>
                    <button 
                      className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 underline text-lg"
                      onClick={() => setAnalysis(item)}
                    >
                      {item.action || `Analysis #${idx + 1}`}
                    </button>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </main>
      </div>
    </div>
  );
}