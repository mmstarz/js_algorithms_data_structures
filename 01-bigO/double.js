/* double array */
/* space complexity O(n) */
function double(arr) { 
    let updatedArray = []; /* n space require for new array depending on the input array */
    for (let i = 0; i < arr.length; i++) { /* const space require for i */
        updatedArray.push(2 * arr[i]);
    }
    return updatedArray;
}


const arr = [1, 2, 3, 4, 5];
console.log(double(arr));