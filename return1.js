const readLine = require('readline-sync')
//1
function nameSwapper(){
    let first = readLine.question("First Name");
    let last = readLine.question("Last Name");
    return(`${last}, ${first}`)
}
 let myName = nameSwapper();
console.log(myName);
//2
function NumberGenerator() {
    
}