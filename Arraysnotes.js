//2.4.1 intro into arrays

//create
let student = ['Aaron', 'Brian', 'Casey', 'Dave'];
let values = [1, 2, 3, 4];

//accessing items in a array
console.log(student);
console.log(student[0]); //begging item hast index 0
console.log(student[1]);
console.log(student[2]);
console.log(student[3]);
console.log(student[4]); //error, there is no 5th person

//formatting items in array
console.log('Student: '+ student[0]);
console.log(`Student 2:${student[1]}`);

//changing an item
student[1] = 'Stephanie';
console.log(student);

//push adds to the end
student.push('Eve');
console.log(student);
student.push('Fred', 'Gary');
console.log(student);

//pop removes the last item
student.pop();
console.log(student);

//shift remove the beginning item
student.shift();
console.log(student);

//unshift adds an item to the beginning
student.unshift('Zeke');
console.log(student);
student.unshift('Yana', 'Xavier');
console.log(student);

///length of array = # items in it
numStudents = student.length;
console.log(numStudents);

//how to access the Last item
let lastStudent = student[student.length - 1];
console.log(lastStudent);

//slice up a piece of original
let fruits = ['apple', 'banana', 'orange', 'lemon', 'grape'];
let citrus = fruits.slice(2, 4);
console.log(citrus);