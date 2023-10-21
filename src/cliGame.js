import readlineSync from 'readline-sync';

const cliGame = (gameFunc) => {
  const askQuestion = gameFunc;

  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);

  let correctAnswerCount = 0;

  for (let i = 0; i < 3; i++) {
    const { userAnswer, correctAnswer } = askQuestion();


    if (userAnswer === correctAnswer) {
      correctAnswerCount += 1;
      console.log('Correct!');
    } else {
      console.log(`${userAnswer} is wrong answer =(. Correct answer was ${correctAnswer}`);
      console.log(`Let's try again, ${name}!`);
      process.exit();
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default cliGame;
