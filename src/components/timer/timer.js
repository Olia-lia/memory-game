import React, { useEffect, useState } from 'react';
import './timer.css';

const Timer = (props) => {
  const {time} = props;
  
  const [minutes, setMinutes] = useState(time.minutes);
  const [seconds, setSeconds] = useState(time.seconds);
  
  console.log(timer)

    useEffect(() => {
      let interval = null;
      if(timer == true) {
        interval = setInterval(() => {
          if (seconds >= 0) {
            setSeconds(seconds => seconds + 1)

          if (seconds === 59) {
              setSeconds(0);
              setMinutes(minutes + 1)
            }
          }
        }, 1000);
      }
      else {setSeconds(0);
        setMinutes(0)}
        return () => clearInterval(interval)
      
    }, [seconds])

 
useEffect(() => {

})
  
  return (
    <div className="timer">
      <div className="time">
        <span className="minute">
          {time.minutes < 10 ? `0${time.minutes}` : time.minutes}</span>
        <span>:</span>
        <span className="second">{time.seconds < 10 ? `0${time.seconds}` : time.seconds}</span>
      </div>
    </div>
  )
}


export default Timer
