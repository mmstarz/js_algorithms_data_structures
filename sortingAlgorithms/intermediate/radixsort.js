/* element tree sorting algorithm */

/* Radix sort is a special sorting algorithm that works on list of numbers.
   It never make comparisons between elements!
   It exploits the fact that information about the size of a number is encoded
   in the number of digits.
   More digits means a bigger number. */

/* first helper function (getDigit()) pseudo code */
/* getDigit(number, place):
   1. returns the digit in number at the given place value. */

/* getDigit() examples:
   1. getDigit(12345, 0) - return 5
   2. getDigit(12345, 1) - return 4
   3. getDigit(12345, 2) - return 3
   4. getDigit(12345, 3) - return 2 
   5. getDigit(12345, 4) - return 1 
   6. getDigit(12345, 5) - return 0 */

/* Функція Math.pow() повертає результат піднесення основи до показника степеня,
   тобто, основастепінь. 
   console.log(Math.pow(7, 3));     expected output: 343
   console.log(Math.pow(4, 0.5));   expected output: 2
   console.log(Math.pow(7, -2));    expected output: 0.02040816326530612 // (1/49)
   console.log(Math.pow(-7, 0.5));  expected output: NaN

   // просте
   Math.pow(7, 2);    // 49
   Math.pow(7, 3);    // 343
   Math.pow(2, 10);   // 1024

   // дроби як показники степеня
   Math.pow(4, 0.5);  // 2 (корінь квадратний від 4)
   Math.pow(8, 1/3);  // 2 (корінь кубічний від 8)
   Math.pow(2, 0.5);  // 1.4142135623730951 (корінь квадратний від 2)
   Math.pow(2, 1/3);  // 1.2599210498948732 (корінь кубічний від 2)

   // показники степеня зі знаками
   Math.pow(7, -2);   // 0.02040816326530612 (1/49)
   Math.pow(8, -1/3); // 0.5

   // основи зі знаками
   Math.pow(-7, 2);   // 49 (квадрати завжди позитивні)
   Math.pow(-7, 3);   // -343 (куби можуть бути негативними)
   Math.pow(-7, 0.5); // NaN (негативні числа не мають дійсного квадратного кореня)
*/

/* Функція Math.abs() повертає абсолютне значення (модуль) числа 

    function difference(a, b) {
        return Math.abs(a - b);
    }
    console.log(difference(3, 5));              expected output: 2
    console.log(difference(5, 3));              expected output: 2
    console.log(difference(1.23456, 7.89012));  expected output: 6.6555599999999995

    Math.abs('-1');     // 1
    Math.abs(-2);       // 2
    Math.abs(null);     // 0
    Math.abs('');       // 0
    Math.abs([]);       // 0
    Math.abs([2]);      // 2
    Math.abs([1,2]);    // NaN
    Math.abs({});       // NaN
    Math.abs('string'); // NaN
    Math.abs();         // NaN
*/

