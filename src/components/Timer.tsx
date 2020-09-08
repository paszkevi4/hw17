import React, { useState, useEffect } from 'react';
//@ts-ignore
import Circle from './Circle/Circle.tsx';

type PropsType = {
  autostart: boolean;
  time: number;
  step: number;
};

const Timer: React.FunctionComponent<PropsType> = ({ autostart, time, step }) => {
  let [intervalPaused, setIntervalPaused] = useState(!autostart);
  let [timeLeft, setTimeLeft] = useState(time);
  let interval: any;

  useEffect(() => {
    timer();
    return () => {
      clearInterval(interval);
    };
  }, [intervalPaused]);

  const timer = () => {
    interval = setInterval(() => {
      if (!intervalPaused) {
        setTimeLeft((timeLeft -= step));
      }
      if (timeLeft <= 0) {
        clearInterval(interval);
      }
    }, step);
  };

  return (
    <div className="circleContainer">
      <Circle
        progres={timeLeft / time}
        timeToShow={Math.ceil(timeLeft / 1000)}
        startStopFunc={setIntervalPaused}
        intervalPaused={intervalPaused}
      />
    </div>
  );
};

export default Timer;
