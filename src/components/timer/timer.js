import React from 'react';
import './timer.css';

const Timer = (props) => {
  const {seconds} = props;
  
  let minutes = Math.floor(seconds/60); 
  let renderedSeconds = seconds%60; 
        
  return (
    <div className="timer" onLoad={() => tick()}>
      <div className="time">
        <span className="minute">
          {minutes < 10 ? `0${minutes}` : minutes}</span>
        <span>:</span>
        <span className="second">{
          renderedSeconds < 10 ? `0${renderedSeconds}` : renderedSeconds}</span>
      </div>
    </div>
  )
}

export default Timer
