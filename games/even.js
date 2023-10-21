import readlineSync from 'readline-sync';
import getRandomNumber from '../src/randomNumber.js';


function gameEven() {
  const isEven = (num) => num % 2 === 0;
  const randomNumber = getRandomNumber(100);
  const userAnswer = readlineSync.question(`Is this number even: ${randomNumber} `);
  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';
  return { userAnswer, correctAnswer };
}

export default gameEven;
