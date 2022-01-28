import LayoutOfGame from '../index.js';

const Prime = () => {
  const randomNum = (min, max) => {
    const rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  };
  const isPrime = (num) => {
    let answ = 0;
    if (num === 1) {
      answ = 1;
    }
    for (let i = 2; i < num; i += 1) {
      if (num % i === 0) {
        answ = 1;
        break;
      }
    }
    return answ;
  };
  const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const game5 = () => {
    const random = randomNum(1, 20);
    const randomIsPrime = isPrime(random);
    const result = (randomIsPrime === 0) ? 'yes' : 'no';
    console.log(`Question: ${random}`);
    return result;
  };
  LayoutOfGame(game5, rules);
};
export default Prime;
