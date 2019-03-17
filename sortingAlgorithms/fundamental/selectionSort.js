/* element tree comparison sorting algorithm */

/* Selection sort is similar to bubble sort algorithm,
but instead of first placing large values into sorted position, 
it places small values into sorted position.*/

/* steps */
// 1. store the first value as the "minimum" value
// 2. compare this item with the next item in the array until find smaller value.
// 3. if the smaller value was found designate that smaller value to be "new minimum",
//    and continue until the end of the array.
// 4. if the "minimum" is not value(index) you initially began with swap two values.
// 5. repeat it with the next elements until array is sorted.

/* Big O complexity */
/*     time        time        time        space */
/*     best        average     worst       compl.*/
/*     O(n^2)      O(n^2)      O(n^2)      O(1)  */

/* naive selection sort */
function selectionSortNaive(arr) {
    for (let i = 0; i < arr.length; i++) {
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }

        if (i !== min) {
            let temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
    }
    return arr;
}

/* ES 2015 Selection Sort */
const selectionSortES2015 = (arr) => {
    const swap = (arr, index1, index2) => {
        [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
    }

    for (let i = 0; i < arr.length; i++) {
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }

        if (i !== min) {
            swap(arr, i, min);
        }
    }
    return arr;
}

/* my selection sort */
function mySelectionSortNaive(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[i]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

let arr1 = [35, 24, 13, 1, 12, 23, 34];
let arr2 = [71, 62, 53, 2, 51, 63, 72];
let arr3 = [2, 1, 5, 7, 9, 4, 3];
console.log('selectionSortNaive(arr1): ', selectionSortNaive(arr1));
console.log('mySelectionSortNaive(arr2): ', mySelectionSortNaive(arr2));
console.log('selectionSortES2015(arr3): ', selectionSortES2015(arr3));
