/* dividing a data set into a smaller chunks and then
repeating a process with a subset of data. */

/* given a sorted array of integers write a function called search tha accepts a value
and returns the index where the value passed to the function is located. 
if the value was not found return -1 */

/* examples */
// search([1, 2, 3, 4, 5, 6], 4); result: 3
// search([1, 2, 3, 4, 5, 6], 6); result: 5
// search([1, 2, 3, 4, 5, 6], 11); result: -1

/* my solution */
function binarySearch(arr, val) {
    return arr.indexOf(val);
}

// console.log('binarySearch([1, 2, 3, 4, 5, 6], 4) result: ', binarySearch([1, 2, 3, 4, 5, 6], 4));
// console.log('binarySearch([1, 2, 3, 4, 5, 6], 6) result: ', binarySearch([1, 2, 3, 4, 5, 6], 6));
// console.log('binarySearch([1, 2, 3, 4, 5, 6], 11) result: ', binarySearch([1, 2, 3, 4, 5, 6], 11));
// console.log('binarySearch([], 2) result: ', binarySearch([], 2));


/* naive solution. Time complexity - O(n) */
function naiveSearch(arr, val) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === val) {
            return i;
        }
    }
    return -1;
}

// console.log('naiveSearch([1, 2, 3, 4, 5, 6], 4) result: ', naiveSearch([1, 2, 3, 4, 5, 6], 4));
// console.log('naiveSearch([1, 2, 3, 4, 5, 6], 6) result: ', naiveSearch([1, 2, 3, 4, 5, 6], 6));
// console.log('naiveSearch([1, 2, 3, 4, 5, 6], 11) result: ', naiveSearch([1, 2, 3, 4, 5, 6], 11));
// console.log('naiveSearch([], 2) result: ', naiveSearch([], 2));

/* refactored Solution. Time complexity O(log(N)) */

function refSearch(arr, val) {
    // define left and right edges.
    let min = 0;
    let max = arr.length - 1;

    // search for index of element
    while (min <= max) {
        // Math.floor() повертає найбільше ціле число, менше або рівне даному числу.
        let middle = Math.floor((min + max) / 2);
        // let currElement = arr[middle];

        // cut half of array each cycle before middle found.
        if (arr[middle] < val) {
            min = middle + 1;
        } else if (arr[middle] > val) {
            max = middle - 1;
        } else {
            return middle;
        }
    }

    return -1;
}

console.log('refSearch([1, 2, 3, 4, 5, 6], 4) result: ', refSearch([1, 2, 3, 4, 5, 6], 4));
console.log('refSearch([1, 2, 3, 4, 5, 6], 6) result: ', refSearch([1, 2, 3, 4, 5, 6], 6));
console.log('refSearch([1, 2, 3, 4, 5, 6], 11) result: ', refSearch([1, 2, 3, 4, 5, 6], 11));
console.log('refSearch([], 2) result: ', refSearch([], 2));