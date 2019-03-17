/* dividing with % module */
let number1 = 100010001;
let number2 = 10001;
let number3 = 1;
console.log('100010001 % 11: ', number1 % 11);
console.log('10001 % 11: ', number2 % 11);
console.log('1 % 11: ', number3 % 11);

/*Фукнція Math.max() повертає найбільше значення
із довільної кількості (0 та більше) аргументів.*/
console.log('Math.max(1, 3, 2): ', Math.max(1, 3, 2));
// expected output: 3
console.log('Math.max(-1, -3, -2): ', Math.max(-1, -3, -2));
// expected output: -1
const array1 = [1, 3, 2];
console.log('Math.max(...array1): ', Math.max(...array1));
// expected output: 3

/*Статична функція Math.min() повертає найменше з чисел, поданих на вхід,
або ж NaN, якщо жоден із аргументів не є числом та не може бути перетворений у нього.*/
console.log('Math.min(2, 3, 1): ', Math.min(2, 3, 1));
// expected output: 1
console.log('Math.min(-2, -3, -1): ', Math.min(-2, -3, -1));
// expected output: -3
const array2 = [2, 3, 1];
console.log('Math.min(...array1): ', Math.min(...array1));
// expected output: 1

/*Функція Math.random() повертає псевдо-випадкове число із рухомою комою
з проміжку 0–1 (включно із 0, але не включаючи 1) із приблизно
рівномірним розподілом значень на ньому
(в подальшому його можна масштабувати до потрібних розмірів).
Вихідне зерно-параметр для алгоритму генерації
випадкового числа обирається реалізацією; воно не може бути обраним
чи перевизначеним користувачем. */

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
console.log('Math.floor(Math.random() * Math.floor(max)): ', getRandomInt(3));
// expected output: 0, 1 or 2
console.log('Math.floor(Math.random() * Math.floor(max)): ', getRandomInt(1));
// expected output: 0
console.log('Math.random(): ', Math.random());
// expected output: a number between 0 and 1

/* Метод Math.floor() повертає найбільше ціле число, менше або рівне даному числу. */
console.log('Math.floor(45.95): ', Math.floor(45.95));
// expected output: 45
console.log('Math.floor(-45.05): ', Math.floor(-45.05));
// expected output: -46
console.log('Math.floor(4): ', Math.floor(4));
// expected output: 4