import React, { useState } from 'react';
import Timer from './components/Timer/Timer';
import Rules from './components/Rules/Rules';
import ToggleSwitch from './components/ToggleSwitch/ToggleSwitch';

const App: React.FC = () => {
  const [showTimer, setShowTimer] = useState(true); // L'état pour gérer quel composant afficher

  return (
    <div>
      <ToggleSwitch onChange={(checked) => setShowTimer(checked)} />
      
      {showTimer ? <Timer /> : <Rules />}
    </div>
  );
}

export default App;
