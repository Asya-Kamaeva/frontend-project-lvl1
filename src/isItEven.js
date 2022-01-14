import readlineSync from 'readline-sync';
// import askName from '/cli.js';

const IsItEven = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let count = 0;
  while (count < 3) {
    const randomNumber = Math.floor(Math.random() * 100 + 1);
    console.log(`Question: ${randomNumber}`);
    const isEven = randomNumber % 2 === 0;
    const correctAnsw = (isEven === true) ? 'yes' : 'no';
    const userAnsw = readlineSync.question('Your answer: ').toLowerCase();
    const boolAnsw = (userAnsw === 'yes') ? true : false;
    if (isEven === boolAnsw) {
      count += 1;
      console.log('Correct!');
    } else {
      console.log(`${userAnsw} is wrong answer ;(. Correct answer was ${correctAnsw}. Let's try again, ${name}!`);
      break;
    }
  }
  if (count === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};
export default IsItEven;
