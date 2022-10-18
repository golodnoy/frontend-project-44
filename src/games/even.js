import game from '../index.js';
import getRandomIntInclusive from '../util.js';

export const createQuestionEven = () => {
  const isEven = (num) => {
    if (num % 2 !== 0) {
      return 'no';
    }
    return 'yes';
  };
  const randomNum = getRandomIntInclusive(1, 100);
  let correctAnswer = '';
  correctAnswer = isEven(randomNum);
  return [randomNum, correctAnswer];
};

export const isEvenGame = () => {
  const rules = ('Answer "yes" if the number is even, otherwise answer "no".');
  game(rules, createQuestionEven);
};
