import readlineSync from 'readline-sync';

import * as messages from './messages.js';

const questionsLimit = 3;
const questionPrefix = 'Question: ';
const operators = ['+', '-', '*'];

const getRandomInt = (min, max) => Math.floor(Math.random() * (max + 1 - min)) + min;
const getRandomOperator = () => operators[getRandomInt(0, operators.length - 1)];
const readName = () => readlineSync.question('May I have your name? ');
const readAnswer = () => readlineSync.question('Your answer: ');

const startQuiz = (data) => {
  messages.welcomeMessage();
  const name = readName();
  messages.helloMessage(name);

  const [rules, ...questions] = data;
  messages.customMessage(rules);

  let isFailed = false;
  for (const [question, rightAnswer] of questions) {
    messages.customMessage(question);
    const answer = readAnswer();
    if (rightAnswer === answer) {
      messages.correctMessage();
    } else {
      isFailed = true;
      messages.answerInfoMessage(answer, rightAnswer);
      messages.letsTryMessage(name);
      break;
    }
  }

  if (!isFailed) {
    messages.congratsMessage(name);
  }
};

export {
  startQuiz as default, questionsLimit, questionPrefix, getRandomInt, getRandomOperator,
};
