import readlineSync from 'readline-sync';
import { } from '../src/cli.js';

console.log('Answer "yes" if the number is even, otherwise answer "no".');

const randomNum = readlineSync.question('Question: '+(Math.floor(Math.random() * 100) + 1));

const answer = readlineSync.question('Your answer: ');
