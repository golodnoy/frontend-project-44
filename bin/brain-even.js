/* eslint-disable no-use-before-define */
import readlineSync from 'readline-sync';
import { userName } from '../src/cli.js';

isScorer();

function isScorer () {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let score = 0;
  for (let i = 0; i < 100; i += 1) {
    if (score < 3) {
      const randomNum = readlineSync.question(`Question: ${(Math.floor(Math.random() * 100) + 1)}`);
      const userAnswer = readlineSync.question('Your answer: ');
      const checkAnswer = (num, answer) => {
        const isEven = (nuv) => {
          if (nuv % 2 === 0) {
            return 'yes';
          }
          return 'no';
        };
        const correctAnswer = isEven(num);
        if (correctAnswer !== answer) {
          console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.\n Let's try again, ${userName}!`);
        } else {
          return true;
        }
      };
      const resultCheck = checkAnswer(randomNum, userAnswer);
      if (resultCheck !== true) {
        return resultCheck;
        break;
      }
      score += 1;
      console.log(`Correct! Your score ${score}`);
    }
  }
  console.log(`Congratulations, ${userName}!`);
}

export default isScorer;
