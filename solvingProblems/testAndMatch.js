/* test and match functions*/

/* regexp
Об'єкт регулярного виразу. Якщо передати значення value іншого типу,
його буде зведено до RegExp за допомогою оператора new RegExp(value).
Якщо жодного параметра не вказано, метод поверне масив 
з одним елементом — порожнім рядком: ['']. */

/* Вертає масив, якщо знайдено збіги.
Першим елементом масиву завжди буде ввесь підрядок,
що відповідає регулярному виразові, а за ним — низка захоплених підрядків,
які відповідають підвиразам у круглих дужках (якщо регулярний вираз містить такі).
Якщо збігів не знайдено, метод вертає значення null. */

/* Приклад нижче засвідчує дію прапорців i (ignore case — регістронезалежний режим)
та g (global — пошук усіх збігів, а не тільки першого-ліпшого)
при використанні метода match(). */

function testChecking(str) {
    str = str.toLowerCase();
    // <what to look for>.test(<where to look>) return true/false
    let result = /[a-z0-9]/.test(str);
    return result;
}

function matchChecking(str) {
    //str = str.toLowerCase();
    // <where to look>.match(<what to look for>) return array or null
    let result = str.match(/[a-z0-9]/gi);
    return result;
}

const str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
const regexp = /[A-E]/gi;
let matches_array = str.match(regexp);
console.log(matches_array);

str1 = 'ABC123';
str2 = '';
console.log('testChecking: ', testChecking(str2));
console.log('matchChecking: ', matchChecking(str1));