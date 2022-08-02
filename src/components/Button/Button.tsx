interface IdataObject {
  name: string;
  time: number;
}
interface Props {
  data: IdataObject[];
  getNewData: (newData: IdataObject[]) => void;
}

const Button = ({ data, getNewData }: Props) => {
  const generateNewData: (data: IdataObject[]) => void = data => {
    const newData = data.map(unit => {
      const randomValue = Math.floor(Math.random() * (20 - 2) + 2);
      return { name: unit.name, time: randomValue };
    });
    getNewData(newData);
  };

  return (
    <button type="button" onClick={() => generateNewData(data)}>
      Change Values
    </button>
  );
};

export default Button;
