import React from "react";
import "./ToggleSwitch.css";

type ToggleSwitchProps = {
  onChange: (isChecked: boolean) => void;
  isChecked: boolean;
};

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ onChange, isChecked }) => {
  return (
    <div className={`switch-container ${isChecked ? "active" : ""}`}>
      <button
        className="switch-button"
        onClick={() => onChange(!isChecked)}
      >
        <div className="switch-label">{isChecked ? "Timer" : "Rules"}</div>
      </button>
    </div>
  );
};

export default ToggleSwitch;
