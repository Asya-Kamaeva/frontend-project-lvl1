import buildAGame from '../index.js';
import chooseRandomNumber from '../utils.js';

const rules = 'Find the greatest common divisor of given numbers.';

const calculateGcd = (x, y) => {
  if (y === 0) {
    return x;
  }
  return calculateGcd(y, x % y);
};

const play = () => {
  const number1 = chooseRandomNumber(1, 50);
  const number2 = chooseRandomNumber(1, 50);
  const question = `${number1} ${number2}`;
  const result = calculateGcd(number1, number2);
  const stringResult = String(result);
  return [stringResult, question];
};

export default () => {
  buildAGame(play, rules);
};
