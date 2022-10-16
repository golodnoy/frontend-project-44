import * as index from '../index.js';

export const isEven = (num) => {
  if (num % 2 !== 0) {
    return 'no';
  }
  return 'yes';
};

const createQuestion = () => {
  for (let i = 0; i < 3; i += 1) {
    const randomNum = index.isRandom();
    let correctAnswer = '';
    correctAnswer = isEven(randomNum);
    index.questionArray.push([randomNum, correctAnswer]);
  }
};

export const isEvenGame = () => {
  index.rulesText('Answer "yes" if the number is even, otherwise answer "no".');
  createQuestion();
  index.game();
};
