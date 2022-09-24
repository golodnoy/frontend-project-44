import readlineSync from 'readline-sync';
import {
  isRandom, question, checkResult, rulesText 
} from '../src/index.js';

const characters = '*+-';

function generateString() {
  let result = ' ';
  const charactersLength = characters.length;
  result = characters.charAt((Math.random() * charactersLength));
  return result;
}

const checkAnswerCalc = (num1, num2, char1, userAnswer) => {
  let correctAnswer = eval(`(${num1}${char1}${num2})`);
  if (correctAnswer !== userAnswer) {
    return false;
  }
  return true;
};

function isCalcGame() {
  rulesText('What is the result of the expression?');
  let randomNum1 = isRandom();
  let randomNum2 = isRandom();
  let char = generateString();
  question(`Question: ${randomNum1}${char}${randomNum2}`);
  const userAnswer = readlineSync.question('Your answer: ');
  // eslint-disable-next-line no-eval
  const resultCalc = checkAnswerCalc(randomNum1, randomNum2, char, userAnswer);
  checkResult(resultCalc);
};

export { isCalcGame };