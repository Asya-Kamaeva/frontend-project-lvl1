import LayoutOfGame from '../index.js';

const Calc = () => {
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
  const rules = 'What is the result of the expression?';
  const game2 = () => {
    const number1 = Math.floor(Math.random() * 10 + 1);
    const number2 = Math.floor(Math.random() * 10 + 1);
    const number3 = randomNum(signs);
    const action = signs[number3];
    const result = signAction(action, number1, number2);
    const resultStr = String(result);
    console.log(`Question: ${number1} ${action} ${number2}`);
    return resultStr;
  };
  LayoutOfGame(game2, rules);
};
export default Calc;
