import React, { useState, useEffect } from "react";

function Timer() {
  const [timeLeft, setTimeLeft] = useState(30);

  useEffect(() => {
    if (timeLeft === 0) return;

    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft]);

  return (
    <div>
      {timeLeft === 0 ? (
        <h1>Time's up!</h1>
      ) : (
        <h1>Time remaining: {timeLeft} seconds</h1>
      )}
    </div>
  );
}

export default Timer;
