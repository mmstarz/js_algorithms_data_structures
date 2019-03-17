/* With given two strings write function to determine,
if the second string is an anagram of the first.
Anagram is a word, phrase or name formed by rearanging the letters 
of another, such as cinema, formed from iceman. */

/* simple examples */
// isAnagram('', '') - return true;
// isAnagram('aaz', 'zza') - return false;
// isAnagram('anagram', 'nagaram') - rturn true;
// isAnagram('rat', 'car') - return false;
// isAnagram('awesome', 'awesom') - return false;
// isAnagram('qwerty', 'qeywrt') - return true;
// isAnagram('texttwistime', 'timetwistext') - return true;

function isAnagram(str1, str2) {
    // check length
    if (str1.length !== str2.length) {
        return false;
    }
    // assign object for symbols
    let frequencyCounter = {};

    // add single characters to the object as a keys
    for (symbol of str1) {
        // same register
        symbol = symbol.toLowerCase();
        frequencyCounter[symbol] ? frequencyCounter[symbol] += 1 : frequencyCounter[symbol] = 1;
    }

    for (symbol of str2) {
        // same register
        symbol = symbol.toLowerCase();
        // check for valid key
        if (!frequencyCounter[symbol]) {
            return false;
        } else {
            frequencyCounter[symbol] -= 1;
        }
    }
    return true;
}


/* results */
console.log('check " " and " " -', isAnagram('', ''));
console.log('check "aaz" and "zza" -', isAnagram('aaz', 'zza'));
console.log('check "TOR" and "ort" -', isAnagram('TOR', 'ort'));
console.log('check "anAgram123" and "nagarAm321" -', isAnagram('anAgram123', 'nagarAm321'));
console.log('check "rat" and "car" -', isAnagram('rat', 'car'));
console.log('check "awesome" and "awesom" -', isAnagram('awesome', 'awesom'));
console.log('check "qwerty" and "qeywrt" -', isAnagram('qwerty', 'qeywrt'));
console.log('check "cinEma" and "Iceman" -', isAnagram('cinEma', 'Iceman'));
console.log('check "text twistime" and "timetwis text" -', isAnagram('text twistime', 'timetwis text'));