import BuildAGame from '../index.js';
import chooseRandomNumber from '../utils.js';

const checkTheNumber = (number) => {
  let answer = 0;
  if (number === 1) {
    answer = 1;
  }
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      answer = 1;
      break;
    }
  }
  return answer;
};
const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const play = () => {
  const randomNumber = chooseRandomNumber(1, 20);
  const flag = checkTheNumber(randomNumber);
  const result = (flag === 0) ? 'yes' : 'no';
  const question = `Question: ${randomNumber}`;
  return [result, question];
};

export default () => {
  BuildAGame(play, rules);
};
