const array = [-1, 0, 3, 100, 99, 2, 99];
const array2 = ['a', 3, 4, 2];
const array3 = [];

function biggestNumberInArray(arr) {
    let highest = 0;
    for (let i = 0; i < arr.length; i++)
        if (highest < arr[i]) {
            highest = arr[i];
        }
    return highest;
}
console.log(biggestNumberInArray(array));

function biggestNumberInArray(arr) {
    let highest = 0;
}
