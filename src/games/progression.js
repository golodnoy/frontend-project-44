import * as index from '../index.js';

export const createQuestionProgression = () => {
  for (let i = 0; i < 3; i += 1) {
    let result = index.isRandom();
    const diff = (Math.floor(Math.random() * 10) + 1);
    const array = [];
    array.push(result);
    for (let j = 0; j < 10; j += 1) {
      result += diff;
      array.push(result);
    }
    const repNum = (Math.floor(Math.random() * 10) + 1);
    const correctAnswer = array[repNum];
    array[repNum] = '..';
    const arrToString = array.join(' ');
    index.questionArray.push([arrToString, correctAnswer]);
  }
};

export const isProgressionGame = () => {
  index.rulesText('What number is missing in the progression?');
  createQuestionProgression();
  index.game();
};
