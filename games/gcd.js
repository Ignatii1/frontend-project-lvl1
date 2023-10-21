import readlineSync from 'readline-sync';
import getRandomNumber from '../src/randomNumber.js';


function gameGcd() {
    const firstNumber = getRandomNumber(100);
    const secondNumber = getRandomNumber(100);
    console.log("Find the greatest common divisor of given numbers. ")
    let userAnswer = readlineSync.question(`Question: ${firstNumber} ${secondNumber} `);
    userAnswer = parseInt(userAnswer, 10);
    function gcd(a, b) {
        if (b === 0) {
            return a;
        }
        return gcd(b, a % b);
    }
    const correctAnswer = gcd(firstNumber, secondNumber);
    return { userAnswer, correctAnswer };
}

export default gameGcd;