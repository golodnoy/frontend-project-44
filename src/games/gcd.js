import runGame from '../index.js';
import getRandomIntInclusive from '../util.js';

const calcTotalDiv = (a, b) => (b === 0 ? a : calcTotalDiv(b, a % b));
export const createQuestionGcd = () => {
  const firstValue = getRandomIntInclusive(1, 100);
  const secondValue = getRandomIntInclusive(1, 100);
  const question = `${firstValue} ${secondValue}`;
  const correctAnswer = calcTotalDiv(firstValue, secondValue).toString();
  return [question, correctAnswer];
};

export const playGcdGame = () => {
  const rules = ('Find the greatest common divisor of given numbers.');
  runGame(rules, createQuestionGcd);
};
