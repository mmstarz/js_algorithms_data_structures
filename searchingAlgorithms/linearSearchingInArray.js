/* search is unordered lists can be achieved with help of:
Array.prototype.indexOf().
indexOf() - повертає перший індекс, на якому даний елемент був знайдений в масиві,
а якщо він відсутній, то повертає -1.

Array.prototype.includes().
includes() - визначає чи може один рядок бути знайденим всередині іншого,
повертаючи true або false за необхідності.
const str = 'To be, or not to be, that is the question.';
console.log(str.includes('To be'));       // true
console.log(str.includes('question'));    // true
console.log(str.includes('nonexistent')); // false
console.log(str.includes('To be', 1));    // false
console.log(str.includes('TO BE'));       // false

Array.prototype.find().
find() - повертає значення першого елементу в масиві,
що задовільняє передану функцію тестування. Інакше вертається undefined.
/* .find() examples */
/*
// example 1
let arr = [111, 222, 333, 444, 555, 666];
let visited = [];
const found = arr.find(function(value, index, array) {
  visited.push(value);
  if (value === 222) {
    delete array[2];       // 333
    array[4] = undefined;  // 555
  }
  return false;
});
console.log(found);    // виводить undefined
console.log(arr);      // [111, 222, undefined, 444, undefined, 666]
console.log(visited);  // [111, 222, undefined, 444, undefined, 666]

// example 2
const inventory = [
    {name: 'apples', quantity: 2},
    {name: 'bananas', quantity: 0},
    {name: 'cherries', quantity: 5}
];

function findCherries(fruit) { 
    return fruit.name === 'cherries';
}
// виводить { name: 'cherries', quantity: 5 }
console.log(inventory.find(findCherries));


findIndex() - возвращает индекс в массиве, если элемент удовлетворяет
условию проверяющей функции. В противном случае возвращается -1.
// example 
function isPrime(element, index, array) {
  var start = 2;
  while (start <= Math.sqrt(element)) {
    if (element % start++ < 1) {
      return false;
    }
  }
  return element > 1;
}
console.log([4, 6, 8, 12].findIndex(isPrime)); // -1, не найдено
console.log([4, 6, 7, 12].findIndex(isPrime)); // 2


All of this functions doing the same - linear search */

/* linear search pseudo code */
/* time complexity - O(n) */
const arr1 = ['one', 'two', 'three', 333]
function pseudoSearch(arr, val) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === val) return i;
    }
    return -1;
}

// console.log('pseudoSearch([one, two, three, 333], 333) : ', pseudoSearch(arr1, 333));

