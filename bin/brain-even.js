#!/usr/bin/env node

import readlineSync from 'readline-sync';
import lodash from 'lodash';

const brainEven = () => {
  const answerPhraseYes = 'yes';
  const answerPhraseNo = 'no';

  let isFailed = false;
  let countCorrectAnswers = 0;

  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  while (!isFailed && countCorrectAnswers < 3) {
    const numberForQuestion = lodash.random(1, 100);
    const isEven = numberForQuestion % 2 === 0 ? true : false;
    const correctAnswer = isEven ? answerPhraseYes : answerPhraseNo;
    const incorrectAnswer = !isEven ? answerPhraseYes : answerPhraseNo;

    console.log(`Question: ${numberForQuestion}`);
    const answer = readlineSync.question('Your answer: ');

    if (correctAnswer === answer) {
      countCorrectAnswers += 1;
      console.log('Correct!');
    } else {
      isFailed = true;
      console.log(`'${incorrectAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    }
  }

  if (!isFailed) {
    console.log(`Congratulations, ${name}!`);
  }
};

brainEven();
