import { RuleTester } from 'eslint';
import readlineSync from 'readline-sync';
import isRandom, question, checkResult, rulesText, userAnswer, userName  from '../src/index.js';

const isEven = (num) => {
  if (num % 2 !== 0) {
    return 'no';
  }
  return 'yes';
};

const checkAnswerEven = (num, answer) => {
  let correctAnswer = isEven(num);
  if (correctAnswer !== answer) {
    return false;
  }
  return true;
};

export const isEvenGame = () => {
  rulesText('Answer "yes" if the number is even, otherwise answer "no".');
  const randomNum = isRandom();
  question(`Question: ${randomNum}`);

  const resultEven = checkAnswerEven(randomNum, userAnswer);
  checkResult(resultEven);
};