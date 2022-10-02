import readlineSync, { question } from 'readline-sync';
import * as calc from '../games/calc.js';
import * as even from '../games/even.js';

console.log('Welcome to the Brain Games!');

export const userName = readlineSync.question('May I have your name? ');
export const alertUser = console.log(`Hello, ${userName}!`);
export const rulesText = (str) => {
  console.log(str);
};
export const isRandom = () => (Math.floor(Math.random() * 100) + 1);

export const getQuestion = (game) => {
  let question = '';
  if (game === 'calc') {
    question = calc.createQuestionCalc();
  } else if (game === 'even') {
    question = even.createQuestionEven();
  }
  return question;
};
export const getCorrectAnswer = (game, question) => {
  if (game === 'calc') {
    return calc.defineCorrectAnswer(question);
  } if (game === 'even') {
    return even.defineCorrectAnswer(question);
  }
};

export const getCheckresult = (game, userAnswer, question) => {
  const correctAnswer = getCorrectAnswer(game, question);
  console.log(`cor answ ${correctAnswer}`);
  if (game === 'calc') {
    return calc.defineResult(correctAnswer, userAnswer);
  } if (game === 'even') {
    return even.defineResult(correctAnswer, userAnswer);
  }
};

export function engineGame(game) {
  let score = 0;

  for (let i = 0; i < 100; i += 1) {
    let question = getQuestion(game);
    console.log(`Question: ${question}`);
    let userAnswer = readlineSync.question('Your answer: ');
    let result = getCheckresult(game, userAnswer, question);
    let correctAnswer = getCorrectAnswer(game, question);
    console.log(result);
    if (result === false) {
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
};