/* element tree comparison sorting algorithm */

/* insertion sort: build up the sort by gradually creating
a larger left half which is always sorted */

/* steps */
// 1. start by picking the second element in the array.
// 2. now compare the second element with the one before it and swap if nessesary.
// 3. continue to the next element and if it is in the incorrect order,
//    iterate through the sorted portion(i.e the left side) to place the element in
//    the correct place.
// 4. repeat until array is sorted

/* Big O complexity */
/*     time        time        time        space */
/*     best        average     worst       compl.*/
/*     O(n)        O(n^2)      O(n^2)      O(1)  */


/* insertion sort my solution */
function myInsertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i - 1]) {
            for (let j = 0; j < i; j++) {
                if (arr[i] < arr[j]) {
                    let temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                }
            }
        }
    }

    return arr;
}

/* insertion sort naive solution */
function insertionSortNaive(arr) {
    for (let i = 1; i < arr.length; i++) {
        // not working for arr[i] < arr[j]! arr[j+1] < arr[j] only
        for (let j = i - 1; j >= 0 && arr[j + 1] < arr[j]; j--) {
            let temp = arr[j + 1]
            arr[j + 1] = arr[j];
            arr[j] = temp;
        }
    }
    return arr;
}

/* insertion sort naive ES2015 */
const insertionSortES2015 = (arr) => {
    const swap = (arr, index1, index2) => {
        [arr[index1], arr[index2]] = [arr[index2], arr[index1]]
    }

    for (let i = 1; i < arr.length; i++) {
        // not working for arr[i] < arr[j]! arr[j+1] < arr[j] only
        for (let j = i - 1; j >= 0 && arr[j + 1] < arr[j]; j--) {
            swap(arr, j + 1, j);
        }
    }
    return arr;
}

let arr1 = [9, 1, 8, 2, 7, 3, 6, 4];
let arr2 = [5, 6, 7, 1, 23, 2, 15, 3];
let arr3 = [11,98,12,87,13,76,14,65];
console.log('myInsertionSort(arr1)', myInsertionSort(arr1));
console.log('insertionSortNaive(arr2)', insertionSortNaive(arr2));
console.log('insertionSortES2015(arr3)', insertionSortES2015(arr3));
