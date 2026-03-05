import React, { useState, useEffect } from 'react';
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
  const [availableModels, setAvailableModels] = useState([]);
  const [selectedModel, setSelectedModel] = useState('gpt-4o');
  const [analysis, setAnalysis] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isUsingFallback, setIsUsingFallback] = useState(false);
  const [isPrivateMode, setIsPrivateMode] = useState(false);
  const [history, setHistory] = useLocalStorage('analysisHistory', []);

  useEffect(() => {
    const fetchModels = async () => {
      try {
        const response = await fetch('/api/models');
        if (response.ok) {
          const models = await response.json();
          setAvailableModels(models);
          if (models.length > 0 && !models.find(m => m.id === selectedModel)) {
            setSelectedModel(models[0].id);
          }
        }
      } catch (err) {
        console.error("Failed to fetch models:", err);
      }
    };
    fetchModels();
  }, []);

  const clearHistory = () => {
    if (window.confirm("Are you sure you want to clear your entire analysis history? This cannot be undone.")) {
      setHistory([]);
    }
  };

  const analyzeAction = async () => {
    if (!inputText.trim()) return;
    setIsLoading(true);
    setError(null);
    setIsUsingFallback(false);
    
    try {
      const response = await fetch('/api/analyze', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          action: inputText,
          model: selectedModel,
          commandments: commandments.map(c => ({
            id: c.id,
            text: c.text,
            keyPoints: c.keyPoints
          }))
        })
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Network response was not ok');
      }
      
      const data = await response.json();
      const anyViolatedByAI = data.results.some(cmd => cmd.violated);
      
      const finalResults = data.results.map(cmd => {
        const isPrimary = cmd.violated;
        const isSecondary = anyViolatedByAI && !isPrimary;
        
        return {
          ...cmd,
          violated: isPrimary || isSecondary,
          isPrimaryViolation: isPrimary,
          isSecondaryViolation: isSecondary,
        };
      });
      
      const analysisResult = {
        action: inputText,
        results: finalResults,
        anyViolated: anyViolatedByAI,
        principleOfLove: anyViolatedByAI 
          ? "As Jesus taught, 'On these two commandments hang all the law and the prophets' (Matthew 22:40). Love, defined as self-sacrifice for the best of others, is not possible without rejoicing in the absence of the cherished sinful thought processes that lead to the transgressions the Ten Commandments forbid. When we violate any commandment, we break the law of love that underlies all of God's precepts. James 2:10 reminds us: 'Whoever keeps the whole law but fails in one point has become guilty of all of it.' True transformation begins with renewing our minds (Romans 12:2) - changing our upstream thinking and attention - before our downstream actions can align with God's will. Follow Christ's example in all things."
          : "The action aligns with all commandments, reflecting a heart that loves God and neighbor. Remember, love as self-sacrifice for the best of others is only possible when we rejoice in the absence of the cherished sinful thought processes that lead to the transgressions the Ten Commandments forbid. Maintaining this alignment requires continuous attention to our thoughts and intentions, as they determine our actions. Continue to imitate Christ in all things."
      };
      
      setAnalysis(analysisResult);
      
      if (!isPrivateMode) {
        setHistory(prev => [analysisResult, ...prev.slice(0, 9)]);
      }
    } catch (err) {
      console.error('Analysis error:', err);
      
      if (err.message.includes('API Key') || err.message.includes('configuration')) {
        setError(err.message);
      } else {
        setIsUsingFallback(true);
      }
      
      const mockResults = commandments.map(cmd => {
        if (typeof cmd.analyze === 'function') {
          const result = cmd.analyze(inputText);
          return { ...cmd, ...result };
        }
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
        const isPrimary = cmd.violated;
        const isSecondary = anyViolatedByFallback && !isPrimary;
        return {
          ...cmd,
          violated: isPrimary || isSecondary,
          isPrimaryViolation: isPrimary,
          isSecondaryViolation: isSecondary,
        };
      });
      
      const fallbackResult = {
        action: inputText,
        results: finalResults,
        anyViolated: anyViolatedByFallback,
        principleOfLove: anyViolatedByFallback 
          ? "As Jesus taught, 'On these two commandments hang all the law and the prophets' (Matthew 22:40). Love, defined as self-sacrifice for the best of others, is not possible without rejoicing in the absence of the cherished sinful thought processes that lead to the transgressions the Ten Commandments forbid. When we violate any commandment, we break the law of love that underlies all of God's precepts. James 2:10 reminds us: 'Whoever keeps the whole law but fails in one point has become guilty of all of it.' True transformation begins with renewing our minds (Romans 12:2) - changing our upstream thinking and attention - before our downstream actions can align with God's will. Follow Christ's example in all things."
          : "The action aligns with all commandments, reflecting a heart that loves God and neighbor. Remember, love as self-sacrifice for the best of others is only possible when we rejoice in the absence of the cherished sinful thought processes that lead to the transgressions the Ten Commandments forbid. Maintaining this alignment requires continuous attention to our thoughts and intentions, as they determine our actions. Continue to imitate Christ in all things."
      };
      
      setAnalysis(fallbackResult);
      
      if (!isPrivateMode) {
        setHistory(prev => [fallbackResult, ...prev.slice(0, 9)]);
      }
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
        <Header activeTab="lightshedder" onToggleTab={onNavigateToEducation} />
        
        <main className="max-w-4xl mx-auto px-4 py-8">
          <form onSubmit={handleAnalyze}>
            <InputSection 
              value={inputText} 
              onChange={handleInputChange} 
              onAnalyze={analyzeAction} 
              loading={isLoading}
              selectedModel={selectedModel}
              onModelChange={setSelectedModel}
              availableModels={availableModels}
              isPrivateMode={isPrivateMode}
              onTogglePrivateMode={() => setIsPrivateMode(!isPrivateMode)}
            />
          </form>
          
          {isLoading && <LoadingSpinner />}
          
          {error && <ErrorFallback onRetry={analyzeAction} />}
          
          {isUsingFallback && (
            <div className="my-6 p-4 bg-blue-50 border-l-4 border-blue-400 dark:bg-blue-950 dark:border-blue-700 text-blue-800 dark:text-blue-300 rounded-r-lg">
              <p className="font-medium">Notice: Using local analysis engine.</p>
              <p className="text-sm">The AI service is currently unavailable, so we're using our built-in keyword-based analysis to provide immediate insights.</p>
            </div>
          )}
          
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
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Analysis History</h2>
                <button 
                  onClick={clearHistory}
                  className="text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-200 text-sm font-medium flex items-center gap-1"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                  Clear History
                </button>
              </div>
              <ul className="space-y-3">
                {history.map((item, idx) => (
                  <li key={idx}>
                    <button 
                      className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 underline text-lg text-left"
                      onClick={() => {
                        setAnalysis(item);
                        setError(null);
                        setIsUsingFallback(false);
                      }}
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