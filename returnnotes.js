//Parameters are placeholders variables that allow to
//reuse function.

//Example 1: without Parameter(s)
function printYes(){
    console.log("yes");
}

printYes();
printYes();
printYes();

//Example 2: with Parameter
function printText(text){
    console.log(text)
}

printText("Happy Thursday");
printText("Tomorrow is friday");

//Return statements provide values to the rest of the program
//Return values can be used by other parts of code
//console.log does not return values for the rest of your code

//example 3: without return
function double(n) {
    console.log(n*2)
}
double(911)

//Example 4: With Return
function triple(n) {
    return(n*3)
}
let lives = triple(3)
lives -=1;
lives +=2;
console.log(lives);

console.log(triple(2));

//Scope is the part of the program where the binding (value of
//a variable) is visible
//Global scope : created outside

//Example 5: Different Scope
let x=10; //global x
if (x>1){
    let y=20;
    let z=30;
    console.log(x+y+z)
}
console.log(x); //y and z are not accessible outside the{}

//example 6: No naming conflict
function half(n) { //local n
    return(n/2)
}
let n=10;
console.log(half(100))
console.log(n);