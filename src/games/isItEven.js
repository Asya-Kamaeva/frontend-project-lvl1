import readlineSync from 'readline-sync';
import * as index from '../index.js';

const IsItEven = () => {
  index.welcome();
  index.rules('Answer "yes" if the number is even, otherwise answer "no".');
  const game1 = () => {
    const randomNumber = Math.floor(Math.random() * 100 + 1);
    console.log(`Question: ${randomNumber}`);
    const isEven = randomNumber % 2 === 0;
    const result = (isEven === true) ? 'yes' : 'no';
    const userAnsw = readlineSync.question('Your answer: ').toLowerCase();
    return [result, userAnsw];
  };
  index.LayoutOfGame(game1);
};
export default IsItEven;
