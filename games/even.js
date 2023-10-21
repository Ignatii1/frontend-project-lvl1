import readlineSync from 'readline-sync';
import getRandomNumber from '../src/randomNumber.js';

function gameEven() {
  const isEven = (num) => num % 2 === 0;
  const randomNumber = getRandomNumber(100);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const userAnswer = readlineSync.question(`Question: ${randomNumber} `);
  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';
  return { userAnswer, correctAnswer };
}

export default gameEven;
