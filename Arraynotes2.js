//Arrays are 'pass by reference'
//This means you can accidentally change an array
//if you change another array that it's equal to

let nums = [5, 4, 3, 2, 1];
let newNums = nums;
newNums[0] = 12;
console.log('nums:'+ nums);
console.log('newNums'+ newNums);

//option 1: Use a for loop to push individual items
//into a new array, one at a time
let vals = [5, 4, 3, 2, 1];
let newVals = [];
for(let i =0 ; i < value.length; i++){
    newVals.push(vals[1]);
}
newVals[0]=12;
console.log('vals:' +vals);
console.log('Newvals' +newVals);

//option 2
let ages= [5,4,3,2,1];
let newAges = [ages];
newAges[0]=12;
console.log('')