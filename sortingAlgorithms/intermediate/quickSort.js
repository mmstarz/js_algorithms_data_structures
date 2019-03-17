/* element tree comparison sorting algorithm */

/*Quick sort:  
1. Exploits the fact that arrays of 0 or 1 element are always sorted.
2. Works by selecting one element (called the "pivot") and finding
   the index where the pivot should end up in the sorted array.
3. Once the pivot is positioned appropriately, quick sort can be
   applied on either side of the pivot. */

/* Pseudo code: 
1. In order to implement quick sort, it is useful to first implement a
   function, responsible for arranging elements in an array on either side of a pivot. 
2. Given an array this helper function, should designate an element as the pivot. 
3. It should then rearrange elements in the array so that, all values
   less then the pivot are moved to the left of the pivot, and all values greater 
   the the pivot are moved to the right of the pivot.
4. The order of elements on either side of the pivot doesn't matter! 
5. The helper should do this in place, that is, it should not create new array! 
6. When complete, the helper should return the index of the pivot. */

/* picking the pivot: 
1. The runtime of quick sort depends in part on how one selects the pivot ! 
2. Ideally the pivot should be chosen so that it's roughly(грубо)
   the median value(середнє значення) in the data set you are sorting. 
3. For simplicity, we'll always chose the pivot to be the first element. */

/* Examples:
if pivot is first element.
let arr = [5, 2, 1, 8, 4, 7, 6, 3];
pivot(arr) // return 4

arr;
one of these is an acceptable mutation:
[2, 1, 4, 3, 5, 8, 7, 6];
[1, 4, 3, 2, 5, 7, 6, 8];
[3, 2, 1, 4, 5, 7, 6, 8];
[4, 1, 2, 3, 5, 6, 8, 7];
there are others acceptable mutations too! */

/* helper function pseudo code:
1. function accepts 3 arguments: an array, a start index, and an end index
   (these can default to 0, and the array length minus 1, respectively).
2. Grab the pivot (from start of the array, or median value, or from the end).
3. Store the current pivot index in a variable (this will keep track of
   where the pivot should end up).
4. Loop through the array from the start until the end:
        if pivot is greater then the current element, increment the pivot
        index variable and then swap the current element with the element
        at pivot index.
5. Swap the starting element(i.e the pivot) with the pivot index.
6. Return the pivot index. */

/* quick sort pseudo code:
1. call the pivot helper function on the array.
2. when the helper returns to you the updated pivot index, recursively call
   the pivot helper function on the subarray to the left of that index, and
   the subarray to the right of that index.
3. recursive break point - occurs when you consider a subarray
   with less then 2 elements. */

/* Big O complexity */
/*     time        time        time        space  */
/*     best        average     worst       compl. */
/*  O(n log n)   O(n log n)    O(n^2)      O(log n)  */
/* O(log n) - decompositions. O(n) - comparisons per decomposition */

/* worst case is O(n^2) when pivot is the first element and input array is sorted */

/* my helper function with pivot - median element */
function myHelperFunc(arr, start = 0, end = arr.length - 1) {
    // swap helper function
    function swap(arr, i, j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    let index = start;
    let median = Math.floor((start + end) / 2);
    let pivot = arr[median];
    // console.log(arr);
    // console.log('pivot value: ', pivot);
    // console.log('length: ', end);
    // locate all smaller elements at the left and greater at the right
    for (let i = start; i <= end; i++) {
        if (arr[i] < pivot) {
            swap(arr, i, index);
            index++;
        }

        if (pivot < arr[index]) {
            swap(arr, i, index);
        }
        // console.log(`after swapping ${i + 1}: `, arr);
    }
    return index;
}

/* my helper function ES2015 with pivot - median element */
function myHelperFuncES2015(arr, start = 0, end = arr.length - 1) {
    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    }

    let median = Math.floor((start + end) / 2);
    let pivot = arr[median];
    let index = start;
    // console.log('pivot value: ', pivot);
    // console.log('length: ', end);
    for (let i = start; i <= end; i++) {
        if (arr[i] < pivot) {
            swap(arr, i, index);
            index++;
        }

        if (pivot < arr[index]) {
            swap(arr, i, index);
        }
        // console.log(arr);
    }
    return index;
}

/* instructor helper function  pivot - first element */
function helperFunc(arr, start = 0, end = arr.length - 1) {
    function swap(arr, index1, index2) {
        let temp = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = temp;
    }

    let pivot = arr[start];
    let index = start;

    for (let i = start + 1; i <= end; i++) {
        if (pivot > arr[i]) {
            index++;
            swap(arr, i, index);
        }
    }

    swap(arr, start, index);
    return index;
}

function myQuickSort(arr, left = 0, right = arr.length) {
    if (left < right) {
        let index = myHelperFuncES2015(arr, left, right);
        // console.log('index: ', index);
        // console.log('***NEXT***');
        // left subarray case    
        myQuickSort(arr, left, index - 1);
        // right subarray case
        myQuickSort(arr, index + 1, right);
    }
    return arr;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        let index = helperFunc(arr, left, right);
        //left subarray case    
        quickSort(arr, left, index - 1);
        // right subarray case
        quickSort(arr, index + 1, right);
    }
    return arr;
}

let arr1 = [4, 2, 1, 5, 8, 7, 6, 3];
let arr2 = [11, 2, 22, 3, 33, 4, 44, 5, 1, 90];
let arr3 = [99, 3, 88, 6, 77, 9, 66, 12, 55, 15];

// console.log('myHelperFunc(arr1): ', myHelperFunc(arr1));
// console.log('myHelperFunc(arr2): ', myHelperFunc(arr2));

// console.log('myHelperFuncES2015(arr1): ', myHelperFuncES2015(arr1));
// console.log('myHelperFuncES2015(arr2): ', myHelperFuncES2015(arr2));
// console.log('myHelperFuncES2015(arr3): ', myHelperFuncES2015(arr3));

console.log('myQuickSort(arr1): ', myQuickSort(arr1));
console.log('myQuickSort(arr2): ', myQuickSort(arr2));
console.log('quickSort(arr3): ', quickSort(arr3));
