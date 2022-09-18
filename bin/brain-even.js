/* eslint-disable no-use-before-define */
import readlineSync from 'readline-sync';
import { userName } from '../src/cli.js';

const isEven = (num) => {
  if (num % 2 !== 0) {
    return 'no';
  }
  return 'yes';
};

const checkAnswer = (num, answer) => {
  const correctAnswer = isEven(num);
  if (correctAnswer !== answer) {
    return false;
  }
  return true;
};

const isScore = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let score = 0;
  for (let i = 0; i < 100; i += 1) {
    const randomNum = (Math.floor(Math.random() * 100) + 1);
    console.log(`Question: ${randomNum}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const resultCheck = checkAnswer(randomNum, userAnswer);
    if (resultCheck === false) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${isEven(randomNum)}'.\n Let's try again, ${userName}!`);
      break;
    }
    score += 1;
    console.log('Correct!');
    if (score > 2) {
      console.log(`Congratulations, ${userName}!`);
      break;
    }
  }
};
export default isScore;

isScore();