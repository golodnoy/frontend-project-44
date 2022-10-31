import runGame from '../index.js';
import getRandomIntInclusive from '../util.js';

const getGcd = (a, b) => (b === 0 ? a : getGcd(b, a % b));
export const createQuestionGcd = () => {
  const firstValue = getRandomIntInclusive(1, 100);
  const secondValue = getRandomIntInclusive(1, 100);
  const question = `${firstValue} ${secondValue}`;
  const correctAnswer = getGcd(firstValue, secondValue).toString();
  return [question, correctAnswer];
};

export const playGcdGame = () => {
  const rule = ('Find the greatest common divisor of given numbers.');
  runGame(rule, createQuestionGcd);
};
