import readlineSync from 'readline-sync';
import { isRules, isRandom, isQuestion, checkResult, userAnswer } from '../src/index.js';

const characters = '*+-';

function generateString() {
  let result = ' ';
  const charactersLength = characters.length;
  result = characters.charAt(Math.floor(Math.random() * charactersLength));
  return result;
}

const checkAnswerCalc = (num1, num2, char1, userAnswer) => {
  const correctAnswer = eval(`(${num1}${char1}${num2})`);
  if (correctAnswer !== userAnswer) {
    return false;
  }
  return true;
};

function isCalc() {
  isRules('What is the result of the expression?');
  const randomNum1 = isRandom();
  const randomNum2 = isRandom();
  const char = generateString();
  isQuestion(`Question: ${randomNum1}${char}${randomNum2}`);
    // eslint-disable-next-line no-eval
  const resultCheck = checkAnswerCalc(randomNum1, randomNum2, char, userAnswer);
  checkResult(resultCheck, correctAnswer);
};

export default isCalc;