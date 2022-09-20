import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

export const userName = readlineSync.question('May I have your name? ');
export const alertUser = console.log(`Hello, ${userName}!`);

function isEngine () { 

  const isRules = (str) => { 
    console.log(str)
  }; 

  let score = 0;
  for (let i = 0; i < 100; i += 1) {

    const isRandom = () => {
      const num = (Math.floor(Math.random() * 100) + 1);
      return num;
    };

    const isQuestion = (str) => { 
      console.log(str);
  }
    const userAnswer = readlineSync.question('Your answer: ');

const checkResult = (result, correctAnswer) => {
     if (result === false) {
     console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\n Let's try again, ${userName}!`);
        //break;
     }
    };
    score += 1;
    console.log('Correct!');
    if (score > 2) {
      console.log(`Congratulations, ${userName}!`);
      break;
 }
}
};

export default isEngine;
