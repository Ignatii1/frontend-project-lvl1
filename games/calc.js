import readlineSync from 'readline-sync';
import getRandomNumber from '../src/randomNumber.js';

function gameCalc() {
  const firstNumber = getRandomNumber(100);
  const secondNumber = getRandomNumber(100);
  const operators = ['*', '+', '-'];
  const randomOperator = operators[Math.floor(Math.random() * operators.length)];
  let userAnswer = readlineSync.question(`What is the result of the expression? ${firstNumber} ${randomOperator} ${secondNumber} `);
  let correctAnswer;
  switch (randomOperator) {
    case '*':
      correctAnswer = firstNumber * secondNumber;
      break;
    case '-':
      correctAnswer = firstNumber - secondNumber;
      break;
    case '+':
      correctAnswer = firstNumber + secondNumber;
      break;
    default:
      console.log('Invalid operator');
      process.exit();
  }
  userAnswer = parseInt(userAnswer, 10);
  return { userAnswer, correctAnswer };
}

export default gameCalc;
