/* binary search is faster then linear */
/* binary search works on sorted arrays only! */
/* main idea is dividing and conquer.
eliminate half of the remaining elements at a time */

/* steps */
// 1. function takes 2 args array and value.
// 2. create 2 pointers arrayStart and arrayEnd.
// 3. write a condition while searching is true
//    (while left pointer comes before right pointer)
// 4. pick middle value in between of the pointers.
// 5. check for the input value and array[middle] value
// 6. move pointers depending on conditions.
// 7. return index(middle) of searching value if it was found.
// 8. return -1 if it wasn't found.

/* search function example */
function binaryPseudoSearch(arr, val) {
    let start = 0;
    let end = arr.length - 1;
    let middle = Math.floor((start + end) / 2);

    while (arr[middle] !== val && start <= end) {
        if (val < arr[middle]) {
            end = middle - 1;
        } else if (val > arr[middle]) {
            start = middle + 1;
        }
        middle = Math.floor((start + end) / 2);

    }
    return arr[middle] === val ? middle : -1;
}

let arr = [1, 2, 3, 4, 55, 88, 999, 1212];
// console.log('binaryPseudoSearch(arr, 55) : ', binaryPseudoSearch(arr, 55));
// console.log('binaryPseudoSearch(arr, 77) : ', binaryPseudoSearch(arr, 77));

function binarySearchRef(arr, val) {
    let leftIndex = 0;
    let rightIndex = arr.length - 1;
    let middle = Math.floor((leftIndex + rightIndex) / 2);

    while (val !== arr[middle] && leftIndex <= rightIndex) {

        if (val < arr[middle]) {
            rightIndex = middle - 1;
        } else {
            leftIndex = middle + 1;
        }
        middle = Math.floor((leftIndex + rightIndex) / 2);
        
    }
    return arr[middle] === val ? middle : -1;
}

// console.log('binarySearchRef(arr, 999) : ', binarySearchRef(arr, 999));
// console.log('binarySearchRef(arr, 77) : ', binarySearchRef(arr, 77));