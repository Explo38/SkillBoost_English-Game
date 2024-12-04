// src/App.tsx
import React, { useState } from "react";
import Timer from "./components/Timer/timer";
import Rules from "./components/Rules/rules";
import ToggleSwitch from "./components/ToggleSwitch/ToggleSwitch";
import "./App.css";

const App: React.FC = () => {
  const [showTimer, setShowTimer] = useState(true);

  const handleToggle = (isChecked: boolean) => {
    setShowTimer(isChecked);
  };

  return (
    <div className="app-container">
      <div className="switch-container">
        {/* Passage des props correctement typées */}
        <ToggleSwitch onChange={handleToggle} isChecked={showTimer} />
      </div>
      <div className="main-content">
        {showTimer ? <Timer /> : <Rules />}
      </div>
    </div>
  );
};

export default App;
