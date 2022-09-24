import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

export const userName = readlineSync.question('May I have your name? ');
export const alertUser = console.log(`Hello, ${userName}!`);
export const rulesText = (str) => {
  console.log(str);
};
export const isRandom = () => {
  const num = (Math.floor(Math.random() * 100) + 1);
  return num;
};

export const question = (str) => {
  console.log(str);
};

export const checkResult = (result) => {
  if (result === false) {
    return false;
  }
  return result;
};

const isEngine = () => {
  let score = 0;
  for (let i = 0; i < 100; i += 1) {
    question();
    let userAnswer = readlineSync.question('Your answer: ');
    checkResult();
    if (checkResult === false) {
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

export { isEngine };
