import React, { useEffect, useState } from 'react';
import './Timer.css';

const Timer: React.FC = () => {
  const [timeElapsed, setTimeElapsed] = useState(0); // Temps écoulé en secondes
  const [startTime, setStartTime] = useState<number | null>(null); // Temps de début du chronomètre
  const [isRunning, setIsRunning] = useState(false); // Indique si le chronomètre est en cours
  const [lastStopTime, setLastStopTime] = useState(0); // Temps où le chronomètre a été arrêté pour la reprise
  const [isStarted, setIsStarted] = useState(false); // Indique si le timer a été démarré (pour gérer l'affichage des boutons)

  // Démarrer le chronomètre
  const startTimer = () => {
    if (!isRunning) {
      const currentTime = Date.now();
      if (startTime === null) {
        setStartTime(currentTime); // Si le chronomètre est démarré pour la première fois
      } else {
        // Reprendre depuis où ça s'est arrêté
        setStartTime(currentTime - (lastStopTime * 1000)); // Calculer le bon temps de départ en fonction du temps déjà écoulé
      }
      setIsRunning(true); // Le chronomètre est en cours
      setIsStarted(true); // Le chronomètre a été démarré
    }
  };

  // Arrêter le chronomètre
  const stopTimer = () => {
    setIsRunning(false); // Le chronomètre s'arrête
    const stopTime = Date.now();
    setLastStopTime(Math.floor((stopTime - (startTime || stopTime)) / 1000)); // Mémoriser le temps au moment de l'arrêt
  };

  // Redémarrer le chronomètre
  const restartTimer = () => {
    setTimeElapsed(0); // Remise à zéro du chrono
    setLastStopTime(0); // Réinitialisation du temps de pause
    setStartTime(null); // Réinitialisation du startTime
    setIsRunning(false); // Le chronomètre est arrêté
    setIsStarted(false); // On revient à l'état initial où seul le bouton "Start" est affiché
  };

  useEffect(() => {
    // Si le chronomètre a commencé, met à jour le temps écoulé toutes les 250ms
    if (startTime !== null && isRunning) {
      const interval = setInterval(() => {
        const currentTime = Date.now();
        setTimeElapsed(Math.floor((currentTime - startTime) / 1000)); // Calcul du temps écoulé en secondes
      }, 250);

      return () => clearInterval(interval); // Nettoyage de l'intervalle quand le composant se démonte
    }
  }, [startTime, isRunning]);

  useEffect(() => {
    flipAllCards(timeElapsed); // Mettre à jour l'affichage de l'horloge à chaque changement de temps
  }, [timeElapsed]);

  const flipAllCards = (time: number) => {
    const seconds = time % 60;
    const minutes = Math.floor(time / 60) % 60;

    flip('[data-minutes-tens]', Math.floor(minutes / 10));
    flip('[data-minutes-ones]', minutes % 10);
    flip('[data-seconds-tens]', Math.floor(seconds / 10));
    flip('[data-seconds-ones]', seconds % 10);
  };

  const flip = (selector: string, newNumber: number) => {
    const flipCard = document.querySelector(selector) as HTMLElement;
    const topHalf = flipCard.querySelector('.top') as HTMLElement;
    const startNumber = parseInt(topHalf.textContent || '0');
    if (newNumber === startNumber) return;

    const bottomHalf = flipCard.querySelector('.bottom') as HTMLElement;
    const topFlip = document.createElement('div');
    topFlip.classList.add('top-flip');
    const bottomFlip = document.createElement('div');
    bottomFlip.classList.add('bottom-flip');

    topFlip.textContent = startNumber.toString();
    bottomFlip.textContent = newNumber.toString();

    topFlip.addEventListener('animationstart', () => {
      topHalf.textContent = newNumber.toString();
    });
    topFlip.addEventListener('animationend', () => {
      topFlip.remove();
    });
    bottomFlip.addEventListener('animationend', () => {
      bottomHalf.textContent = newNumber.toString();
      bottomFlip.remove();
    });
    flipCard.append(topFlip, bottomFlip);
  };

  return (
<div className="container">
  <div className="timer-segment">
    <div className="timer-time">
      <div className="container-segment">
        <div className="segment-title">Minutes</div>
        <div className="segment">
          <div className="flip-card" data-minutes-tens>
            <div className="top">0</div>
            <div className="bottom">0</div>
          </div>
          <div className="flip-card" data-minutes-ones>
            <div className="top">0</div>
            <div className="bottom">0</div>
          </div>
        </div>
      </div>
      <div className="container-segment">
        <div className="segment-title">Seconds</div>
        <div className="segment">
          <div className="flip-card" data-seconds-tens>
            <div className="top">0</div>
            <div className="bottom">0</div>
          </div>
          <div className="flip-card" data-seconds-ones>
            <div className="top">0</div>
            <div className="bottom">0</div>
          </div>
        </div>
      </div>
    </div>
    {/* Séparation des boutons dans un nouveau conteneur */}
    <div className="buttons">
      {!isStarted ? (
        <button onClick={startTimer}>Start Timer</button>
      ) : (
        <>
          <button onClick={stopTimer} disabled={!isRunning}>
            Stop Timer
          </button>
          <button onClick={restartTimer}>
            Restart Timer
          </button>
        </>
      )}
    </div>
  </div>
</div>


  );
};

export default Timer;
