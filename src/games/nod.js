import LayoutOfGame from '../index.js';

const Nod = () => {
  const serchNod = (x, y) => {
    if (y === 0) {
      return x;
    }
    return serchNod(y, x % y);
  };
  const rules = 'Find the greatest common divisor of given numbers.';
  const game3 = () => {
    const num1 = Math.floor(Math.random() * 50 + 1);
    const num2 = Math.floor(Math.random() * 50 + 1);
    console.log(`Question: ${num1} ${num2}`);
    const result = serchNod(num1, num2);
    const resultStr = String(result);
    return resultStr;
  };
  LayoutOfGame(game3, rules);
};
export default Nod;
