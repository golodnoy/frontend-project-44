import runGame from '../index.js';
import getRandomIntInclusive from '../util.js';

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
};

export const createQuestionPrime = () => {
  const randomNum = getRandomIntInclusive(1, 100);
  const correctAnswer = isPrime(randomNum) ? 'yes' : 'no';
  return [randomNum, correctAnswer];
};

export const playPrimeGame = () => {
  const rules = ('Answer "yes" if given number is prime. Otherwise answer "no".');
  runGame(rules, createQuestionPrime);
};
