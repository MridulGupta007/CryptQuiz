import React, { useState, useEffect } from 'react';

function CountdownTimer({ date }) {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft(date));

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(getTimeLeft(date));
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  });

  function getTimeLeft(date) {
    const difference = +new Date(date) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }

  const timerComponents = [];

  Object.keys(timeLeft).forEach(interval => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span key={interval}>
        {timeLeft[interval]} {interval}{' '}
      </span>
    );
  });

  return (
    <div>
      {timerComponents.length ? (
        <h1>{timerComponents}</h1>
      ) : (
        <h1>Start</h1>
      )}
    </div>
  );
}

export default CountdownTimer;
