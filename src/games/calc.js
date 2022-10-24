import runGame from '../index.js';
import getRandomIntInclusive from '../util.js';

const calcResult = (num1, num2, char) => {
  if (char === '+') {
    return num1 + num2;
  } if (char === '-') {
    return num1 - num2;
  }
  return (num1 * num2);
};

export const createQuestionCalc = () => {
  const firstValue = getRandomIntInclusive(1, 100);
  const secondValue = getRandomIntInclusive(1, 100);
  const characters = '*+-';
  const sign = characters.charAt((getRandomIntInclusive(0, 2)));
  const correctAnswer = calcResult(firstValue, secondValue, sign).toString();
  const question = (`${firstValue} ${sign} ${secondValue}`);
  return [question, correctAnswer];
};

export function playCalcGame() {
  const rules = 'What is the result of the expression?';
  runGame(rules, createQuestionCalc);
}
