import * as index from '../index.js';

function getMaxOfArray(numArray) {
  return Math.max.apply(null, numArray);
}

export const getDividers = (num) => {
  const array = [];
  for (let i = 0; i <= num; i += 1) {
    if (num % i === 0) {
      array.push(i);
    }
  }
  return array;
};

export const calcTotalDiv = (num1, num2) => {
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

export const createQuestionGcd = () => {
  const firstValue = (Math.floor(Math.random() * 100) + 1);
  const secondValue = (Math.floor(Math.random() * 100) + 1);
  const question = `${firstValue} ${secondValue}`;
  const correctAnswer = calcTotalDiv(firstValue, secondValue);
  index.questionArray.push([question, correctAnswer]);
};

export const isGcdGame = () => {
  index.rulesText('Find the greatest common divisor of given numbers.');
  createQuestionGcd();
  createQuestionGcd();
  createQuestionGcd();
  index.game();
};
