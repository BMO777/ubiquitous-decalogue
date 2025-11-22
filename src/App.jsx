import React, { useState } from "react";
import Home from "./pages/Home";
import Education from "./pages/Education";

function App() {
  const [activeTab, setActiveTab] = useState('analyzer');

  return (
    <div>
      {activeTab === 'analyzer' ? (
        <Home onNavigateToEducation={() => setActiveTab('education')} />
      ) : (
        <Education onNavigateToAnalyzer={() => setActiveTab('analyzer')} />
      )}
    </div>
  );
}

export default App;