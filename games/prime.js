import readlineSync from 'readline-sync';
import getRandomNumber from '../src/randomNumber.js';


function gamePrime() {
    console.log("start")
    function isPrime(n) {
        if (n <= 1) {
            return false;
        }
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) {
                return false;
            }
        }
        return true;
    }
    const number = getRandomNumber(100);
    const correctAnswer = isPrime(number) ? 'yes' : 'no';
    console.log('Answer "yes" if given number is prime. Otherwise answer "no".')

    let userAnswer = readlineSync.question(`Question: ${number} `);

    return { userAnswer, correctAnswer };
}

export default gamePrime;