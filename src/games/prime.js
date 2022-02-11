import buildAGame from '../index.js';
import chooseRandomNumber from '../utils.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  const sqrtOfNumber = Math.sqrt(number);
  for (let i = 2; i <= sqrtOfNumber; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const play = () => {
  const randomNumber = chooseRandomNumber(1, 20);
  const result = isPrime(randomNumber) ? 'yes' : 'no';
  const question = String(randomNumber);
  return [result, question];
};

export default () => {
  buildAGame(play, rules);
};
