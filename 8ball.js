const readline=require('readline-sync');

let answers=['yes', 'no', 'maybe', 'probably', 'probably not', 'definitely', 'of course', 'probably not', 'never'];

let randomNum = Math.floor(Math.random()*answers.length);
let answer = answers[randomNum];
let word = readline.question("ask a question:");
console.log(answer);