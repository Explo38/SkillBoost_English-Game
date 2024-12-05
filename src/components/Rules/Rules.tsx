import React from 'react';
import './Rules.css'; // Import du CSS pour appliquer le style

const Rules: React.FC = () => {
  return (
    <div className="rules-wrapper">
      <div className="rules-container">
        <h1>Game rules</h1>
        <h2>The goal of this game :</h2>
        <p>Try to earn and improve your soft skills through this game, and boost your general capacity</p>

        <h2>Set up :</h2>
        <p>
          Put the board game on a table, take all the “soft skills” card and lay it out next to the board game by name
          and levels, each player choose his pawn. <br />
          The add-ons will helps you to have an access to the timer for some challenges
        </p>

        <h2>How to play :</h2>
        <ul>
          <li>The youngest player has to begin</li>
          <li>Roll the dice and move forward of the numbers that are indicated on it.</li>
          <li>
            When you are on a soft skill box, take the card indicated (name + easy or hard) and let another player ask
            you the question or if it’s a challenge card, do it, or you will lose a soft skills card !
          </li>
          <li>If you answer right, you earn the card. If not, you don’t.</li>
          <li>The game is ending when one player has earnt 5 soft skills cards.</li>
        </ul>

        <h2>Special case :</h2>
        <ul>
          <li>
            If you fall on a soft skill that you have already won, you can choose any soft skill card and realize the
            challenge or answer the question.
          </li>
          <li>
            Every time you pass to the START (a turn of a set), you win 1 soft skills cards
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Rules;
