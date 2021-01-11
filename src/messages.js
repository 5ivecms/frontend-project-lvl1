const welcomeMessage = () => {
  console.log('Welcome to the Brain Games!');
};

const helloMessage = (name) => {
  console.log(`Hello ${name}`);
};

const customMessage = (message) => {
  console.log(message);
};

const answerInfoMessage = (answer, rightAnswer) => {
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
};

const correctMessage = () => {
  console.log('Correct!');
};

const congratsMessage = (name) => {
  console.log(`Congratulations, ${name}!`);
};

const letsTryMessage = (name) => {
  console.log(`Let's try again, ${name}!`);
};

export {
  customMessage,
  welcomeMessage,
  helloMessage,
  answerInfoMessage,
  correctMessage,
  congratsMessage,
  letsTryMessage,
};
