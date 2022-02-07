import buildAGame from '../index.js';
import chooseRandomNumber from '../utils.js';

const rules = 'What is the result of the expression?';
const signs = ['+', '-', '*'];
const calculateValue = (sign, a, b) => {
  let result;
  switch (sign) {
    case '+':
      result = a + b;
      break;
    case '-':
      result = a - b;
      break;
    case '*':
      result = a * b;
      break;
    default:
      throw new Error(`operation ${sign} is not supported`);
  }
  return result;
};
const play = () => {
  const number1 = chooseRandomNumber(1, 10);
  const number2 = chooseRandomNumber(1, 10);
  const randomSign = chooseRandomNumber(0, 2);
  const selectedSign = signs[randomSign];
  const result = calculateValue(selectedSign, number1, number2);
  const stringResult = String(result);
  const question = `${number1} ${selectedSign} ${number2}`;
  return [stringResult, question];
};

export default () => {
  buildAGame(play, rules);
};
