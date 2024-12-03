import React, { useEffect, useState } from 'react';
import './Timer.css';

const Timer: React.FC = () => {
  const [timeRemaining, setTimeRemaining] = useState(0);
  const countToDate = new Date().setHours(new Date().getHours() + 24);
  
  useEffect(() => {
    const interval = setInterval(() => {
      const currentDate = new Date();
      const timeBetweenDates = Math.ceil((countToDate - currentDate) / 1000);
      setTimeRemaining(timeBetweenDates);
    }, 250);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (timeRemaining === 0) return;
    flipAllCards(timeRemaining);
  }, [timeRemaining]);

  const flipAllCards = (time: number) => {
    const seconds = time % 60;
    const minutes = Math.floor(time / 60) % 60;
    const hours = Math.floor(time / 3600);

    flip('[data-hours-tens]', Math.floor(hours / 10));
    flip('[data-hours-ones]', hours % 10);
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
      <div className="container-segment">
        <div className="segment-title">Hours</div>
        <div className="segment">
          <div className="flip-card" data-hours-tens>
            <div className="top">2</div>
            <div className="bottom">2</div>
          </div>
          <div className="flip-card" data-hours-ones>
            <div className="top">4</div>
            <div className="bottom">4</div>
          </div>
        </div>
      </div>
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
  );
};

export default Timer;
