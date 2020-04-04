import React, { useState, useEffect } from 'react';
import moment from 'moment';

import './clock.styles.scss';

const Clock = () => {
  const [currentTime, setCurrentTime] = useState(moment().format('h:mm:ss a'))
  const [currentDate, setCurrentDate] = useState(moment().format('dddd, MMMM Do'))

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(moment().format('h:mm:ss a'));
      setCurrentDate(moment().format('dddd, MMMM Do'));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="clock">
      <div className="current-time"><h1>{currentTime}</h1></div>
      <div><h5>{`${currentDate}`}</h5></div>
    </div>
  )
};

export default Clock;