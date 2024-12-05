import React, { useEffect, useState } from 'react';
import './Timer.css';

const Timer: React.FC = () => {
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [isRunning, setIsRunning] = useState(false);
  const [lastStopTime, setLastStopTime] = useState(0);
  const [isStarted, setIsStarted] = useState(false);

  const startTimer = () => {
    if (!isRunning) {
      const currentTime = Date.now();
      if (startTime === null) {
        setStartTime(currentTime);
      } else {
        setStartTime(currentTime - (lastStopTime * 1000));
      }
      setIsRunning(true);
      setIsStarted(true);
    }
  };

  const stopTimer = () => {
    setIsRunning(false);
    const stopTime = Date.now();
    setLastStopTime(Math.floor((stopTime - (startTime || stopTime)) / 1000));
  };

  const restartTimer = () => {
    setTimeElapsed(0);
    setLastStopTime(0);
    setStartTime(null);
    setIsRunning(false);
    setIsStarted(false);
  };

  useEffect(() => {
    if (startTime !== null && isRunning) {
      const interval = setInterval(() => {
        const currentTime = Date.now();
        setTimeElapsed(Math.floor((currentTime - startTime) / 1000));
      }, 250);

      return () => clearInterval(interval);
    }
  }, [startTime, isRunning]);

  useEffect(() => {
    flipAllCards(timeElapsed);
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
    <div className="timer-container">
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
