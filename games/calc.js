import { cons } from '@hexlet/pairs';
import readlineSync from 'readline-sync';
import * as index from '../src/index.js';

function generateString() {
  const characters = '*+-';
  let result = ' ';
  const charactersLength = characters.length;
  result = characters.charAt((Math.random() * charactersLength));
  return result;
}

export const defineCorrectAnswer = (question) => {
  let correctAnswer = Number((eval(question)));
  return correctAnswer;
};

export const defineResult = (correctAnswer, userAnswer) => {
  if (correctAnswer !== Number(userAnswer)) {
    return false;
  }
  return true;
};

export function createQuestionCalc() {
  let randomNum1 = (Math.floor(Math.random() * 100) + 1);
  let randomNum2 = (Math.floor(Math.random() * 100) + 1);
  let char = generateString();
  return (`${randomNum1}${char}${randomNum2}`);
};

export function isCalcGame() {
  const game = 'calc';
  index.rulesText('What is the result of the expression?');
  index.engineGame(game);
};