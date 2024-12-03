import React, { useState } from "react";
import Timer from "./components/Timer/Timer";
import Rules from "./components/Rules/Rules";
import ToggleSwitch from "./components/ToggleSwitch/ToggleSwitch";
import "./App.css";

const App = () => {
  const [showTimer, setShowTimer] = useState(true);

  const handleToggle = (isChecked: boolean) => {
    setShowTimer(isChecked);
  };

  return (
    <div className="app-container">
      <div className="switch-container">
        <ToggleSwitch onChange={handleToggle} isChecked={showTimer} />
      </div>
      <div className="main-content">
        {showTimer ? <Timer /> : <Rules />}
      </div>
    </div>
  );
};

export default App;
