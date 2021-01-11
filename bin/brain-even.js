#!/usr/bin/env node

import * as engine from '../src/index.js';

const brainEven = () => {
  const quiz = engine.default;
  const questions = [];
  const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

  for (let i = 0; i < engine.questionsLimit; i += 1) {
    const randomInt = engine.getRandomInt(1, 100);
    const isEven = randomInt % 2 === 0 ? true : false;
    const rightAnswer = isEven ? 'yes' : 'no';
    questions.push([`${engine.questionPrefix}${randomInt}`, rightAnswer]);
  }

  quiz([rules, ...questions]);
};

brainEven();
