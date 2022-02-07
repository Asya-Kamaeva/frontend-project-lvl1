import buildAGame from '../index.js';
import chooseRandomNumber from '../utils.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (number) => (number % 2 === 0);
const play = () => {
  const randomNumber = chooseRandomNumber(1, 100);
  const question = `${randomNumber}`;
  const result = isEven(randomNumber) ? 'yes' : 'no';
  return [result, question];
};

export default () => {
  buildAGame(play, rules);
};
