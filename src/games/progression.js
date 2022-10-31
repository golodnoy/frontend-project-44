import runGame from '../index.js';
import getRandomIntInclusive from '../util.js';

const lengthProgression = 10;

const createProgression = (first, step, length) => {
  let result = first;
  const array = [];
  array.push(first);
  for (let i = 0; i < length; i += 1) {
    result += step;
    array.push(result);
  }
  return array;
};

export const createQuestionProgression = () => {
  const first = getRandomIntInclusive(1, 100);
  const step = getRandomIntInclusive(1, lengthProgression);
  const progression = createProgression(first, step, lengthProgression);
  const replaceElement = getRandomIntInclusive(1, lengthProgression);
  const correctAnswer = progression[replaceElement].toString();
  progression[replaceElement] = '..';
  const question = progression.join(' ');
  return [question, correctAnswer];
};

export const playProgressionGame = () => {
  const rule = ('What number is missing in the progression?');
  runGame(rule, createQuestionProgression);
};
