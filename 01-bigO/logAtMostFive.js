/* logs at most five */ 
/* runtime speed O(1) */
function logAtMostFive(n) {
    /* Math.min(n, n2) - choose which one is smaller n or n2 */
    for(let i = 0; i < Math.min(5, n); i++) {
        console.log(i);
    }
}

logAtMostFive(7);