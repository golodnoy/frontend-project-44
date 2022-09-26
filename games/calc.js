import { cons } from '@hexlet/pairs';
import readlineSync from 'readline-sync';
import * as index from '../src/index.js';

function generateString() {
  const characters = '*+-';
  let result = ' ';
  const charactersLength = characters.length;
  result = characters.charAt((Math.random() * charactersLength));
  return result;
}

const checkAnswerCalc = (num1, num2, char1, userAnswer) => {
  const correctAnswer = Number(eval(`(${num1}${char1}${num2})`));
  console.log(`cor answ ${correctAnswer}`);
  if (correctAnswer !== Number(userAnswer)) {
    return false;
  }
  return true;
};

function isCalcGame() {
  index.rulesText('What is the result of the expression?');
  let randomNum1 = index.isRandom();
  let randomNum2 = index.isRandom();
  let char = generateString();
  index.question(`Question: ${randomNum1}${char}${randomNum2}`);
  const userAnswer = readlineSync.question('Your answer: ');
  console.log(`usr answ ${userAnswer}`);
  const resultCalc = checkAnswerCalc(randomNum1, randomNum2, char, userAnswer);
  console.log(`result calc:${resultCalc}`);
  index.checkResult(resultCalc);
  //index.viewBugs(userAnswer, correctAnswer);
  // eslint-disable-next-line no-eval
};

export {isCalcGame};