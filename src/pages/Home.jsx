import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import InputSection from "../components/InputSection";
import ResultCard from "../components/ResultCard";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorFallback from "../components/ErrorFallback";
import GuidedReflection from "../components/GuidedReflection";
import { commandments } from "../utils/commandments";
import useLocalStorage from "../hooks/useLocalStorage";
import OfflineIndicator from "../components/OfflineIndicator";

export default function Home({ onNavigateToEducation }) {
  const [inputText, setInputText] = useState("");
  const [analysisMode, setAnalysisMode] = useState("text"); // 'text' or 'guided'
  const [availableModels, setAvailableModels] = useState([]);
  const [selectedModel, setSelectedModel] = useState("gpt-4o");
  const [analysis, setAnalysis] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isUsingAI, setIsUsingAI] = useState(false);
  const [isPrivateMode, setIsPrivateMode] = useState(true);
  const [historyPassword, setHistoryPassword] = useState("");

  const [history, setHistory] = useLocalStorage(
    "analysisHistory",
    [],
    historyPassword,
  );

  useEffect(() => {
    const fetchModels = async () => {
      try {
        const response = await fetch("/api/v1/models", {
          headers: {
            "X-App-Source": "ten-commandments-app",
          },
        });
        if (response.ok) {
          const models = await response.json();
          setAvailableModels(models);
        }
      } catch (err) {
        console.error("Failed to fetch models:", err);
      }
    };
    fetchModels();
  }, []);

  const clearHistory = () => {
    if (
      window.confirm(
        "Are you sure you want to clear your entire analysis history? This cannot be undone.",
      )
    ) {
      setHistory([]);
    }
  };

  const deleteHistoryItem = (index) => {
    if (window.confirm("Delete this analysis from your history?")) {
      const newHistory = [...history];
      newHistory.splice(index, 1);
      setHistory(newHistory);
    }
  };

  const analyzeLocally = (text) => {
    const mockResults = commandments.map((cmd) => {
      const result = cmd.analyze(text);
      return { ...cmd, ...result };
    });

    const anyViolated = mockResults.some((cmd) => cmd.violated);
    const finalResults = mockResults.map((cmd) => {
      const isPrimary = cmd.violated;
      const isSecondary = anyViolated && !isPrimary;
      return {
        ...cmd,
        violated: isPrimary || isSecondary,
        isPrimaryViolation: isPrimary,
        isSecondaryViolation: isSecondary,
      };
    });

    return {
      action: text,
      results: finalResults,
      anyViolated,
      timestamp: new Date().toISOString(),
      principleOfLove: anyViolated
        ? "As Jesus taught, 'On these two commandments hang all the law and the prophets' (Matthew 22:40). Love, defined as self-sacrifice for the best of others, is not possible without rejoicing in the absence of the cherished sinful thought processes that lead to the transgressions the Ten Commandments forbid. True transformation begins with renewing our minds (Romans 12:2) - changing our upstream thinking and attention - before our downstream actions can align with God's will."
        : "The action aligns with all commandments, reflecting a heart that loves God and neighbor. Maintaining this alignment requires continuous attention to our thoughts and intentions, as they determine our actions. Continue to imitate Christ in all things.",
    };
  };

  const handleAnalyze = async (e) => {
    if (e) e.preventDefault();
    if (!inputText.trim()) return;

    setIsLoading(true);
    setError(null);

    // Default to local analysis first for speed and reliability
    const localResult = analyzeLocally(inputText);
    setAnalysis(localResult);

    if (!isPrivateMode) {
      setHistory([localResult, ...history.slice(0, 9)]);
    }

    // If user specifically wants AI, they can trigger it separately or we can try it here
    // For now, we'll stick to local to avoid the errors you've been seeing
    setIsLoading(false);
  };

  const triggerAIAnalysis = async () => {
    if (!inputText.trim()) return;
    setIsLoading(true);
    setIsUsingAI(true);

    try {
      const response = await fetch("/api/v1/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-App-Source": "ten-commandments-app",
        },
        body: JSON.stringify({
          action: inputText,
          model: selectedModel,
          commandments: commandments.map((c) => ({
            id: c.id,
            text: c.text,
            keyPoints: c.keyPoints,
          })),
        }),
      });

      if (!response.ok) throw new Error("AI service unavailable");

      const data = await response.json();
      const anyViolated = data.results.some((cmd) => cmd.violated);

      const finalResults = data.results.map((cmd) => ({
        ...cmd,
        isPrimaryViolation: cmd.violated,
        isSecondaryViolation: anyViolated && !cmd.violated,
        violated: true, // In AI mode, we show all as part of the unity of the law if any are violated
      }));

      const aiResult = {
        ...data,
        action: inputText,
        results: finalResults,
        timestamp: new Date().toISOString(),
      };

      setAnalysis(aiResult);
      if (!isPrivateMode) {
        setHistory([aiResult, ...history.slice(0, 9)]);
      }
    } catch (err) {
      setError("AI Analysis failed. Using local results instead.");
      // We already have local results set from the initial click
    } finally {
      setIsLoading(false);
      setIsUsingAI(false);
    }
  };

  return (
    <div className="min-h-screen">
      <OfflineIndicator />
      <div className="content-overlay">
        <Header activeTab="lightshedder" onToggleTab={onNavigateToEducation} />

        <main className="max-w-4xl mx-auto px-4 py-8">
          <div className="flex justify-center mb-8">
            <div className="inline-flex p-1 bg-gray-100 dark:bg-gray-800 rounded-xl">
              <button
                onClick={() => {
                  setAnalysisMode("text");
                  setAnalysis(null);
                }}
                className={`px-6 py-2 rounded-lg font-bold transition-all ${analysisMode === "text" ? "bg-white dark:bg-gray-700 shadow-sm text-advent-primary dark:text-advent-secondary" : "text-gray-500"}`}
              >
                Free Reflection
              </button>
              <button
                onClick={() => {
                  setAnalysisMode("guided");
                  setAnalysis(null);
                }}
                className={`px-6 py-2 rounded-lg font-bold transition-all ${analysisMode === "guided" ? "bg-white dark:bg-gray-700 shadow-sm text-advent-primary dark:text-advent-secondary" : "text-gray-500"}`}
              >
                Guided Reflection
              </button>
            </div>
          </div>

          {analysisMode === "text" ? (
            <form onSubmit={handleAnalyze}>
              <InputSection
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onAnalyze={handleAnalyze}
                loading={isLoading}
                selectedModel={selectedModel}
                onModelChange={setSelectedModel}
                availableModels={availableModels}
                isPrivateMode={isPrivateMode}
                onTogglePrivateMode={() => setIsPrivateMode(!isPrivateMode)}
                historyPassword={historyPassword}
                onPasswordChange={setHistoryPassword}
                history={history}
                onRestoreHistory={(restored) => {
                  setAnalysis(restored);
                  setInputText(restored.action);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                onDeleteHistory={deleteHistoryItem}
                onClearHistory={clearHistory}
              />
            </form>
          ) : (
            <GuidedReflection
              onComplete={(result) => {
                setAnalysis(result);
                if (!isPrivateMode)
                  setHistory([result, ...history.slice(0, 9)]);
              }}
            />
          )}

          {isLoading && <LoadingSpinner />}

          {error && (
            <div className="my-4 p-4 bg-red-50 border-l-4 border-red-500 text-red-700 rounded">
              {error}
            </div>
          )}

          {analysis && (
            <section className="mt-10 animate-fade-in">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl sm:text-3xl text-gray-900 dark:text-white">
                  Analysis Results
                </h2>
                {analysisMode === "text" && !isUsingAI && (
                  <button
                    onClick={triggerAIAnalysis}
                    className="text-sm font-bold text-advent-primary dark:text-advent-secondary hover:underline"
                  >
                    Get Advanced AI Insights (Optional)
                  </button>
                )}
              </div>

              {analysis.anyViolated && analysis.principleOfLove && (
                <div className="my-6 p-5 rounded-lg bg-yellow-50 border-l-4 border-yellow-400 dark:bg-yellow-950 dark:border-yellow-700 text-yellow-800 dark:text-yellow-300">
                  <h3 className="font-bold text-lg mb-2">Theology Note:</h3>
                  <p className="text-lg">{analysis.principleOfLove}</p>
                </div>
              )}

              <div className="space-y-6">
                <ResultCard
                  isSummary={true}
                  cmd={{
                    text: "Reflection Context",
                    explanation: analysis.action,
                    violated: false,
                  }}
                />
                {analysis.results.map((cmd) => (
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
