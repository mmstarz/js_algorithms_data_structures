/* write function which takes a string and 
returns counts for each character in the string */

/* simple examples */
// charCount('aaaa'); // {a: 4};
// charCount('hello'); // {h:1, e:1, l:2, o:1}

/* questons */
// should function return counts for alphabet characters that are not in a string? 

/* more complex examples */
// input: 'my phone number is 46789456'
// input: 'Hello hi'

/* questions */
// what about whitespaces and numbers?
// what about lower and upper cases?

/* explore the empty input */
// what if there is no input or an epmty string?

/* questions */
// should it return an epmty object? null? false? undefined? error?

/* explore the examples with invalid inputs */
// what if input is not a string? 
// what if input is a number, boolean, an object, null?

/*function charCount(str) {
    // do something

    // return an object with keys that are lowercase
    // alphanumeric characters in the string 

    // values should be the counts for those characters in the string
}*/

function charCount(str) {
    // assign object for return
    let result = {};
    // if return result do not need uppercase letters
    /* string .toLowerCase() needs reassignment to itself to work correctly */
    // str = str.toLowerCase();
    // loop over inputed string for each character...

    for (let symbol of str) {        
        if (isAlphaNumeric(symbol)) {
            symbol = symbol.toLowerCase();
            result[symbol] = ++result[symbol] || 1; // (true || false)
        }
    }

    /*for (let symbol of str) {
        symbol = symbol.toLowerCase();
        if (/[a-z0-9]/.test(symbol)) {
            result[symbol] = ++result[symbol] || 1; // (true || false)
        }
    }*/

    /*for (let i = 0; i < str.length; i++) {...}*/

    /*let symbol = str[i].toLowerCase();
    if (/[a-z0-9]/.test(symbol)) {
        if (result[symbol] > 0) {
            result[symbol]++;
        } else {
            result[symbol] = 1;
        }
    }*/

    /*if(/[a-z0-9]/gi.test(str[i])) {
        if (result[str[i]] > 0) {
            result[str[i]]++;
        } else {
            result[str[i]] = 1;
        }
    }*/

    /*if (symbol === ' ') {
        
    } else if (symbol >= 'A' && symbol <= 'Z') {
        if (result[symbol] > 0) {
            result[symbol]++;
        } else {
            result[symbol] = 1;
        }
    } else if (symbol >= 0 && symbol <= 9) {
        if (result[symbol] > 0) {
            result[symbol]++;
        } else {
            result[symbol] = 1;
        }
    } else if (symbol >= 'a' && symbol <= 'z') {
        if (result[symbol] > 0) {
            result[symbol]++;
        } else {
            result[symbol] = 1;
        }
    }*/


    /* array of keys */
    // console.log(Object.keys(result));

    /* list of key:value pairs */
    // console.log(Object.entries(result));

    return result;
    // if char is a number/letter AND key in object, add one to count
    // if char is a number/letter AND not a key in an object, add it to object and set value to one
    // if char is something else (space, period, etc.) don't do anything

    // return object at the end
}

/* alpha numeric check for symbol through ASCII  is faster then with regular expresions */
function isAlphaNumeric(char) {
    /* .charCodeAt() function that return ascii number of letters/numbers */
    let code = char.charCodeAt(0);
    if (!(code > 47 && code < 58) &&   // Numeric (0 - 9)
        !(code > 64 && code < 91) &&   // apper Alpha (A-Z)
        !(code > 96 && code < 123)) {  // lower Alpha (a-z)
        return false;
    }
    return true;
}

str1 = 'my PHONE number is 123456!';
str2 = '1 2 3 H E l l o';
console.log(charCount(str1));