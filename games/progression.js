// eslint-disable-next-line import/no-cycle
import * as index from '../src/index.js';

export const createQuestionProgression = () => {
  let result = index.isRandom();
  const diff = (Math.floor(Math.random() * 10) + 1);
  const array = [];
  array.push(result);
  for (let i = 0; i < 10; i += 1) {
    result += diff;
    array.push(result);
  }
  const repNum = (Math.floor(Math.random() * 10) + 1);
  const correctAnswer = array[repNum];
  array[repNum] = '..';
  return [array, correctAnswer];
};

export const defineResult = (correctAnswer, userAnswer) => {
  if (correctAnswer !== Number(userAnswer)) {
    return false;
  }
  return true;
};

export const isProgressionGame = () => {
  const game = 'progression';
  index.rulesText('What number is missing in the progression?');
  index.engineGame(game);
};
