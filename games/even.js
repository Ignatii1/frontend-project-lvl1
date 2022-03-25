import readlineSync from 'readline-sync';
import getRandomNumber from '../src/randomNumber.js';
import greeting from '../src/cli.js';

const name = greeting();

const isEven = (num) => num % 2 === 0;

function gameEven() {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let correctAnswerCount = 0;
  for (let i = 0; i < 3; i += 1) {
    const randomNumber = getRandomNumber(100);
    const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';
    const answer = readlineSync.question(`Question: ${randomNumber}  `);
    if (answer.toLowerCase() === correctAnswer) {
      correctAnswerCount += 1;
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    if (correctAnswerCount === 3) {
      console.log(`Congratulations, ${name}!`);
    }
  }
}

export default gameEven;
