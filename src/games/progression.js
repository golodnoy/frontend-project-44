import game from '../index.js';
import getRandomIntInclusive from '../util.js';

export const createQuestionProgression = () => {
  let result = getRandomIntInclusive(1, 100);
  const diff = getRandomIntInclusive(1, 10);
  const array = [];
  array.push(result);
  for (let j = 0; j < 10; j += 1) {
    result += diff;
    array.push(result);
  }
  const repNum = getRandomIntInclusive(1, 10);
  const correctAnswer = array[repNum];
  array[repNum] = '..';
  const arrToString = array.join(' ');
  return [arrToString, correctAnswer];
};

export const isProgressionGame = () => {
  const rules = ('What number is missing in the progression?');
  game(rules, createQuestionProgression);
};
