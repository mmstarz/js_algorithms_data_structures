/* this pattern involves creating a window which can either be an array of number
from one position to an other. Depending on certain condition, the window either
increases or closes(and a new window is created). Very useful for keeping track
of subset of data in an array, string etc.*/

/* examples */
// find longest sequence of unique chars from string 'hellothere'

/* write a function called maxSubarraySum() which accepts an array of integers and
a number called n.The function should calculate the maximum sum of n consecutive(послідовний)
elements in the array */

/* examples */
// maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2); - result 10;
// maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4); - result 17;
// maxSubarraySum([4,2,1,6],1); - result 6;
// maxSubarraySum([4,2,1,6],0); - result null;
// maxSubarraySum([4,2,1,6,2],4); - result 13;
// maxSubarraySum([],4); - result null;

/* instructor's solution */
function maxSubarraySumInstr(arr, number) {
    // edge case
    if (number > arr.length) {
        return null;
    }
    // assign variable vor result(including negatives)
    let max = -Infinity;
    for (let i = 0; i < arr.length - number + 1; i++) {
        // temp variable vor counting summ
        let temp = 0;
        // loop for summ values
        for (let j = 0; j < number; j++) {
            temp += arr[i + j];
        }
        // ckeck for max result
        if (temp > max) {
            max = temp;
        }
    }
    return max;
}

// console.log('maxSubarraySumInstr([1, 2, 5, 2, 8, 1, 5], 2) result: ', maxSubarraySumInstr([1, 2, 5, 2, 8, 1, 5], 2));
// console.log('maxSubarraySumInstr([1, 2, 5, 2, 8, 1, 5], 4) result: ', maxSubarraySumInstr([1, 2, 5, 2, 8, 1, 5], 4));
// console.log('maxSubarraySumInstr([4, 2, 1, 6], 1) result: ', maxSubarraySumInstr([4, 2, 1, 6], 1));
// console.log('maxSubarraySumInstr([4, 2, 1, 6], 0) result: ', maxSubarraySumInstr([4, 2, 1, 6], 0));
// console.log('maxSubarraySumInstr([4, 2, 1, 6, 2], 4) result: ', maxSubarraySumInstr([4, 2, 1, 6, 2], 4));
// console.log('maxSubarraySumInstr([],4) result: ', maxSubarraySumInstr([], 4));

/* refactored solution. Time complexity (linear) - O(n) */
function slidingWindow(arr, num) {
    // assign variables
    let maxSum = 0;
    let tempSum = 0;
    // edge case
    if (arr.length < num) return null;
    // create first window
    for (let i = 0; i < num; i++) {
        maxSum += arr[i];
    }
     
    tempSum = maxSum;
    /* loop window through array.
    removing first value of window and adding next one to the end */
    for(let i = num; i < arr.length; i++) {
        // window = window - value of the first element + value of next element        
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}

console.log('slidingWindow([1, 2, 5, 2, 8, 1, 5], 2) result: ', slidingWindow([1, 2, 5, 2, 8, 1, 5], 2));


/* my soluton */
function maxSubarraySum(arr, number) {
    // empty array and 0 number cases
    if (number === 0 || number > arr.length) {
        return null;
    }
    // result assign (including negatives)
    let result = -Infinity;
    // loop through array creating inner array 
    for (let i = 0; i < arr.length - number + 1; i++) {
        // slice - O(n) Selects a part of an array, and returns the new array
        let tempArr = arr.slice(i, number + i);
        // console.log(tempArr);
        let total = 0;
        // count sum of inner array elements
        for (let j = 0; j < tempArr.length; j++) {
            total += tempArr[j];
            // console.log('total: ', total);                        
        }
        // find the biggest sum of elements
        if (result < total) {
            result = total;
            // console.log('result: ', result);
        }
    }
    return result;
}

// console.log('maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2) result: ', maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2));
// console.log('maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4) result: ', maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4));
// console.log('maxSubarraySum([4, 2, 1, 6], 1) result: ', maxSubarraySum([4, 2, 1, 6], 1));
// console.log('maxSubarraySum([4, 2, 1, 6], 0) result: ', maxSubarraySum([4, 2, 1, 6], 0));
// console.log('maxSubarraySum([4, 2, 1, 6, 2], 4) result: ', maxSubarraySum([4, 2, 1, 6, 2], 4));
// console.log('maxSubarraySum([],4) result: ', maxSubarraySum([], 4));