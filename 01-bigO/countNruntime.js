/* calculate sum of all numbers from 1 to some number n */
/* this function have 5n + 2 operations */
/* runtime speed O(n) */
function addUpTo(n) {
    let total = 0; /*first assignment operation */
    for (let i = 0; i <= n; i++) { /* assignment & n - comparisons & n - assignments & n - additions*/
        total += i; /* n - assignments & n - additions*/
    }
    return total;
}

/* define timings before execution and after for calculating speed */
let t1 = new Date().getTime();
let total = addUpTo(6);
let t2 = new Date().getTime();

console.log(`time elapsed: ${(t2 - t1) / 1000} seconds.`);
console.log(`Result is: ${total}`);