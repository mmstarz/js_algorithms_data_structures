/* prints at least five */
/* runtime speed O(n)*/
function printFiveAtLeast(n) {
    /* Math.max(n, n2) - choose which one is larger n or n2 */
    for(let i = 0; i <= Math.max(5, n); i++) {
        console.log(i);
    }
}

printFiveAtLeast(7);