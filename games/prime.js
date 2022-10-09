// eslint-disable-next-line import/no-cycle
import * as index from '../src/index.js';

const isPrime = (num) => {
  const arrayDividers = [];
  for (let i = 0; i <= num; i += 1) {
    if (num % i === 0) {
      arrayDividers.push(i);
    }
  }
  if (arrayDividers.length < 3) {
    return 'yes';
  }
  return 'no';
};

export const defineResult = (correctAnswer, userAnswer) => {
  if (correctAnswer !== String(userAnswer)) {
    return false;
  }
  return true;
};

export const createQuestionPrime = () => {
  const randomNum = index.isRandom();
  const correctAnswer = isPrime(randomNum);
  return [randomNum, correctAnswer];
};

export const isPrimeGame = () => {
  const game = 'prime';
  index.rulesText('Answer "yes" if given number is prime. Otherwise answer "no".');
  index.engineGame(game);
};
