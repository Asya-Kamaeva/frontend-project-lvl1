import readlineSync from 'readline-sync';
import * as index from '../index.js';

const Nod = () => {
  index.welcome();
  index.rules('Find the greatest common divisor of given numbers.');
  const serchNod = (x, y) => {
    while (x && y) {
      x > y ? x %= y : y %= x;
    }
    x += y;
    return x;
  };
  const game3 = () => {
    const num1 = Math.floor(Math.random() * 50 + 1);
    const num2 = Math.floor(Math.random() * 50 + 1);
    console.log(`Question: ${num1} ${num2}`);
    const result = serchNod(num1, num2);
    const userAnsw = Number(readlineSync.question('Your answer: '));
    return [result, userAnsw];
  };
  index.LayoutOfGame(game3);
};
export default Nod;
