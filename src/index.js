import readlineSync from 'readline-sync';

function runGame(rules, generateRound) {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(rules);
  for (let i = 0; i < 3; i += 1) {
    const [question, correctAnswer] = generateRound();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if ((typeof (correctAnswer) === 'number' && (correctAnswer !== Number(userAnswer))) || (typeof (correctAnswer) === 'string' && (correctAnswer !== String(userAnswer)))) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\n Let's try again, ${userName}!`);
      return;
    } console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
}

export default runGame;
