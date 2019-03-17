/* summ array */
/* space complexity O(1) */
function summArr(arr) {
    let total = 0; /* total is one const space require */
    for(let i = 0; i < arr.length; i++) { /* i is a second const space require */
        total += arr[i];
    }        
    return total;
}

const arr = [2, 3, 4, 5, 6];
console.log(summArr(arr));