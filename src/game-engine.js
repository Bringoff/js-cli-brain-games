import readlineSync from 'readline-sync';

const startGame = (getGameDescription, generateGameStepData, attemptCount = 3) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  const performGameCycle = (remainingAttemptCount) => {
    if (remainingAttemptCount === 0) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }
    const { question, answer } = generateGameStepData();
    console.log(`Question: ${question}`);

    const userAnswer = readlineSync.question('Your answer: ').trim();
    const isAnswerCorrect = (userAnswer === answer);

    if (!isAnswerCorrect) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${answer}"`);
      return;
    }
    console.log('Correct!');
    performGameCycle(remainingAttemptCount - 1);
  };

  console.log(getGameDescription);
  performGameCycle(attemptCount);
};

export default startGame;
