// eslint-disable-next-line import/no-cycle
import * as index from '../src/index.js';

const isEven = (num) => {
  if (num % 2 !== 0) {
    return 'no';
  }
  return 'yes';
};

export const defineResult = (correctAnswer, userAnswer) => {
  if (correctAnswer !== String(userAnswer)) {
    return false;
  }
  return true;
};

export const createQuestionEven = () => {
  const randomNum = index.isRandom();
  const correctAnswer = isEven(randomNum);
  return [randomNum, correctAnswer];
};

export const isEvenGame = () => {
  const game = 'even';
  index.rulesText('Answer "yes" if the number is even, otherwise answer "no".');
  index.engineGame(game);
};
