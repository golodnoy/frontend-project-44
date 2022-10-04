// eslint-disable-next-line import/no-cycle
import * as index from '../src/index.js';

export const createQuestionGcd = () => {
    const firstValue = (Math.floor(Math.random() * 100) + 1);
    const secondValue = (Math.floor(Math.random() * 100) + 1);
    const question = `${firstValue} ${secondValue}`;
    const correctAnswer = 0;
    return [question, correctAnswer];
  };

  export const calcTotalDiv = (num1, num2) => { 
    let result = 0;



    return result;
  }


export const isGcdGame = () => {
     const game = 'gcd';
    index.rulesText('Find the greatest common divisor of given numbers.');
    index.engineGame(game);
};