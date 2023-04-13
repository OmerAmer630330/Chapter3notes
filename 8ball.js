let answers=['yes', 'no', 'maybe', 'probably', 'probably not', 'definitely', 'of course', 'probably not', 'never'];

let randomNum = Math.floor(Math.random()*answers.length);
let answer = answers[randomNum];
console.log(answer);