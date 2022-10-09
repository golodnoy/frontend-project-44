// eslint-disable-next-line no-unused-vars
import readlineSync, { question } from 'readline-sync';
// eslint-disable-next-line import/no-cycle
import * as calc from '../games/calc.js';
// eslint-disable-next-line import/no-cycle
import * as even from '../games/even.js';
// eslint-disable-next-line import/no-cycle
import * as gcd from '../games/gcd.js';

console.log('Welcome to the Brain Games!');

export const userName = readlineSync.question('May I have your name? ');
export const alertUser = console.log(`Hello, ${userName}!`);
export const rulesText = (str) => {
  console.log(str);
};
export const isRandom = () => (Math.floor(Math.random() * 100) + 1);

export const getQuestion = (game) => {
  let questionArray = [];
  if (game === 'calc') {
    questionArray = calc.createQuestionCalc();
  } if (game === 'even') {
    questionArray = even.createQuestionEven();
  } if (game === 'gcd') {
    questionArray = gcd.createQuestionGcd();
  }
  return questionArray;
};

export const getCheckresult = (game, userAnswer, correctAnswer) => {
  const questionAnswer = correctAnswer;
  let result = Boolean;
  if (game === 'calc') {
    result = calc.defineResult(questionAnswer, userAnswer);
  } if (game === 'even') {
    result = even.defineResult(questionAnswer, userAnswer);
  } if (game === 'gcd') {
    result = gcd.defineResult(questionAnswer, userAnswer);
  }
  return result;
};

export function engineGame(game) {
  let score = 0;

  for (let i = 0; i < 100; i += 1) {
    const questionArray = getQuestion(game);
    const questionRound = questionArray[0];
    const correctAnswer = questionArray[1];
    console.log(`Question: ${questionRound}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const resultRound = getCheckresult(game, userAnswer, correctAnswer);
    if (resultRound === false) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\n Let's try again, ${userName}!`);
      break;
    }
    score += 1;
    console.log('Correct!');
    if (score > 2) {
      console.log(`Congratulations, ${userName}!`);
      break;
    }
  }
}
