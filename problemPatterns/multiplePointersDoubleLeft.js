/* implement function called countUniqueValues, which accepts a sorted array.
And counts the unique values in the array. There can be 
negative numbers in the array, but it always be sorted. */

/* simple examples */
// countUniqueValues([1, 1, 1, 1, 1, 2]); - result 2 (1 and 2) 
// countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]); - result 7 (1,2,3,4,7,12,13)
// countUniqueValues([]); - result 0 
// countUniqueValues([-2, -1, -1, 0, 1]); result 4 (-2, -1, 0, 1)

/* instructor's solution */
function uniqueValuesCounter(arr) {
    // empty array check
    if(arr.length === 0) {
        return 0;
    }
    // assign first pointer
    let i = 0;
    // lopp through array with second pointer
    for (let j = 1; j < arr.length; j++) {
        // match values
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j];
        }
    }
    return i+1;
}

console.log('unique values count: ', uniqueValuesCounter([1, 1, 1, 1, 1, 2]));
console.log('unique values count: ',
    uniqueValuesCounter([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
console.log('unique values count: ', uniqueValuesCounter([]));
console.log('unique values count: ', uniqueValuesCounter([-2, -1, -1, 0, 1]));

/* my solution for sorted array */
function doublePointersLeft(arr) {
    // console.log('usage of doublePointersLeft()');
    let counter = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[i + 1]) {
            counter++;
        }
    }
    return counter;
}

console.log('unique values count: ', doublePointersLeft([1, 1, 1, 1, 1, 2]));
console.log('unique values count: ',
    doublePointersLeft([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
console.log('unique values count: ', doublePointersLeft([]));
console.log('unique values count: ', doublePointersLeft([-2, -1, -1, 0, 1]));

/* my solution for unsorted array*/
function countUniqueValues(arr) {
    // console.log('usage of countUniqueValues()');
    // empty arr input case
    if (arr.length === 0) {
        return 0;
    }
    // assign object
    let uniqueValues = {};   

    // loop through array
    for (val of arr) {
        // add unique values to the object as keys
        uniqueValues[val] ? uniqueValues[val] += 1 : uniqueValues[val] = 1;
    }

    return Object.keys(uniqueValues).length;
}

console.log('unique values count: ', countUniqueValues([1, 1, 1, 1, 1, 2]));
console.log('unique values count: ',
    countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
console.log('unique values count: ', countUniqueValues([]));
console.log('unique values count: ', countUniqueValues([-2, -1, -1, 0, 1]));