#!/usr/bin/env node

import * as engine from '../src/index.js';

const brainCalc = () => {
  const quiz = engine.default;
  const questions = [];
  const rules = 'What is the result of the expression?';

  for (let i = 0; i < engine.questionsLimit; i += 1) {
    const num1 = engine.getRandomInt(1, 30);
    const num2 = engine.getRandomInt(1, 30);
    const operator = engine.getRandomOperator();
    const rightAnswer = num1 + operator + num2;
    const question = `${engine.questionPrefix}${num1} ${operator} ${num2}`;
    questions.push([`${engine.questionPrefix}${question}`, rightAnswer]);
  }

  quiz([rules, ...questions]);
};

brainCalc();
