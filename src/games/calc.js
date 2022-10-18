import game from '../index.js';
import getRandomIntInclusive from '../util.js';

function generateSign() {
  const characters = '*+-';
  const charactersLength = characters.length;
  const result = characters.charAt((Math.random() * charactersLength));
  return result;
}

export const createQuestionCalc = () => {
  const calcResult = (num1, num2, char) => {
    let result = 0;
    switch (char) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      default:
        return result;
    } return result;
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
