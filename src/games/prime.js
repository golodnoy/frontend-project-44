import * as index from '../index.js';

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

export const createQuestionPrime = () => {
  for (let i = 0; i < 3; i += 1) {
    const randomNum = index.isRandom();
    const correctAnswer = isPrime(randomNum);
    index.questionArray.push([randomNum, correctAnswer]);
  }
};

export const isPrimeGame = () => {
  index.rulesText('Answer "yes" if given number is prime. Otherwise answer "no".');
  createQuestionPrime();
  index.game();
};
