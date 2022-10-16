import * as index from '../index.js';

const isEven = (num) => {
  if (num % 2 !== 0) {
    return 'no';
  }
  return 'yes';
};

export const createQuestionEven = () => {
  const randomNum = index.isRandom();
  const correctAnswer = isEven(randomNum);
  index.questionArray.push([randomNum, correctAnswer]);
};

export const isEvenGame = () => {
  index.rulesText('Answer "yes" if the number is even, otherwise answer "no".');
  createQuestionEven();
  createQuestionEven();
  createQuestionEven();
  index.game();
};
