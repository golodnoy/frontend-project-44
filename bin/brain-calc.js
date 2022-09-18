/* eslint-disable no-use-before-define */
import readlineSync from 'readline-sync';
import { userName } from '../src/cli.js';

console.log('What is the result of the expression?');

const characters = '*+-';

function generateString() {
  let result = ' ';
  const charactersLength = characters.length;
  result = characters.charAt(Math.floor(Math.random() * charactersLength));
  return result;
}

function isCalc() {
  let score = 0;
  for (let i = 0; i < 100; i += 1) {
    const randomNum1 = (Math.floor(Math.random() * 100) + 1);
    const randomNum2 = (Math.floor(Math.random() * 100) + 1);
    const char = generateString();
    console.log(`Question: ${randomNum1}${char}${randomNum2}`);
    const userAnswer = readlineSync.question('Your answer: ');
    // eslint-disable-next-line no-eval
    const correctAnS = eval(`(${randomNum1}${char}${randomNum2})`);
    if (correctAnS !== Number(userAnswer)) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnS}'.\n Let's try again, ${userName}!`);
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

isCalc();