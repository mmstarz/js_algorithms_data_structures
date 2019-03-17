/* recursion is a process that calls itself */

/* usage examples */
// JSON.parse and JSON.stringify
// getElementById() and DOM traversal algorithms
// Object traversal
// cleaner alternative to iteration
// ...

/* Two essential(основні) parts of recursive fucntion */
// base case - is the condition when recursion stops
// different inputs

/* common recursive issues */
// 1. no base case.
// 2. forgetting to return or returning a wrong thing.
// 3. stack overflow

/* simple example */
function simpleCountDown(num) {
    for (let i = num; i > 0; i--) {
        console.log('simpleCountDown: ', i);
    }
    return console.log('All done!');
}

// simpleCountDown(5);

/* recursive example */
function recursiveCountDown(num) {
    if (num <= 0) {
        return console.log('All done.');
    }
    console.log('recursiveCountDown: ', num);
    num--;
    recursiveCountDown(num);
}

// recursiveCountDown(4);

/* second recursuve example */
function sumRange(num) {
    if (num === 1) return 1;
    return num + sumRange(num - 1);
}

// console.log('sumRange(4) : ', sumRange(4));
/* call stack result */
// 1. sumRange(1) return 1
// 2. 2 + sumRange(1) - 2 + (1)
// 3. 3 + sumRange(2) - 3 + (2 + 1)
// 4. 4 + sumRange(3) - 4 + (3 + 2 + 1)

/* factorial example. 4!(factorial of 4) = (4 * 3 * 2 * 1) */
function factorial(num) {
    let total = 1;
    for (let i = num; i > 1; i--) {
        total *= i;
    }
    return total;
}

// console.log('factorial(3) : ', factorial(3));
// console.log('factorial(4) : ', factorial(4));
// console.log('factorial(5) : ', factorial(5));

function factorialOf(num) {
    if (num === 1) return 1;
    return num * factorialOf(num - 1);
}

// console.log('factorialOf(3): ', factorialOf(3));
// console.log('factorialOf(4): ', factorialOf(4));
// console.log('factorialOf(5): ', factorialOf(5));

/* helper method recursion */
// recursive function is defined and called inside of the main function

/* function that collects all odd numbers from the array and returns new array */
function oddCollector(arr) {
    // check for empty input case 
    if (arr.length === 0) {
        return console.error('Error: you enter empty array');
    }
    // assign result arr
    let result = [];
    //assign helper function
    function helper(inputs) {
        // check for arr length
        if (inputs.length === 0) {
            return
        }
        // if arr first element value is odd 
        if (inputs[0] % 2 !== 0) {
            // add it to the result arr
            result.push(inputs[0])
        }

        // recursively call helper function for new array(without first element)
        helper(inputs.slice(1));
    }

    helper(arr);

    return result;
}

// console.log('oddCollector([1,2,3,4,5]) : ', oddCollector([1, 2, 3, 4, 5]));
// console.log('oddCollector([2]) : ', oddCollector([2]));
// console.log('oddCollector([]) : ', oddCollector([]));

/* pure recursion method */
/* pure recursion tips */
// arrays can only be used with copies of arrays
// achieved with .slice(), .concat(), [...] spread operator.

// strings are immutable 
// have to use slice(), substr(), or substring to make copies of strings.

// objects. to make copies of objects need to use:
// Object.assign or {...} spread operator

/* function that collects all odd numbers from the array and returns new array */
function pureOddCollector(arr) {
    // assign new array for result
    let newArray = [];
    // break point
    if (arr.length === 0) {
        return newArray;
    }
    // if odd found add it to result array
    if (arr[0] % 2 !== 0) {
        newArray.push(arr[0])
    }
    // call recursive for newArray without first even element and add it to result array
    newArray = newArray.concat(pureOddCollector(arr.slice(1)));

    return newArray;
}

// console.log('pureOddCollector([1,2,3,4,5]) : ', pureOddCollector([1, 2, 3, 4, 5]));