import readlineSync from 'readline-sync';
import * as index from '../index.js';

const Progression = () => {
  index.welcome();
  index.rules('What number is missing in the progression?');

  const randomNum = (min, max) => {
    const rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  };
  const progression = (start, step, length) => {
    const arr = [];
    arr.push(start);
    let a = start;
    while (arr.length < length) {
      a += step;
      arr.push(a);
    }
    return (arr);
  };
  const game4 = () => {
    const startNum = randomNum(1, 100);
    const stepNum = randomNum(1, 10);
    const count = randomNum(5, 10);
    const hiddenEl = randomNum(1, count);
    const bigArr = progression(startNum, stepNum, count);
    const result = bigArr[hiddenEl - 1];
    bigArr[hiddenEl - 1] = '..';
    const strArr = bigArr.join(' ');
    console.log(`Question: ${strArr}`);
    const userAnsw = Number(readlineSync.question('Your answer: '));
    return [result, userAnsw];
  };
  index.LayoutOfGame(game4);
};
export default Progression;
