import React, { useState } from "react";
import Home from "./pages/Home";
import Education from "./pages/Education";
import Navigation from "./components/Navigation";

function App() {
  const [activeTab, setActiveTab] = useState('analyzer');

  return (
    <div>
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === 'analyzer' ? <Home /> : <Education />}
    </div>
  );
}

export default App;