import readlineSync from 'readline-sync';
import * as index from '../index.js';

const Prime = () => {
  index.welcome();
  index.rules('Answer "yes" if given number is prime. Otherwise answer "no".');
  const randomNum = (min, max) => {
    const rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  };
  const prime = (num) => {
    let answ = 0;
    for (let i = 2; i < num; i += 1) {
      if (num % i === 0) {
        answ = 1;
        break;
      }
    }
    return answ;
  };
  const game5 = () => {
    const random = randomNum(1, 20);
    const randomIsPrime = prime(random);
    const result = (randomIsPrime === 0) ? 'yes' : 'no';
    console.log(`Question: ${random}`);
    const userAnsw = readlineSync.question('Your answer: ');
    return [result, userAnsw];
  };
  index.LayoutOfGame(game5);
};
export default Prime;
