import runGame from '../index.js';
import getDividers from '../dividers.js';
import getRandomIntInclusive from '../util.js';

export const createQuestionPrime = () => {
  const checkPrime = (num) => {
    if (num === 1) {
      return 'no';
    }
    const arrayDividers = getDividers(num);
    if (arrayDividers.length < 3) {
      return 'yes';
    }
    return 'no';
  };
  const randomNum = getRandomIntInclusive(1, 100);
  const correctAnswer = checkPrime(randomNum);
  return [randomNum, correctAnswer];
};

export const playPrimeGame = () => {
  const rules = ('Answer "yes" if given number is prime. Otherwise answer "no".');
  runGame(rules, createQuestionPrime);
};
