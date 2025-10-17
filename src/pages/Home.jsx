import React, { useState } from "react";
import Header from "../components/Header";
import InputSection from "../components/InputSection";
import ResultCard from "../components/ResultCard";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorFallback from "../components/ErrorFallback";
import { commandments } from "../utils/commandments";
import useLocalStorage from "../hooks/useLocalStorage";

export default function Home() {
  const [inputText, setInputText] = useState("");
  const [analysis, setAnalysis] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [history, setHistory] = useLocalStorage("analysisHistory", []);

  const analyzeAction = async () => {
    if (!inputText.trim()) return;

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: inputText,
          commandments: commandments.map((c) => ({
            id: c.id,
            text: c.text,
            keyPoints: c.keyPoints,
          })),
        }),
      });

      if (!response.ok) throw new Error("Network response was not ok");
      const data = await response.json();

      // "One violation = all violated" principle
      const anyViolated = data.results.some((cmd) => cmd.violated);
      const primaryViolations = data.results
        .filter((cmd) => cmd.violated)
        .map((cmd) => cmd.id);

      const finalResults = data.results.map((cmd) => {
        const isPrimary = primaryViolations.includes(cmd.id);
        const isSecondary = anyViolated && !isPrimary;

        return {
          ...cmd,
          violated: anyViolated,
          isPrimaryViolation: isPrimary,
          isSecondaryViolation: isSecondary,
          explanation: isPrimary
            ? cmd.explanation
            : `${cmd.explanation} — Though this commandment wasn't directly violated, James 2:10 teaches that breaking one commandment makes us guilty of all, because love fulfills the law (Romans 13:10).`,
        };
      });

      setAnalysis({
        results: finalResults,
        anyViolated,
        principleOfLove: anyViolated
          ? "As Jesus taught, 'On these two commandments hang all the law and the prophets' (Matthew 22:40). When we violate any commandment, we break the law of love that underlies all of God's precepts. James 2:10 reminds us: 'Whoever keeps the whole law but fails in one point has become guilty of all of it.'"
          : "The action aligns with all commandments, reflecting a heart that loves God and neighbor.",
      });
      setHistory((prev) => [data, ...prev.slice(0, 9)]); // Keep last 10
    } catch (err) {
      console.error("Analysis error:", err);

      // Fallback to local keyword-based analysis
      const mockResults = commandments.map((cmd) => {
        if (typeof cmd.analyze === "function") {
          const result = cmd.analyze(inputText);
          return {
            ...cmd,
            ...result,
          };
        }
        // Simple fallback stub
        return {
          ...cmd,
          violated: false,
          explanation: "No AI result available.",
          biblicalReasoning: "",
          guidance: "",
        };
      });

      const anyViolated = mockResults.some((cmd) => cmd.violated);
      const primaryViolations = mockResults
        .filter((cmd) => cmd.violated)
        .map((cmd) => cmd.id);

      const finalResults = mockResults.map((cmd) => {
        const isPrimary = primaryViolations.includes(cmd.id);
        const isSecondary = anyViolated && !isPrimary;

        return {
          ...cmd,
          violated: anyViolated,
          isPrimaryViolation: isPrimary,
          isSecondaryViolation: isSecondary,
          explanation: isPrimary
            ? cmd.explanation
            : `${cmd.explanation} — Though this commandment wasn't directly violated, James 2:10 teaches that breaking one commandment makes us guilty of all, because love fulfills the law (Romans 13:10).`,
        };
      });

      setAnalysis({
        results: finalResults,
        anyViolated,
        principleOfLove: anyViolated
          ? "As Jesus taught, 'On these two commandments hang all the law and the prophets' (Matthew 22:40). When we violate any commandment, we break the law of love that underlies all of God's precepts. James 2:10 reminds us: 'Whoever keeps the whole law but fails in one point has become guilty of all of it.'"
          : "The action aligns with all commandments, reflecting a heart that loves God and neighbor.",
      });
    }

    setIsLoading(false);
  };

  const handleInputChange = (e) => setInputText(e.target.value);

  const handleAnalyze = (e) => {
    e.preventDefault();
    analyzeAction();
  };

  return (
    <div>
      <Header />
      <main className="max-w-2xl mx-auto px-4 py-8">
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
          <div>
            {analysis.principleOfLove && (
              <div className="my-4 p-4 rounded bg-yellow-100 border-l-4 border-yellow-400 text-yellow-800">
                <strong>Theology Note:</strong> {analysis.principleOfLove}
              </div>
            )}
            {analysis.results.map((cmd) => (
              <ResultCard key={cmd.id} cmd={cmd} />
            ))}
          </div>
        )}
        {history.length > 0 && (
          <section className="mt-8">
            <h2 className="text-xl font-bold mb-2">Analysis History</h2>
            <ul>
              {history.map((item, idx) => (
                <li key={idx} className="mb-2">
                  <button
                    className="text-blue-600 underline"
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
  );
}
