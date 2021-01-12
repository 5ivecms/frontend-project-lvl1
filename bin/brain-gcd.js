#!/usr/bin/env node

import * as engine from '../src/index.js';

const findGreatestCommonDivisior = (a, b) => {
  let devisior = 1;
  for (let i = 1; i <= a || i <= b; i += 1) {
    if (a % i === 0 && b % i === 0) {
      devisior = i;
    }
  }

  return devisior;
};

const brainGcd = () => {
  const quiz = engine.default;
  const questions = [];
  const rules = 'Find the greatest common divisor of given numbers.';

  for (let i = 0; i < engine.questionsLimit; i += 1) {
    const num1 = engine.getRandomInt(2, 50);
    const num2 = engine.getRandomInt(2, 50);
    const rightAnswer = findGreatestCommonDivisior(num1, num2);

    const question = `${num1} ${num2}`;
    questions.push([`${engine.questionPrefix}${question}`, String(rightAnswer),
    ]);
  }

  quiz([rules, ...questions]);
};

brainGcd();
