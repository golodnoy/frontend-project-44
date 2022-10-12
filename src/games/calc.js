// eslint-disable-next-line import/no-cycle
import * as index from '../index.js';

function generateSign() {
  const characters = '*+-';
  let result = ' ';
  const charactersLength = characters.length;
  result = characters.charAt((Math.random() * charactersLength));
  return result;
}

export const defineResult = (correctAnswer, userAnswer) => {
  if (correctAnswer !== Number(userAnswer)) {
    return false;
  }
  return true;
};

export const calcResult = (num1, num2, char) => {
  let result = 0;
  if (char === '+') {
    result = num1 + num2;
  } else if (char === '-') {
    result = num1 - num2;
  } else (result = num1 * num2);
  return result;
};

export function createQuestionCalc() {
  const firstValue = (Math.floor(Math.random() * 100) + 1);
  const secondValue = (Math.floor(Math.random() * 100) + 1);
  const sign = generateSign();
  const correctAnswer = calcResult(firstValue, secondValue, sign);
  const question = (`${firstValue} ${sign} ${secondValue}`);
  return [question, correctAnswer];
}

export function isCalcGame() {
  const game = 'calc';
  index.rulesText('What is the result of the expression?');
  index.engineGame(game);
}
