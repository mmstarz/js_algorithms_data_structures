/* element tree comparison sorting algorithm */

/* bubble sort algorithm: where the largest numbers are bubble up to the top */

/* steps */
// loop through the array
// compare two nearest elements
// swapping them if the first element value is larger then the second one

/* how swap works */
// ES5
function swap(arr, index1, index2) {
    var temp = arr[index1]; // store value of arr[index1]
    arr[index1] = arr[index2]; // assign value of arr[index2] to arr[index1]
    arr[index2] = temp; // assign value of arr[index1] to arr[index2] from temp store
}

// ES2015
const swapping = (arr, index1, index2) => {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
}

/* bubble Sort pseudocode */
/* steps */
// 1. loop through array from end to beginning with variable called i.
// 2. start inner loop with variable called j from beginning to i - 1.
// 3. if arr[j] is greater then arr[j+1] swap values.

/* Bubble Sort time complexity general O(n^2), but if array is nearly sorted it's O(n) */

/* Big O complexity */
/*     time        time        time        space */
/*     best        average     worst       compl.*/
/*     O(n)        O(n^2)      O(n^2)      O(1)  */

/* bubbleSort most inefficient way*/
const bubbleSortIneff = (arr) => {
    let noSwap = true;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                noSwap = false;
            }
        }
        if (noSwap) break;
    }
    return arr;
}

/* bubbleSortRef */
const bubbleSortRef = (arr) => {
    let noSwap = true;
    for (let i = arr.length - 1; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
                noSwap = false;
            }
        }
        if (noSwap) break;
    }
    return arr;
}

/* ES2015 */
const bubbleSort = (arr) => {
    let noSwap = true;

    const swap = (arr, index1, index2) => {
        [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
    }

    for (let i = arr.length - 1; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
                noSwap = false;
            }
        }
        if (noSwap) break;
    }
    return arr;
}

let arr1 = [9, 2, 1, 111, 5, 8, 3, 0];
let arr2 = [55, 33, 44, 77, 88, 11, 22];
let arr3 = [13, 33, 95, 22, 21, 45, 43];
console.log('bubbleSortIneff(arr1): ', bubbleSortIneff(arr1));
console.log('bubbleSortRef(arr2): ', bubbleSortRef(arr2));
console.log('bubbleSort(arr3): ', bubbleSort(arr3));