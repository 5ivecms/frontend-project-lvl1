#!/usr/bin/env node

import * as engine from '../src/index.js';

const isEven = (number) => {
  if (number % 2 === 0) {
    return true;
  }

  return false;
};

const brainEven = () => {
  const quiz = engine.default;
  const questions = [];
  const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

  for (let i = 0; i < engine.questionsLimit; i += 1) {
    const randomInt = engine.getRandomInt(1, 100);
    const rightAnswer = isEven(randomInt) ? 'yes' : 'no';
    questions.push([`${engine.questionPrefix}${randomInt}`, rightAnswer]);
  }

  quiz([rules, ...questions]);
};

brainEven();
