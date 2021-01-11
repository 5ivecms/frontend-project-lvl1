#!/usr/bin/env node

import * as engine from '../src/index.js';

const sum = (a, b) => a + b;
const diff = (a, b) => a - b;
const multi = (a, b) => a * b;

const brainCalc = () => {
  const quiz = engine.default;
  const questions = [];
  const rules = 'What is the result of the expression?';

  for (let i = 0; i < engine.questionsLimit; i += 1) {
    let rightAnswer;
    const num1 = engine.getRandomInt(1, 30);
    const num2 = engine.getRandomInt(1, 30);
    const operator = engine.getRandomOperator();
    switch (operator) {
      case '+':
        rightAnswer = sum(num1, num2);
        break;
      case '-':
        rightAnswer = diff(num1, num2);
        break;
      case '*':
        rightAnswer = multi(num1, num2);
        break;
      default:
        rightAnswer = 0;
    }
    const question = `${engine.questionPrefix}${num1} ${operator} ${num2}`;
    questions.push([`${engine.questionPrefix}${question}`, String(rightAnswer)]);
  }

  quiz([rules, ...questions]);
};

brainCalc();
