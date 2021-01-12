#!/usr/bin/env node

import * as engine from '../src/index.js';

const isPrime = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

const brainPrime = () => {
  const quiz = engine.default;
  const questions = [];
  const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  for (let i = 0; i < engine.questionsLimit; i += 1) {
    const number = engine.getRandomInt(2, 20);
    const rightAnswer = isPrime(number) ? 'yes' : 'no';
    const question = `${number}`;

    questions.push([`${engine.questionPrefix}${question}`, rightAnswer]);
  }

  quiz([rules, ...questions]);
};

brainPrime();
