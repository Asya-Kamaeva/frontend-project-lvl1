import BuildAGame from '../index.js';
import chooseRandomNumber from '../utils.js';

const signs = ['+', '-', '*'];
const calculateValue = (sign, a, b) => {
  let result;
  if (sign === '+') {
    result = a + b;
  }
  if (sign === '-') {
    result = a - b;
  }
  if (sign === '*') {
    result = a * b;
  }
  return result;
};
const rules = 'What is the result of the expression?';
const play = () => {
  const number1 = chooseRandomNumber(1, 10);
  const number2 = chooseRandomNumber(1, 10);
  const randomSign = chooseRandomNumber(0, 2);
  const selectedSign = signs[randomSign];
  const result = calculateValue(selectedSign, number1, number2);
  const stringResult = String(result);
  const question = `Question: ${number1} ${selectedSign} ${number2}`;
  return [stringResult, question];
};

export default () => {
  BuildAGame(play, rules);
};
