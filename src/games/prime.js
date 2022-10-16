import * as index from '../index.js';
import getDividers from '../dividers.js';

const checkPrime = (num) => {
  const arrayDividers = getDividers(num);
  if (arrayDividers.length < 3) {
    return 'yes';
  }
  return 'no';
};

export const createQuestionPrime = () => {
  for (let i = 0; i < 3; i += 1) {
    const randomNum = index.isRandom();
    const correctAnswer = checkPrime(randomNum);
    index.questionArray.push([randomNum, correctAnswer]);
  }
};

export const isPrimeGame = () => {
  index.rulesText('Answer "yes" if given number is prime. Otherwise answer "no".');
  createQuestionPrime();
  index.game();
};
