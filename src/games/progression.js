import runGame from '../index.js';
import getRandomIntInclusive from '../util.js';

const generateProgression = (num1, num2) => {
  let result = num1;
  const array = [];
  array.push(num1);
  for (let i = 0; i < 10; i += 1) {
    result += num2;
    array.push(result);
  }
  return array;
};

export const createQuestionProgression = () => {
  const firstNum = getRandomIntInclusive(1, 100);
  const diff = getRandomIntInclusive(1, 10);
  const arr = generateProgression(firstNum, diff);
  const repNum = getRandomIntInclusive(1, 10);
  const correctAnswer = arr[repNum];
  arr[repNum] = '..';
  const arrToString = arr.join(' ');
  return [arrToString, correctAnswer];
};

export const playProgressionGame = () => {
  const rules = ('What number is missing in the progression?');
  runGame(rules, createQuestionProgression);
};
