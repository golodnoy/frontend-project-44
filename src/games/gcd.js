import runGame from '../index.js';
import getDividers from '../dividers.js';
import getRandomIntInclusive from '../util.js';

export const createQuestionGcd = () => {
  const calcTotalDiv = (num1, num2) => {
    function getMaxOfArray(numArray) {
      return Math.max.apply(null, numArray);
    }
    const arrayNum1 = getDividers(num1);
    const arrayNum2 = getDividers(num2);
    const arrayComDividers = [];
    for (let i = 0; i < arrayNum1.length; i += 1) {
      if (arrayNum2.includes(arrayNum1[i])) {
        arrayComDividers.push(arrayNum1[i]);
      }
    }
    const maxDivider = getMaxOfArray(arrayComDividers);
    return maxDivider;
  };
  const firstValue = getRandomIntInclusive(1, 100);
  const secondValue = getRandomIntInclusive(1, 100);
  const question = `${firstValue} ${secondValue}`;
  const correctAnswer = calcTotalDiv(firstValue, secondValue).toString();
  return [question, correctAnswer];
};

export const playGcdGame = () => {
  const rules = ('Find the greatest common divisor of given numbers.');
  runGame(rules, createQuestionGcd);
};
