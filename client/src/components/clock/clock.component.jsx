import React, { useState, useEffect } from 'react';

import './clock.styles.scss';

const Clock = () => {
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="clock">
      {`${currentTime}`}
    </div>
  )
};

export default Clock;