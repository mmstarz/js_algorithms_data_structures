let array1 = ['Michael', 'Melissa', 'Andrea'];

let array2 = [true, {}, [], 2, 'awesome', 'mmstar'];

let foo = new Array(45); // create an empty array with length 45

/*Метод apply() викликає функцію з заданим значенням this і аргументами,
які передані як масив (або масиво-подібний об'єкт). */
/*У той час, як синтаксис цієї функції є майже ідентичним до синтаксису call(),
основною відмінністю є те, що метод call() приймає список аргументів,
тоді як метод apply() приймає єдиний масив аргументів. */
let array6 = Array.apply(null, { length: 10 }).map(Function.call, Math.random);
console.log('array6: ', array6);

const newName = 'mmstar';
const newnumber = 7;

console.log('start array1 assignment:               ', array1);
// push - O(1) Adds new elements to the end of an array, and returns the new length
array1.push(newName);
console.log('array1.push(newName) method result:    ', array1);
// pop - O(1) Removes the last element of an array, and returns that element
array1.pop(newName);
console.log('array1.pop() method result:            ', array1);
// unshift - O(n) Adds new elements to the beginning of an array, and returns the new length
array1.unshift(newName);
console.log('array1.unshift(newName) method result: ', array1);
// shift - O(n) Removes the first element of an array, and returns that element
array1.shift()
console.log('array1.shift() method result:          ', array1);

console.log('array2 assignment:                     ', array2);
// concat - O(n) Joins two or more arrays, and returns a copy of the joined arrays
const array3 = array1.concat(array2);
console.log('array1.concat(array2) method result:   ', array3);
// slice - O(n) Selects a part of an array, and returns the new array
const array4 = array1.slice(0, 3);
console.log('array1.slice(0, 3) method result:      ', array4);

const array5 = array1.slice(-2);
console.log('array1.slice(-2) method result:        ', array5);
// splice - O(n) Adds/Removes elements from an array
array1.splice(0, 0, newName);
console.log('array1.splice(0, 0, newName) method result: ', array1);

array1.splice(-1, 0, newName);
console.log('array1.splice(-1, 0, newName) method result: ', array1);

array1.splice(-2, 1);
console.log('array1.splice(-2, 1) method result:    ', array1);

// Метод includes() з'ясовує, чи масив містить елемент із вказаним значенням,
// та вертає відповідно true або false.
console.log('array1.includes("mmstar"): ', array1.includes('mmstar'));

// Метод filter() створює новий масив з усіма елементами,
// що пройшли пере́вірку вказаною функцією callback.
let array7 = array1.filter(el => el === 'mmstar');
console.log('array1.filter(el => el === "mmstar"): ', array7);
// The reduce() method executes a reducer function(that you provide)
// on each member of the array resulting in a single output value.
let arr1 = [0, 1, 2, 3, 4];
const reducer = (acc, curr, index, array) => acc + curr;
console.log('arr1.reduce(reducer): ', arr1.reduce(reducer));
// arrow function way
// arr1.reduce( (accumulator, currentValue, currentIndex, array) => accumulator + currentValue );
let maxCallback = (acc, cur) => Math.max(acc.x, cur.x);
[{ x: 22 }, { x: 42 }].reduce(maxCallback); // 42
let sum = [0, 1, 2, 3].reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
}, 0); // sum is 6

// swap elements
const swapES2015 = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};

// swap helper function
function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

// Метод reverse() перевертає масив, змінюючи послідовність елементів на протилежну.
// Тобто перший елемент стає останнім, а останній — першим.
let arrayQueue = ['one', 'two', 'three'];
console.log('arrayQueue.reverse("one", "two", "three"): ', arrayQueue.reverse());

// Метод map() створює новий масив з результатами виклику наданої функції
// на кожному елементі цього масиву.
let numbers = [1, 5, 10, 15];
let roots = numbers.map(function (x) {
    return x * 2;
});
// roots зараз [2, 10, 20, 30]
// numbers залишається [1, 5, 10, 15]

let numbers1 = [1, 4, 9];
let roots1 = numbers1.map(Math.sqrt);
// roots зараз [1, 2, 3]
// numbers залишається [1, 4, 9]

// Метод sort() на месте сортирует элементы массива и возвращает отсортированный массив.
// syntax: arr.sort([compareFunction])
let numbers2 = [4, 2, 5, 1, 3];
numbers2.sort(function (a, b) { // функция будет сортировать массив по возрастанию
    return a - b;
});
console.log(numbers2); // [1, 2, 3, 4, 5]

let items = [
    { name: 'Edward', value: 21 },
    { name: 'Sharpe', value: 37 },
    { name: 'And', value: 45 },
    { name: 'The', value: -12 },
    { name: 'Magnetic' },
    { name: 'Zeros', value: 37 }
];
items.sort(function (a, b) {
    if (a.name > b.name) {
        return 1;
    }
    if (a.name < b.name) {
        return -1;
    }
    // a должно быть равным b
    return 0;
});