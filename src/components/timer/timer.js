import React, { useEffect, useState } from 'react';
import './timer.css';

const Timer = (props) => {
  const {timer} = props;
  
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  
  
    useEffect(() => {
      console.log(timer)
      if(timer != 0) {
        let interval = setInterval(() => {
          if (seconds >= 0) {
            setSeconds(seconds => seconds + 1)

          if (seconds === 59) {
              setSeconds(0);
              setMinutes(minutes + 1)
            }
          }
        }, 1000);
        return () => clearInterval(interval)
      }
      
    }, [seconds])
  
  return (
    <div className="timer">
      <div className="time">
        <span className="minute">
          {minutes < 10 ? `0${minutes}` : minutes}</span>
        <span>:</span>
        <span className="second">{seconds < 10 ? `0${seconds}` : seconds}</span>
      </div>
    </div>
  )
}


export default Timer
