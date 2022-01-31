import BuildAGame from '../index.js';
import chooseRandomNumber from '../utils.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
const play = () => {
  const randomNumber = chooseRandomNumber(1, 100);
  const question = `Question: ${randomNumber}`;
  const flag = randomNumber % 2 === 0;
  const result = (flag === true) ? 'yes' : 'no';
  return [result, question];
};

export default () => {
  BuildAGame(play, rules);
};
