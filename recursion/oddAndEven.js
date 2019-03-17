/* Use modulus (%). It gives you the remainder of the two numbers you are dividing.
This means if you mod any number x by 2,
you get either 0 or 1 or -1. 0 would mean it's even.
Anything else would mean it's odd*/

/* even - чётные. odd - нечётные */

/* examples */
// Ex. 2 % 2 = 0 because 2/2 = 1 with 0 remainder.
// Ex2. 3 % 2 = 1 because 3/2 = 1 with 1 remainder.
// Ex3. -7 % 2 = -1 because -7/2 = -3 with -1 remainder.

function isEven(val) {
    if(val === undefined) {
        return console.error('error: please enter a number');        
    }
    // return 0 is false, 1 is true - by default.
    return !(val % 2);
}

console.log('is 2 even? - ', isEven(2));
console.log('is 3 even? - ', isEven(3));
console.log('is 4 even? - ', isEven(4));
console.log('is 0 even? - ', isEven(0));
console.log('is white space even? - ', isEven());