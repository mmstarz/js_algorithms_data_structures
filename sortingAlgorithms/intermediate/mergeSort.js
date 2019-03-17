/* element tree comparison sorting algorithm */

/*Merge(об'єднання/поглинання) sort: combination of 2 things merging and sorting. 
Exploits the fact that arrays of 0 or 1 element are always sorted.
Works by decompressing an array into smaller arrays of 0 or 1 elements,
then building up a newly sorted array. */

/* merge part steps */
// 1. implement function responsible for merging two sorted arrays.
// 2. given two arrays which are sorted. This helper function should create a new array
//    which is also sorted, and consists of all of the inputed arrays elements.
// 3. the function should run in O(n + m) time and O(n + m) space complexity and
//    should not modify the parameters passed to it.

/* pseudo code for merge part */
// 1. create an empty array, take a look at the smallest values in each input array.
// 2. while(while loop) there are still values haven't looked at
// 2.1. if the value in the first array is smaller then the value in the second array,
// push this value into result array and move to the next value in the first array.
// 2.2 if the value in the second array is smaller then the value in the first array,
// push this value into result array and move to the next value in the second array.
// 2.3 once we exhaust one array, push in all remaining values from the other array.

/* pseudo code */
// 1. break up array into halves until you have arrays that are empty or have one element.
// 2. once you have smaller sorted arrays, merge those arrays with other sorted arrays
// until you are back at the full length of the array.
// 3. once array has been merged back together, return the merged(and sorted) array.

/* Big O complexity */
/*     time        time        time        space  */
/*     best        average     worst       compl. */
/*  O(n log n)   O(n log n)  O(n log n)     O(n)  */
/* log n - decompositions. n - comparisons per decomposition */

/* myMerge function for two sorted arrays */
function myMerge(arr1, arr2) {
    let arr3 = [];
    let steps = arr1.length + arr2.length;
    let index1 = 0;
    let index2 = 0;

    for (let i = 0; i < steps; i++) {
        // console.log('arr1[index1]: ', arr1[index1]);
        // console.log('arr2[index2]: ', arr2[index2]);
        if (arr1[index1] === undefined && arr2[index2] !== undefined) {
            arr3.push(arr2[index2]);
            index2++;
        } else if (arr2[index2] === undefined && arr1[index1] !== undefined) {
            arr3.push(arr1[index1]);
            index1++;
        }

        if (arr1[index1] < arr2[index2]) {
            arr3.push(arr1[index1]);
            index1++;
        } else if (arr2[index2] < arr1[index1]) {
            arr3.push(arr2[index2]);
            index2++;
        }

        /*if (arr1.length === 0) {
            return arr3 = arr3.concat(arr1);
        } else if (arr2.length === 0) {
            return arr3 = arr3.concat(arr1);
        } else if (arr1[0] > arr2[0]) {
            arr3.push(arr2[0]);
            arr2.splice(0, 1);
        } else if (arr1[0] > arr2[1]) {
            arr3.push(arr2[1]);
            arr2.splice(1, 1);
        } else if (arr1[0] < arr2[0]) {
            arr3.push(arr1[0]);
            arr1.splice(0, 1);
        } else if (arr1[0] < arr2[1]) {
            arr3.push(arr1[1]);
            arr1.splice(1, 1);
        }*/
        // console.log('arr3: ', arr3);
        // console.log('NEXT TURN!');
    }
    return arr3;
}

/* merge naive function for two sorted arrays */
function mergeNaive(arr1, arr2) {
    let arr3 = [];
    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr2[j] >= arr1[i]) {
            arr3.push(arr1[i]);
            i++;
        } else {
            arr3.push(arr2[j]);
            j++;
        }
    }

    while (i < arr1.length) {
        arr3.push(arr1[i]);
        i++;
    }

    while (j < arr2.length) {
        arr3.push(arr2[j]);
        j++;
    }

    return arr3;
}

// let arr1 = [7, 8, 14];
// let arr2 = [1, 2, 19, 20];
// 
// let arr3 = [4, 5, 22, 32];
// let arr4 = [1, 7, 21];
// 
// let arr5 = [1, 3];
// let arr6 = [2, 4];
// 
// let arr7 = [11, 13, 23];
// let arr8 = [9, 12, 14, 19];
// 
// let arr9 = [1];
// let arr10 = [3, 4, 5, 9, 99];

// console.log('****my version test****');
// console.log('myMerge(arr1, arr2)', myMerge(arr1, arr2));
// console.log('myMerge(arr5, arr6)', myMerge(arr5, arr6));
// console.log('myMerge(arr9, arr10)', myMerge(arr9, arr10));
// console.log('myMerge(arr3, arr4)', myMerge(arr3, arr4));
// console.log('****naive version test****');
// console.log('mergeNaive(arr1, arr2)', mergeNaive(arr1, arr2));
// console.log('mergeNaive(arr5, arr6)', mergeNaive(arr5, arr6));
// console.log('mergeNaive(arr9, arr10)', mergeNaive(arr9, arr10));
// console.log('mergeNaive(arr7, arr8)', mergeNaive(arr7, arr8));

function naiveMergeSort(arr) {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = naiveMergeSort(arr.slice(0, mid));
    let right = naiveMergeSort(arr.slice(mid));
    return mergeNaive(left, right);
}

function myMergeSort(arr) {
    if (arr.length <= 1) return arr;
    let half = Math.floor(arr.length / 2);    
    let arr1 = myMergeSort(arr.slice(0, half));
    let arr2 = myMergeSort(arr.slice(half));
    return myMerge(arr1, arr2);
}

let arr1 = [3, 52, 6, 88, 12, 7];
let arr2 = [4, 27, 51, 12, 3, 1, 8, 10];
console.log('naiveMergeSort(arr1)', naiveMergeSort(arr1));
console.log('myMergeSort(arr2)', myMergeSort(arr2));