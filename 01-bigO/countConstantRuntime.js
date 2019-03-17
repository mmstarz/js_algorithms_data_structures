/* calculate sum of all numbers from 1 to some number n */
/* function with 3 simple operations */ 
/* runtime speed O(1) */
function addUpTo(n) {
    return n * (n + 1) / 2;
}

/* define timings before execution and after for calculating speed */
let t1 = new Date().getTime();
let total = addUpTo(6);
let t2 = new Date().getTime();

console.log(`time elapsed: ${(t2 - t1) / 10000} seconds.`);
console.log(`Result is: ${total}`);