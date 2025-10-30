import React, { useState } from "react";
import Home from "./pages/Home";
import Education from "./pages/Education";
import Navigation from "./components/Navigation";

function App() {
  const [activeTab, setActiveTab] = useState('analyzer');

  return (
    <div>
      {activeTab === 'analyzer' ? (
        <Home onNavigateToEducation={() => setActiveTab('education')} />
      ) : (
        <Education />
      )}
    </div>
  );
}

export default App;