import LayoutOfGame from '../index.js';

const IsItEven = () => {
  const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
  const game1 = () => {
    const randomNumber = Math.floor(Math.random() * 100 + 1);
    console.log(`Question: ${randomNumber}`);
    const isEven = randomNumber % 2 === 0;
    const result = (isEven === true) ? 'yes' : 'no';
    return result;
  };
  LayoutOfGame(game1, rules);
};
export default IsItEven;
