import s from './Line.module.css';
import { useState, useEffect } from 'react';

interface Props {
  name: string;
  time: number;
  breackPoint: number;
  totalTime: number;
}
const Line = ({ name, time, breackPoint, totalTime }: Props) => {
  const [endRange, setEndRange] = useState(0);

  useEffect(() => {
    const chartLength = Math.round((time / totalTime) * 100);
    setEndRange(chartLength + breackPoint);
  }, [time, totalTime, breackPoint]);

  const style = {
    background: `linear-gradient(to right, 
        rgba(215,210,219,0.6) 0%, rgba(215,210,219,0.6) ${breackPoint}%,
      rgba(119,151,237,1) ${breackPoint}%,rgba(119,151,237,1) ${endRange}%, 
      rgba(215,210,219,0.6) ${endRange}%,rgba(215,210,219,0.6) 100%)`,
  };

  return (
    <>
      <div className={s.lineWrap}>
        <div className={s.text}>{name}</div>
        <div className={s.line} style={style}>
          {time}
        </div>
      </div>
    </>
  );
};

export default Line;
