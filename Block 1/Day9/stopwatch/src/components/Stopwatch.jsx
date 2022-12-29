import React, { useState, useEffect } from "react";
import "./Stopwatch.css";

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);
  return (
    <div className="stopwatch">
      <div className="numbers">
        <span>{("0" + Math.floor((time / 3600000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{("" + ((time / 10) % 100)).slice(-2)}</span>
      </div>
      <div className="buttons">
        <button className="start" onClick={() => setRunning(true)}>START</button>
        <button className="stop" onClick={() => setRunning(false)}>STOP</button>
        <button className="reset" onClick={() => setTime(0)}>RESET</button>
      </div>
    </div>
  );
};

export default Stopwatch;