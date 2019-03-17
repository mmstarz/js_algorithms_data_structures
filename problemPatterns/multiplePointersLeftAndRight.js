/* write a function called sumZero() which accepts a sorted array of integers.
The function should find the first pair where the sum is zero.
Return an array that includes both values, that sum to zero or undefined, 
if a pair doesn/t exist */

/* simple examples */
// [-3, -2, -1, 0, 1, 2, 3] return [-3, 3]
// [-2, 0, 1, 3] return undefined
// [1, 2, 3] return undefined

/* Naive solution. */
/* Time complexity - O(n^2). Space complexity - O(1) */
function sumZero(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if ((arr[i] + arr[j]) === 0) {
                return [arr[i], arr[j]];
            }
        }
    }
}

/* Refactored solution */
/* Time complexity - O(n). Space complexity - O(1) */
function sumZeroRef(arr) {
    // assign first and last pointers 
    let leftPointer = 0
    let rightPointer = arr.length - 1;
    while (leftPointer < rightPointer) {
        // assign summ of numbers
        let summ = arr[leftPointer] + arr[rightPointer];
        // check for result
        if (summ === 0) {
            return [arr[leftPointer], arr[rightPointer]];
        } else if (summ > 0) {
            rightPointer--;
        } else {
            leftPointer++;
        }
    }
}

const arr = [-3, -2, -1, 0, 1, 2, 3];
console.log('[-3, -2, -1, 0, 1, 2, 3] result of sumZeroRef() :', sumZeroRef(arr));