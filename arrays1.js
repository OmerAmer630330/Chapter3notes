//1
function printFirst(arr){
console.log(arr[0])
}
printFirst([3,12,7,14]);
printFirst(['a', 'b', 'c']);
//2
function printLast(arr) {
    let lastIndex = arr.length - 1
    console.log(arr[lastIndex]);
}
printLast([3,12,7,14]);
printLast(['a', 'b', 'c']);
//3
function upgradedPrintFirst(arr){
    let arraylength = arr.length;
    if (arraylength == 0){
        console.log('empty array')
    } else {
        console.log(arr[0])
    }
}
upgradedPrintFirst([3,12,7,14]);
upgradedPrintFirst(['a', 'b', 'c'])
upgradedPrintFirst([])
function upgradedPrintLast(arr){
    let arrayLength = arr.length; if (arrayLength == 0){ console.log('Empty array')
    } else{
        let lastIndex = arr.length-1
        console.log(arr[lastIndex]);
    }
}
upgradedPrintLast([3,12,7,14]);
upgradedPrintLast(['a', 'b', 'c'])
upgradedPrintLast([])
//4
function reverseArray(arr) {
    let lastIndex = arr.length - 1;
    for (let i = lastIndex; i >= 0; i--) {
        console.log(arr[i])
    }
}
reverseArray([20, 10, 5, 1]);
reverseArray(['a', 'b', 'c', 'd', 'e'])
//5