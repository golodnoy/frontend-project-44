import game from '../index.js';
import getRandomIntInclusive from '../util.js';

export const createQuestionCalc = () => {
  function generateSign() {
    const characters = '*+-';
    const result = characters.charAt((Math.random() * characters.length));
    return result;
  }
  const calcResult = (num1, num2, char) => {
    let result = 0;
    if (char === '+') {
      result = num1 + num2;
    } else if (char === '-') {
      result = num1 - num2;
    } else (result = num1 * num2);
    return result;
  };
  const firstValue = getRandomIntInclusive(1, 100);
  const secondValue = getRandomIntInclusive(1, 100);
  const sign = generateSign();
  const correctAnswer = calcResult(firstValue, secondValue, sign);
  const question = (`${firstValue} ${sign} ${secondValue}`);
  return [question, correctAnswer];
};

export function isCalcGame() {
  const rules = 'What is the result of the expression?';
  game(rules, createQuestionCalc);
}
