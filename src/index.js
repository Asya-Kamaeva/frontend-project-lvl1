import readlineSync from 'readline-sync';

export default (game, text) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(text);
  for (let round = 1; round <= 3; round += 1) {
    const [result, task] = game();
    console.log(task);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === result) {
      console.log('Correct!');
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${result}. Let's try again, ${name}!`);
      break;
    }
    if (round === 3) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};
