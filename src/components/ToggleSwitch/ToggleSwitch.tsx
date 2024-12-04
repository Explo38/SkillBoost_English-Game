import React, { useState } from "react";
import ToggleSwitch from "./ToggleSwitch"; // Import du ToggleSwitch
import "./App.css"; // Import du fichier CSS

const App: React.FC = () => {
  const [isTimer, setIsTimer] = useState(true); // État pour choisir entre Timer et Rules

  const handleSwitchChange = (isChecked: boolean) => {
    setIsTimer(isChecked); // Mettre à jour l'état en fonction du switch
  };

  return (
    <div className="app-container">
      {/* Bouton Switch au-dessus du timer */}
      <ToggleSwitch onChange={handleSwitchChange} isChecked={isTimer} />

      {/* Affichage conditionnel du timer ou des règles */}
      <div className="content-container">
        {isTimer ? (
          <div className="timer-segment">
            {/* Ton code de timer ici */}
            <div className="timer-time">
              <span>00</span>:<span>00</span>
            </div>
            <div className="buttons">
              <button>Start</button>
              <button>Pause</button>
            </div>
          </div>
        ) : (
          <div className="rules">
            <h2>Règles du jeu</h2>
            <p>Voici les règles du jeu...</p>
            {/* Affiche tes règles ici */}
            <ul>
              <li>Règle 1 : ...</li>
              <li>Règle 2 : ...</li>
              <li>Règle 3 : ...</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
