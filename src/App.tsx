import React from 'react';
import Timer from './components/Timer/timmer';
import Rules from './components/Rules/ruless';
import ToggleSwitch from './components/ToggleSwitch/ToggleSwitch';

const App: React.FC = () => {
  return (
    <div>
      <Timer />
      <Rules />
      <ToggleSwitch />
    </div>
  );
}

export default App;
