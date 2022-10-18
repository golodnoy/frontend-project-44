import readlineSync from 'readline-sync';

function game(rules, roundfunction) {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(rules);
  let score = 0;
  for (let i = 0; i < 3; i += 1) {
    const questionArray = roundfunction();
    const questionRound = questionArray[0];
    const correctAnswer = questionArray[1];
    console.log(`Question: ${questionRound}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (typeof (correctAnswer) === 'number' && correctAnswer !== Number(userAnswer)) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\n Let's try again, ${userName}!`);
      break;
    } if (typeof (correctAnswer) === 'string' && (correctAnswer !== String(userAnswer))) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\n Let's try again, ${userName}!`);
      break;
    } console.log('Correct!');
    score += 1;
    if (score > 2) { //
      console.log(`Congratulations, ${userName}!`);
    }//
  }
}

export default game;
