import readlineSync from 'readline-sync';
import getRandomNumber from '../src/randomNumber.js';

function gameProgression() {
  console.log('What number is missing in the progression? ');
  const increment = getRandomNumber(10, 1);
  const array = [];
  let start = getRandomNumber(100, 0);
  const length = getRandomNumber(10, 5);
  for (let i = 0; i < length; i += 1) {
    array.push(start);
    start += increment;
  }
  const hiddenElementIndex = getRandomNumber(array.length - 1);
  const correctAnswer = array[hiddenElementIndex];
  array[hiddenElementIndex] = '..';
  let userAnswer = readlineSync.question(`Question: ${array.join(' ')} `);
  userAnswer = parseInt(userAnswer, 10);

  return { userAnswer, correctAnswer };
}

export default gameProgression;
