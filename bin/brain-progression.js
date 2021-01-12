#!/usr/bin/env node

import * as engine from '../src/index.js';

const progressionGenerator = (limit) => {
  const result = [];
  const step = engine.getRandomInt(2, 10);
  const start = engine.getRandomInt(2, 50);

  let current = start;
  result.push(current);
  for (let i = 1; i < limit; i += 1) {
    current = (result[i - 1] + step);
    result.push(current);
  }

  return result;
};

const brainProgression = () => {
  const quiz = engine.default;
  const questions = [];
  const rules = 'What number is missing in the progression?';
  const numbersLimit = 10;

  for (let i = 0; i < engine.questionsLimit; i += 1) {
    const progression = progressionGenerator(numbersLimit);
    const missingNumberIndex = engine.getRandomInt(0, progression.length - 1);
    const missingNUmber = progression[missingNumberIndex];

    progression[missingNumberIndex] = '..';
    const progressionString = progression.join(' ');
    const question = `${progressionString}`;

    questions.push([`${engine.questionPrefix}${question}`, String(missingNUmber),
    ]);
  }

  quiz([rules, ...questions]);
};

brainProgression();
