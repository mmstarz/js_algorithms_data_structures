/* search how many times pattern is the string and return count */

/* steps */
// 1. loop through bigger string
// 2. loop throught shorter string
// 3. if chrs don't match break inner loop
// 4. if chrs don't match keep going
// 5. if inner loop complete and found match increment count.
// 6. return the count.

function naiveStringSerach(long, short) {
    let counter = 0;
    /*if (long.length < short.length) {
        return counter;
    }*/

    for (let i = 0; i < long.length; i++) {
        for (let j = 0; j < short.length; j++) {
            if (long[i + j] !== short[j]) break;
            if (j === short.length - 1) counter++;
        }
    }
    return counter;
}

const long = 'ozwmgomgzomw';
const short = 'om';
const short2 = 'lol;'
console.log('naiveStringSerach(long, short) : ', naiveStringSerach(long, short));
console.log('naiveStringSerach(short, long) : ', naiveStringSerach(short, long));
console.log('naiveStringSerach(long, short2) : ', naiveStringSerach(long, short2));