/* first helper function get digit from certain place(right -> to left) in the number */
function getDigit(num, place) {
    // .abs() returns absolute. this is used for negative number cases
    return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

// console.log(getDigit(-123, 0)); = 3 // Math.abs(-123) = 123;
// console.log(getDigit(-123, 1)); = 2 // Math.pow(10, place) = 123 / 10 (place times)
// console.log(getDigit(-123, 2)); = 1 // Math.foor(123 / 10 / 10) = Math.floor(1.23) = 1
// console.log(getDigit(-123, 3)); = 0 // 0 % 10 = 0

/* second helper function digitCount(num) : 
   1. returns the number of digits in num. */

/* digitCount() examples:
   digitCount(2);    // 1
   digitCount(13);   // 2
   digitCount(123);  // 3 */

/* Функція Math.log10() повертає логарифм за основою 10 від поданого числа.
   console.log(Math.log10(100000)); // expected output: 5
   console.log(Math.log10(2));      // expected output: 0.3010299956639812
   console.log(Math.log10(1));      // expected output: 0
   console.log(Math.log10(0));      // expected output: -Infinity
   console.log(Math.log10(-2));     // NaN
*/

function digitCount(num) {
    // special case because Math.log10(0) = -infinity
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

// console.log(digitCount(-123)); = 3 // Math.log10(123) = 2.089905111439398
// console.log(digitCount(-123)); = 3 // 2 + 1 = 3

/* third helper function mostDigits(numList) - given an array of numbers, returns 
   the number of digits in the largest number in the list. */

/* mostDigits(numList):
   mostDigits([1234, 56, 7]);    // 4
   mostDigits([1, 1, 11111, 1]); // 5
   mostDigits([12 34, 56, 78]);  // 2 */

/* Фукнція Math.max() повертає найбільше значення із
   довільної кількості (0 та більше) аргументів.
   
   console.log(Math.max(1, 3, 2));       // expected output: 3
   console.log(Math.max(-1, -3, -2));    // expected output: -1
   var array1 = [1, 3, 2];
   console.log(Math.max(...array1));     // expected output: 3
*/

function mostDigits(numList) {
    let maxDigits = 0;
    for (let i = 0; i < numList.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(numList[i]));
    }
    return maxDigits;
}

/* radix sort pseudo code:
1. Define a function that accepts list of numbers. 
2. Figure out how many digits the largest number has.
3. Loop from 0 up to the largest number of digits
    For each iteration:
    3.1 Create buckets for each digit (0 - 9).
    3.2 Place each number in the corresponding bucket based on its i-th digit.
4. Replace our existing array with values in our buckets,
   starting with 0 and going up to 9.
5. return the list at the end. */

/* The Array.from() method creates a new, shallow-copied Array instance
    from an array-like or iterable object. 

examples: 
   Array.from('foo'); // ["f", "o", "o"]
   let s = new Set(['foo', window]); Array.from(s); // ["foo", window]
   let m = new Map([[1, 2], [2, 4], [4, 8]]); Array.from(m); // [[1, 2], [2, 4], [4, 8]]
   let mapper = new Map([['1', 'a'], ['2', 'b']]); Array.from(mapper.values()); // ['a', 'b'];
   Array.from(mapper.keys()); // ['1', '2'];
   Array.from([1, 2, 3], x => x + x); // [2, 4, 6]
   
   // the value of `v` below will be `undefined`
   Array.from({length: 5}, (v, i) => i); // [0, 1, 2, 3, 4]
   
   let buckets = Array.from({ length: 10 }, () => []);
*/

/* Big O complexity */
/*     time        time        time        space  */
/*     best        average     worst       compl. */
/*     O(ni)       O(ni)       O(ni)      O(n + i)  */
/* n - length of array.    i - number of digits(average)*/

function radixSort(arr) {
    function digitCount(num) {
        // special case because Math.log10(0) = -infinity
        if (num === 0) return 1;
        return Math.floor(Math.log10(Math.abs(num))) + 1;
    }

    function mostDigits(numList) {
        let maxDigits = 0;
        for (let i = 0; i < numList.length; i++) {
            maxDigits = Math.max(maxDigits, digitCount(numList[i]));
        }
        return maxDigits;
    }

    function getDigit(num, place) {
        // .abs() returns absolute. this is used for negative number cases
        return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
    }

    let steps = mostDigits(arr);


    /* for (let i = 0; i < steps; i++) {
        // The Array.from() method creates a new, shallow-copied Array instance
        //   from an array-like or iterable object. 
        let buckets = Array.from({ length: 10 }, () => []);
        for (let j = 0; j < arr.length; j++) {
            console.log(getDigit(arr[j], i));
        }
    } */

    for (let i = 0; i < steps; i++) {
        // The Array.from() method creates a new, shallow-copied Array instance
        //   from an array-like or iterable object.
        let buckets = Array.from({ length: 10 }, () => []);
        for (let j = 0; j < arr.length; j++) {
            let digit = getDigit(arr[j], i);
            buckets[digit].push(arr[j]);            
        }
        // [].concat([[1], [2], [3]]) = [[1], [2], [3]]
        // instead of loop through list of array and push every array[0] value
        // use spread operator
        // [].concat(...[[1], [2], [3]]) = [1, 2, 3]
        arr = [].concat(...buckets);
        console.log(arr);
    }

    return arr;
}

let arr1 = [12, 3, 999, 45, 3288, 94, 321, 47];
console.log('radixSort(arr1): ', radixSort(arr1));