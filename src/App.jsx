import React, { useState } from "react";
import Home from "./pages/Home";
import Education from "./pages/Education";

function App() {
  const [activeTab, setActiveTab] = useState('lightshedder');

  return (
    <div className="min-h-screen">
      {activeTab === 'lightshedder' ? (
        <Home onNavigateToEducation={() => setActiveTab('education')} />
      ) : (
        <Education onNavigateToLightshedder={() => setActiveTab('lightshedder')} />
      )}
    </div>
  );
}

export default App;