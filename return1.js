const readLine = require('readline-sync')
//1
// function nameSwapper(){
//     let first = readLine.question("First Name");
//     let last = readLine.question("Last Name");
//     return(`${last}, ${first}`)
// }
//  let myName = nameSwapper();
// console.log(myName);

//2
// function NumberGenerator() {
//     let firstDigit= readLine.question( `please enter the first digit:`);
//     let secondDigit= readLine.question( `please enter the second digit:`);
//     console.log(firstDigit + secondDigit);
// }
// NumberGenerator();

//3
// function AverageTemperature(temp1, temp2, temp3, temp4, temp5, temp6, temp7) {
//     let sum = temp1 + temp2 + temp3 + temp4 + temp5 + temp6 + temp7;
//     let avg = (sum/7);
//     return(avg);
// }
// let avgtemp=AverageTemperature(99,90,95,98,83,89, 79);
// console.log(avgtemp);

//4
function CharityCollectionRevisited() {
    let Money1= Number(readLine.question( ` first donation:`));
    let Money2= Number(readLine.question( `second donation:`));
    let sum1=(Money1+Money2)
    console.log(`Total donations:$${sum1}`);
}
CharityCollectionRevisited();
