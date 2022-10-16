import readlineSync from 'readline-sync';
import { userName } from './cli.js';

export const rulesText = (str) => {
  console.log(str);
};

export const questionArray = [];

export const isRandom = () => (Math.floor(Math.random() * 100) + 1);

export const FinishGame = () => {
  console.log(`Congratulations, ${userName}!`);
};

function checkResult(arr) {
  const correctAnswer = arr[1];
  const userAnswer = arr[0];
  const userAnswerString = String(userAnswer);
  const userAnswerNum = Number(userAnswer);
  let answer = Boolean;
  if (typeof (correctAnswer) === 'number') {
    answer = (correctAnswer === userAnswerNum);
  }
  if (typeof (correctAnswer) === 'string') {
    answer = (correctAnswer === userAnswerString);
  }
  return answer;
}

const RoundGame = () => {
  const questionRound = questionArray[0][0];
  const correctAnswer = questionArray[0][1];
  console.log(`Question: ${questionRound}`);
  const userAnswer = readlineSync.question('Your answer: ');
  const resulRound = checkResult([userAnswer, correctAnswer]);
  console.log(`результат проверки ${resulRound}`);
  if (resulRound !== true) {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\n Let's try again, ${userName}!`);
    return resulRound;
  }
  questionArray.shift();
  console.log('Correct!');
  return resulRound;
};

export function game() {
  let score = 0;
  for (let i = 0; i < 3; i += 1) {
    if (RoundGame() !== true) {
      break;
    } score += 1;
    if (score > 2) {
      FinishGame();
    }
  }
}
