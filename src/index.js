import readlineSync from 'readline-sync';

const LayoutOfGame = (func, str) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(str);
  let count = 0;
  while (count < 3) {
    const result = func();
    const userAnsw = readlineSync.question('Your answer: ');
    if (userAnsw === result) {
      count += 1;
      console.log('Correct!');
    } else {
      console.log(`${userAnsw} is wrong answer ;(. Correct answer was ${result}. Let's try again, ${name}!`);
      break;
    }
  }
  if (count === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};

export default LayoutOfGame;
