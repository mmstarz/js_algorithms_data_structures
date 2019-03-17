/* element tree sorting algorithm */

/* javascript build in .sort() function for arrays */

/* Array.prototype.sort() */

/* The sort() method sorts the elements of an array in place and returns the array.
Javascript sort algorithm on V8 is now stable.
The default sort order is according to string Unicode code points. */

const arr1 = ['alpha', 'eta', 'supermega', 'beta'];
const arr2 = [44, 3, 333, 55, 2];
console.log(arr1.sort()); // [ 'alpha', 'beta', 'omega', 'teta' ] - xDD
console.log(arr2.sort()); // [ 2, 3, 333, 44, 55 ] - O_O

/* buildIn .sort() method accepts an optional comparator fucntion */
/* you can use this comparator function to tell JS how you want to sort elements */
/* the comparator looks at pairs of elements (a, b) and 
detemines their sort order based on return value:
if it returns negative number, a should come before b.
if it return positive number, a should come after b.
if it return zero, a and b are the same as far as the sort is concerned. */

/* examples */
function numberCompare(num1, num2) {
    return num1 - num2;
}

function numberCompareReverse(num1, num2) {
    return num2 - num1;
}

function stringLengthCompare(str1, str2) {
    return str1.length - str2.length;
}

console.log('with camparator function: ', arr2.sort(numberCompare));
console.log('with reverse camparator function: ', arr2.sort(numberCompareReverse));
console.log('with stringLengthCompare function: ', arr1.sort(stringLengthCompare));