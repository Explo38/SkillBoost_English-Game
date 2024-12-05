import React, { useState, useEffect } from 'react';
import './App.css';
import Timer from './components/Timer/Timer';
import Rules from './components/Rules/Rules';
import ToggleSwitch from './components/ToggleSwitch/ToggleSwitch';
import Anim from './components/anim/anim';
import Footer from './components/footer/footer';

const App: React.FC = () => {
  const [showTimer, setShowTimer] = useState(true); 
  const [animationComplete, setAnimationComplete] = useState(false); 

  useEffect(() => {
    // Ajouter un délai avant de passer au contenu principal
    const timer = setTimeout(() => {
      setAnimationComplete(true); 
    }, 8000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {!animationComplete && <Anim />} 
      
      {animationComplete && (
        <>
          <ToggleSwitch onChange={(checked) => setShowTimer(checked)} />
          {showTimer ?  <Rules /> : <Timer />}
          <Footer />
        </>
      )}
     
    </div>
  );
};

export default App;
