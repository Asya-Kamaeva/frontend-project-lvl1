import readlineSync from 'readline-sync';

export const name = readlineSync.question('May I have your name? ');
export const welcome = () => {
  console.log('Welcome to the Brain Games!');
  console.log(`Hello, ${name}!`);
};

export const rules = (string) => {
  console.log(string);
};

export const LayoutOfGame = (func) => {
  let count = 0;
  while (count < 3) {
    const [result, userAnsw] = func();
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
