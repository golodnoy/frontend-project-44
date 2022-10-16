import * as index from '../index.js';

function generateSign() {
  const characters = '*+-';
  let result = ' ';
  const charactersLength = characters.length;
  result = characters.charAt((Math.random() * charactersLength));
  return result;
}

export const calcResult = (num1, num2, char) => {
  let result = 0;
  if (char === '+') {
    result = num1 + num2;
  } else if (char === '-') {
    result = num1 - num2;
  } else (result = num1 * num2);
  return result;
};

export const createQuestionCalc = () => {
  const firstValue = (Math.floor(Math.random() * 100) + 1);
  const secondValue = (Math.floor(Math.random() * 100) + 1);
  const sign = generateSign();
  const correctAnswer = calcResult(firstValue, secondValue, sign);
  const question = (`${firstValue} ${sign} ${secondValue}`);
  index.questionArray.push([question, correctAnswer]);
};

export function isCalcGame() {
  index.rulesText('What is the result of the expression?');
  createQuestionCalc();
  createQuestionCalc();
  createQuestionCalc();
  index.game();
}
