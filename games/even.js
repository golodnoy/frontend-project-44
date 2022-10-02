import { RuleTester } from 'eslint';
import readlineSync from 'readline-sync';
import * as index from '../src/index.js';

const isEven = (num) => {
  if (num % 2 !== 0) {
    return 'no';
  }
  return 'yes';
};

export const defineCorrectAnswer = (question) => {
  //let questionNum = Number(question);
  let correctAnswer = isEven(Number(question));
  console.log(`debug even: ${correctAnswer}`);
  return correctAnswer;
};

export const defineResult = (correctAnswer, userAnswer) => {
  if (correctAnswer !== String(userAnswer)) {
    return false;
  }
  return true;
};

export const createQuestionEven = () => {
  const randomNum = index.isRandom();
  return randomNum;
};

export const isEvenGame = () => {
  const game = 'even';
  index.rulesText('Answer "yes" if the number is even, otherwise answer "no".');
  index.engineGame(game);
};