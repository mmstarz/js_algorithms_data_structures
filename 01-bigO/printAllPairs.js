/* print all numbers */
/* runtime speed O(n*n) */
function countAllPairs(n) {
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++) {
            console.log(i, j);
        }
    }
}

countAllPairs(5);