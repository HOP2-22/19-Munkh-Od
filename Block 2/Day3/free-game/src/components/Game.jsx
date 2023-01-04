import "../Styles/Game.css";
import React, { useState } from "react";
import Timer from "./Timer.jsx";
import Score from "./Score.jsx";

const TIME_LIMIT = 10000;

function Game() {
  const [start, setStart] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const endGame = () => {
    setStart(false);
    setFinished(true);
  };

  const startGame = () => {
    setScore(0);
    setStart(true);
    setFinished(false);
  };

  return (
    <>
      {!start && !finished && (
        <>
          <div>
            <div className="default_time">Time: 10s </div>
            <div className="default_score">Score: 0 </div>
          </div>
          <div className="line">
            <button className="start-button" onClick={startGame}>
              START
            </button>
          </div>
        </>
      )}

      {finished && (
        <>
          <Score className="default_score" value={score} />
          <div className="playAgain">
            <button onClick={startGame}>Play Again</button>
          </div>
        </>
      )}

      {start && (
        <>
          <button className="start-button" onClick={endGame}>
            End Game
          </button>

          <div className="info">
            <Score value={score} />
            <Timer time={TIME_LIMIT} theEnd={endGame} />
          </div>
        </>
      )}
    </>
  );
}

export default Game;
