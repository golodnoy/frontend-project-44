import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

export const userName = readlineSync.question('May I have your name?');
export const alertUser = console.log(`Hello, ${userName}!`);

export default userName;
