import readlineSync from 'readline-sync';

export default (game, description) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(description);
  const maxRound = 3;
  for (let round = 0; round < maxRound; round += 1) {
    const [result, task] = game();
    console.log(`Question: ${task}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== result) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${result}. Let's try again, ${name}!`);
      return;
    }
    if (userAnswer === result) {
      console.log('Correct!');
    }
    if (round === maxRound - 1) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};
