//1
// function findArea0fRectangle(length, height){
//     console.log(`The area of the rectangle is ${length*height}`)
// }
// findArea0fRectangle(5,6);

//2
// function findArea0fCircle(radius){
//     console.log(`The area of the circle is ${radius * radius * 3.14}`)
// }
// findArea0fCircle(9);
//3
// function findMin(num1, num2){
//     console.log(`${num1} is less than ${num2}`)
// }
// findMin( -20, 1);

//4
// function checkEquality(n3, n4) {
//     if (i) {
//         console.log(`${n3} is equal to ${n4}`);
//     } else {
//         console.log(`${n3} is not equal to ${n4}`);
//     }
// }
// checkEquality(6, 5);

//5
function calculateLargestRectangle (length1, height1, length2, hight2) {
    let rec1 = length1 * height1;
    let rec2 = length2 * hight2;
    if (rec1 > rec2) {
        console.log(`rectangle 1 ${rec1}, is greater then rectangle 2 ${rec2}`)
    } else if (rec1 < rec2) {
        console.log(`rectangle 2 ${rec2}, is greater than rectangle 1 ${rec1}`)
    }
}
calculateLargestRectangle (5,6);

//6