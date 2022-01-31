import BuildAGame from '../index.js';
import chooseRandomNumber from '../utils.js';

const generateProgression = (start, step, length) => {
  const values = [];
  values.push(start);
  let value = start;
  while (values.length < length) {
    value += step;
    values.push(value);
  }
  return (values);
};
const rules = 'What number is missing in the progression?';
const play = () => {
  const startNumber = chooseRandomNumber(1, 100);
  const stepNumber = chooseRandomNumber(1, 10);
  const numberOfElements = chooseRandomNumber(5, 10);
  const hiddenElement = chooseRandomNumber(1, numberOfElements);
  const resultProgression = generateProgression(startNumber, stepNumber, numberOfElements);
  const result = resultProgression[hiddenElement - 1];
  const stringResult = String(result);
  resultProgression[hiddenElement - 1] = '..';
  const stringResultProgression = resultProgression.join(' ');
  const question = `Question: ${stringResultProgression}`;
  return [stringResult, question];
};

export default () => {
  BuildAGame(play, rules);
};
