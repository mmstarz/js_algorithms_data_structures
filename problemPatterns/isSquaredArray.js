/* write function to compare two arrays and return true/false */
/*if every value in the array has it's corresponding value squared in the second array*/
/* the frequency of values must be the same */

// [1, 2, 3] -> [1, 9, 4] - return true. order doesn`t matter.
// [1, 2] -> [1, 4, 1] - return false.
// [1, 1, 2] -> [1, 4, 4] - return false.

/* Метод indexOf() повертає перший індекс,
на якому даний елемент був знайдений в масиві,
а якщо він відсутній, то повертає -1. */

/* naive solution (просте рішення). Time complexity N^2 */
function isSquaredArray(arr1, arr2) {
    // check length of arrays
    if (arr1.length !== arr2.length) {
        return false;
    }

    // loop through arr1 
    for (let i = 0; i < arr1.length; i++) {
        // find arr2[index] of correct value
        let correctIndex = arr2.indexOf(arr1[i] ** 2); // square - <number> ** 2
        if (correctIndex === -1) {
            return false;
        }

        // subtract correct element from arr2
        arr2.splice(correctIndex, 1);
    }
    return true;
}

/* refactored solution. Time complexity - O(n) */
function isSquaredArrayRef(arr1, arr2) {
    // arrays length check
    if (arr1.length !== arr2.length) {
        return false;
    }
    // create new objects
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};
    // add values of arrays in objects as a keys and count them
    for (val of arr1)
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    for (val of arr2)
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;

    // iterate through key in object1
    for (let key in frequencyCounter1) {
        // check for valid keys existance in object2
        if (!(key ** 2) in frequencyCounter2) {
            return false
        }

        // check vor valid keys values in objects
        if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
            return false;
        }
    }
    return true;
}

arr1 = [1, 2, 3];
arr2 = [1, 9, 4];
console.log(isSquaredArray(arr1, arr2));

arr3 = [2, 2, 4, 5, 3];
arr4 = [4, 16, 25, 4, 8];
console.log(isSquaredArrayRef(arr3, arr4));