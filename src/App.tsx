import Line from 'components/Line';
import Container from './components/Container';
import { useState, useEffect } from 'react';
import Button from './components/Button';

const initialData = [
  { name: 'Landing Page', time: 7.4 },
  { name: 'Configurator', time: 0.2 },
  { name: 'Check-out', time: 7 },
  { name: 'Deal', time: 3.8 },
];
interface IdataObject {
  name: string;
  time: number;
}

function App() {
  const [data, setData] = useState(initialData);
  const [totalTime, setTotalTime] = useState(0);
  const [breackPoints, setBreackPoints] = useState<number[]>([]);

  useEffect(() => {
    const total = data.reduce((prev, el) => prev + el.time, 0);
    setTotalTime(total);
  }, [data]);

  useEffect(() => {
    let breackPoints: number[] = [];

    let unitLengthsSum = 0;

    data.forEach((unit, idx) => {
      const unitLength = Math.round((unit.time / totalTime) * 100);
      idx === 0 ? breackPoints.push(0) : breackPoints.push(unitLengthsSum);
      unitLengthsSum += unitLength;
    });
    setBreackPoints(breackPoints);
  }, [totalTime, data]);

  const getNewData: (newData: IdataObject[]) => void = newData => {
    setData(newData);
  };

  return (
    <Container>
      <ul>
        {data.map((item, idx) => {
          return (
            <li key={item.name}>
              <Line
                breackPoint={breackPoints[idx]}
                name={item.name}
                time={item.time}
                totalTime={totalTime}
              />
            </li>
          );
        })}
      </ul>
      <Button data={data} getNewData={getNewData} />
    </Container>
  );
}

export default App;
