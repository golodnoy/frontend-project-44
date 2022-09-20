import { RuleTester } from 'eslint';
import readlineSync from 'readline-sync';
import { } from '../src/index.js';

const isEven = (num) => {
  if (num % 2 !== 0) {
    return 'no';
  }
  return 'yes';
};

const checkAnswerEven = (num, answer) => {
  const correctAnswer = isEven(num);
  if (correctAnswer !== answer) {
    return false;
  }
  return true;
};

const isEvenGame = () => {
  isRules('Answer "yes" if the number is even, otherwise answer "no".');
  const randomNum = isRandom();
  isQuestion(`Question: ${randomNum}`);
  const resultCheck = checkAnswerEven(randomNum, userAnswer);
  checkResult(resultCheck, correctAnswer);
};

export default isEvenGame;