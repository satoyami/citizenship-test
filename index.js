const CQA = require('./civics-questions-raw.js');

const totalQuestionCount = CQA.length + 1;
const randQuestionNumber = Math.floor(Math.random() * totalQuestionCount);

console.log(CQA[randQuestionNumber].questnum);
console.log(CQA[randQuestionNumber].question);
console.log(CQA[randQuestionNumber].answers);