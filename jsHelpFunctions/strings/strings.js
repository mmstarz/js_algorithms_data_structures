/* Метод charCodeAt() возвращает числовое значение
Юникода для символа по указанному индексу
(за исключением кодовых точек Юникода, больших 0x10000).
Syntax:
str.charCodeAt(index);

Метод toLowerCase() повертає той самий рядок,
але з літерами переведеними до нижнього регістра.
Syntax:
str.toLowerCase();

*/
/* code for 'a' */
console.log('"a".charCodeAt(0): ', "a".charCodeAt(0));
/* code for 'h' */
console.log('"hi".charCodeAt(0): ', "hi".charCodeAt(0));
/* code for 'i' */
console.log('"hi".charCodeAt(1): ', "hi".charCodeAt(1));

/* ASCII a-97, z-122, A-65, Z-90 */

/* alphabetic position of the first character of the string */
console.log('alphabetic position str(0): ', "a".charCodeAt(0) - 96);
/* alphabetic position of the first character of the string */
console.log('alphabetic position str(0): ', "z".charCodeAt(0) - 96);
/* alphabetic position of the second character of the string */
console.log('alphabetic position str(1): ', "hi".charCodeAt(1) - 96);

/* alphabetic position of the first character of the string */
console.log('alphabetic position str(0): ', "A".charCodeAt(0) - 64);
/* alphabetic position of the first character of the string */
console.log('alphabetic position str(0): ', "Z".charCodeAt(0) - 64);
/* alphabetic position of the second character of the string */
console.log('alphabetic position str(1): ', "HI".charCodeAt(1) - 64);

const charsum = function (str) {
    str = str.toLowerCase(); // convert string to lower case
    let total = 0; // result assign
    for (let i = 0; i < str.length; i++) { // loop through str
        total += str.charCodeAt(i) - 96; // add alphabetical char number to result
    }
    return total;
}

console.log('charsum("HELLO"): ', charsum('HELLO'));