import readlineSync from 'readline-sync';
import * as index from '../index.js';

const Calc = () => {
  index.welcome();

  index.rules('What is the result of the expression?');
  const signs = ['+', '-', '*'];
  const randomNum = (arr) => {
    const maxLength = arr.length;
    const sign = Math.random() * maxLength;
    return Math.floor(sign);
  };
  const signAction = (ab, a, b) => {
    let c;
    if (ab === '+') {
      c = a + b;
    }
    if (ab === '-') {
      c = a - b;
    }
    if (ab === '*') {
      c = a * b;
    }
    return c;
  };
  const game2 = () => {
    const number1 = Math.floor(Math.random() * 100 + 1);
    const number2 = Math.floor(Math.random() * 100 + 1);
    const number3 = randomNum(signs);
    const action = signs[number3];
    const result = signAction(action, number1, number2);
    console.log(`Question: ${number1} ${action} ${number2}`);
    const userAnsw = Number(readlineSync.question('Your answer: '));
    return [result, userAnsw];
  };
  index.LayoutOfGame(game2);
};
export default Calc;
