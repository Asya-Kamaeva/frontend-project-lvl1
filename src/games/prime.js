import buildAGame from '../index.js';
import chooseRandomNumber from '../utils.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isPrime = (number) => {
  if (number === 1) {
    return true;
  }
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return true;
    }
  }
  return false;
};
const play = () => {
  const randomNumber = chooseRandomNumber(1, 20);
  const result = isPrime(randomNumber) ? 'no' : 'yes';
  const question = `${randomNumber}`;
  return [result, question];
};

export default () => {
  buildAGame(play, rules);
};
