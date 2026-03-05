import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import InputSection from '../components/InputSection';
import ResultCard from '../components/ResultCard';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorFallback from '../components/ErrorFallback';
import { commandments } from '../utils/commandments';
import useLocalStorage from '../hooks/useLocalStorage';
import OfflineIndicator from '../components/OfflineIndicator';
import HistoryCard from '../components/HistoryCard';

export default function Home({ onNavigateToEducation }) {
  const [inputText, setInputText] = useState('');
  const [availableModels, setAvailableModels] = useState([]);
  const [selectedModel, setSelectedModel] = useState('gpt-4o');
  const [analysis, setAnalysis] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isUsingFallback, setIsUsingFallback] = useState(false);
  const [isPrivateMode, setIsPrivateMode] = useState(true);
  const [history, setHistory, clearHistory] = useLocalStorage('analysisHistory', []);

  useEffect(() => {
    const fetchModels = async () => {
      try {
        const response = await fetch('/api/v1/models');
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

  const deleteHistoryItem = (indexToDelete) => {
    if (window.confirm("Delete this analysis from history?")) {
      setHistory(prev => prev.filter((_, index) => index !== indexToDelete));
    }
  };

  const restoreHistoryItem = (item) => {
    setAnalysis(item);
    setError(null);
    setIsUsingFallback(false);
    // Scroll to top to show the restored analysis
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const analyzeAction = async () => {
    if (!inputText.trim()) return;
    setIsLoading(true);
    setError(null);
    setIsUsingFallback(false);
    
    try {
      const response = await fetch('/api/v1/analyze', {
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
        timestamp: Date.now(),
        action: inputText,
        results: finalResults,
        anyViolated: anyViolatedByAI,
        principleOfLove: anyViolatedByAI 
          ? "As Jesus taught, 'On these two commandments hang all the law and the prophets' (Matthew 22:40). Love, defined as self-sacrifice for the best of others, is not possible without rejoicing in the absence of the cherished sinful thought processes that lead to the transgressions the Ten Commandments forbid. When we violate any commandment, we break the law of love that underlies all of God's precepts. James 2:10 reminds us: 'Whoever keeps the whole law but fails in one point has become guilty of all of it.' True transformation begins with renewing our minds (Romans 12:2) - changing our upstream thinking and attention - before our downstream actions can align with God's will. Follow Christ's example in all things."
          : "The action aligns with all commandments, reflecting a heart that loves God and neighbor. Remember, love as self-sacrifice for the best of others is only possible when we rejoice in the absence of the cherished sinful thought processes that lead to the transgressions the Ten Commandments forbid. Maintaining this alignment requires continuous attention to our thoughts and intentions, as they determine our actions. Continue to imitate Christ in all things."
      };
      
      setAnalysis(analysisResult);
      
      if (!isPrivateMode) {
        setHistory(prev => [analysisResult, ...prev.slice(0, 19)]); // Keep up to 20 items
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
        timestamp: Date.now(),
        action: inputText,
        results: finalResults,
        anyViolated: anyViolatedByFallback,
        principleOfLove: anyViolatedByFallback 
          ? "As Jesus taught, 'On these two commandments hang all the law and the prophets' (Matthew 22:40). Love, defined as self-sacrifice for the best of others, is not possible without rejoicing in the absence of the cherished sinful thought processes that lead to the transgressions the Ten Commandments forbid. When we violate any commandment, we break the law of love that underlies all of God's precepts. James 2:10 reminds us: 'Whoever keeps the whole law but fails in one point has become guilty of all of it.' True transformation begins with renewing our minds (Romans 12:2) - changing our upstream thinking and attention - before our downstream actions can align with God's will. Follow Christ's example in all things."
          : "The action aligns with all commandments, reflecting a heart that loves God and neighbor. Remember, love as self-sacrifice for the best of others is only possible when we rejoice in the absence of the cherished sinful thought processes that lead to the transgressions the Ten Commandments forbid. Maintaining this alignment requires continuous attention to our thoughts and intentions, as they determine our actions. Continue to imitate Christ in all things."
      };
      
      setAnalysis(fallbackResult);
      
      if (!isPrivateMode) {
        setHistory(prev => [fallbackResult, ...prev.slice(0, 19)]); // Keep up to 20 items
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
          
          {/* History section next to Private Mode toggle */}
          {history.length > 0 && (
            <section className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Analysis History</h2>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    {history.length} saved {history.length === 1 ? 'analysis' : 'analyses'} (up to 20 stored)
                  </p>
                </div>
                <button 
                  onClick={clearHistory}
                  className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm font-medium focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  Clear All History
                </button>
              </div>
              
              <div className="space-y-3 max-h-[400px] overflow-y-auto pr-2">
                {history.map((item, idx) => (
                  <HistoryCard 
                    key={idx} 
                    item={item} 
                    index={idx}
                    onRestore={restoreHistoryItem}
                    onDelete={deleteHistoryItem}
                  />
                ))}
              </div>
              
              <div className="mt-4 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg border border-gray-200 dark:border-gray-600">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <strong>💡 Tip:</strong> Click "View" to restore any past analysis. History is stored locally in your browser and is not synced across devices. 
                  {isPrivateMode && " Turn off Private Mode to automatically save your analyses."}
                </p>
              </div>
            </section>
          )}
          
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
        </main>
      </div>
    </div>
  );
}