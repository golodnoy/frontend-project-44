import runGame from '../index.js';
import getRandomIntInclusive from '../util.js';

const isEven = (num) => num % 2 === 0;

export const createQuestionEven = () => {
  const randomNum = getRandomIntInclusive(1, 100);
  const correctAnswer = isEven(randomNum) ? 'yes' : 'no';
  return [randomNum, correctAnswer];
};

export const playEvenGame = () => {
  const rules = ('Answer "yes" if the number is even, otherwise answer "no".');
  runGame(rules, createQuestionEven);
};
