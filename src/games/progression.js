import buildAGame from '../index.js';
import chooseRandomNumber from '../utils.js';

const rules = 'What number is missing in the progression?';

const generateProgression = (start, step, length) => {
  const values = [];
  for (let i = 0; values.length < length; i += 1) {
    values.push(start + (step * i));
  }
  return (values);
};

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
  const question = String(stringResultProgression);
  return [stringResult, question];
};

export default () => {
  buildAGame(play, rules);
};
