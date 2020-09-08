import React from 'react';

type PropsType = {
  progres: number;
  timeToShow: number;
  startStopFunc: { (bool: boolean): void };
  intervalPaused: boolean;
};

type StyleType = {
  backgroundImage: string;
};

const Circle: React.FunctionComponent<PropsType> = ({
  progres,
  timeToShow,
  startStopFunc,
  intervalPaused,
}) => {
  let circleStyleGreen: StyleType = {
    backgroundImage: `linear-gradient(-${
      progres * 360 - 90
    }deg, transparent 50%, navy 50%),linear-gradient(-270deg, transparent 50%, white 50%)`,
  };
  let circleStyleWhite = {
    backgroundImage: `linear-gradient(-${
      progres * 360 + 90
    }deg, transparent 50%, white 50%),linear-gradient(-270deg, transparent 50%, white 50%)`,
  };
  return (
    <>
      <div className="circle" style={progres > 0.5 ? circleStyleGreen : circleStyleWhite}>
        <div
          className="inner"
          onClick={() => {
            startStopFunc(!intervalPaused);
          }}>
          <span>{timeToShow}</span>

          {intervalPaused ? <BtnStart /> : <BtnStop />}
        </div>
      </div>
    </>
  );
};

const BtnStart = () => <p>start</p>;
const BtnStop = () => <p>stop</p>;

export default Circle;
