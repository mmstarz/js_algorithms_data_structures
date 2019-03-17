/* count UP and Down */
/* runtime speed O(n) */
function countUpAndDown(n) {
    console.log('Going UP!');
    for (let i = 0; i < n; i++) {
        console.log(i);
    }
    console.log('At the top. Going down...');
    for (j = n - 1; j >= n; j--) {
        console.log(j);
    }
    console.log('Back down. Bye!');
}