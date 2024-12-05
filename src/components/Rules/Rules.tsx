import React from 'react';
import './Rules.css';

const Rules: React.FC = () => {
  return (
    <div className="rules-wrapper">
      <div className="rules-container">
        <h1>GAME RULES</h1>

        <h2>THE GOAL OF THIS GAME:</h2>
        <p>
          Try to earn and improve your soft skills through this game, and boost your general capacity.
        </p>

        <h2>SET UP:</h2>
        <p>
          Put the board game on a table, take all the “soft skills” cards by name and lay them out next to the board game. Each player chooses their pawn.
        </p>
        <p>
          The add-ons will help you have access to the timer for some challenges.
        </p>

        <h2>HOW TO PLAY:</h2>
          <li>The youngest player has to begin.</li>
          <li>Roll the dice and move forward by the number indicated on it.</li>
          <li>
            When you land on a soft skill box, take the card indicated (name + easy or hard) and let another player ask you the question. If it’s a challenge card, perform the challenge or you will lose a soft skills card!
          </li>
          <li>If you answer correctly, you earn the card. If not, you don’t.</li>
          <li>The game ends when one player has earned 5 soft skills cards.</li>

        <h2>SPECIAL CASE:</h2>
          <li>
            If you land on a soft skill that you have already won, you can choose any soft skill card and either perform the challenge or answer the question.
          </li>
          <li>Every time you pass the START (a turn of a set), you win 1 soft skills card.</li>
      </div>
    </div>
  );
}

export default Rules;
