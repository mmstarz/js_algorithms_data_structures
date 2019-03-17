/* Hash Table (HT) - is a data structure used to store key - value pairs.
Another name of Hash Table is Hash Map.

HT are like arrays, but the keys are not ordered.
Unlike arrays, HTs are fast for all of the following operations:
1. finding values.
2. adding new values.
3. removing values.

Nearly every programming language has some sort of hash table data structure.
Bcs of their speed HTs, are very commonly used.

Examples:
1.Python - Dictionaries.
2.JS - Objects and Maps.
3.Java, Go, Scala - Maps.
4.Ruby - Hashes.

Naive solution:
To implement a hash table we'll be using an array.
In order to look up values by key, we need a way to
convert keys into a valid array indices.
A function that performs this task is called a - hash function.

Good Hash Function properties:
1. Has to be Fast (i.e. constant time complexity). ((i.e. - in example)).
2. Doesn't cluster outputs at specific indices, but distribute uniformly. 
3. Deterministic (same input yields same outputs).


Collisions
Strategies for dealing with collisions:
1. Separate Chaining.
At each index in our array we store values using a more sophisticated data structure.
(e.g. an array or linked list). This allows us to store multiple key-value pairs
at the same index.
[[ 0 ],[ 1 ],[ 2 ],[ 3 ],[ 4 ],[ 5 ],[ 6 ],[ 7 ],[ 8 ],[ 9 ]]
                           ^
                       [[color1],
                       [color2]]

                       color1 ->  4
                       color2 ->  4
2. Linear Probing.
With linear probing, when we find a collision, we search through the array
to find the next empty slot. This allows us to store a single key-value pair
at each index.
[[ 0 ],[ 1 ],[ 2 ],[ 3 ],[ 4 ],[ 5 ],[ 6 ],[ 7 ],[ 8 ],[ 9 ]]
                           ^     ^     ^
                           ^     ^     ^
                           ^     ^  [color3]
                           ^  [color2]
                       [color1]                       

                       color1 ->  4
                       color2 ->  4
                       color3 ->  4

/* Big O complexity         HT
            (average case)
insertion    -                 O(1)
removal      -                 O(1)
access(key)  -                 O(1)
search(val)  -                 O(N)
*/


/* Simple Hash function example. Works on strings only */
/* problems:
1. Only hashes strings.
2. Not constant time. Linear in key length.
3. Could be little more random.

const strHash = (key, arrayLen) => {
    let total = 0;
    for (let char of key) {
        // map 'a' to 1, 'b' to 2, 'c' to 3, etc.
        let val = char.charCodeAt(0) - 96;
        total = (total + val) % arrayLen;
    }
    return total;
}
*/


/* Refined simple Hash function */
/* Prime numbers: 
1. The prime number in the hash is helpful in spreading out the keys more uniformly.
2. It's also helpful if the array, that you are putting values into, has a prime length.
3. You don't need to know why (Math is complicated!).
*/
const strHash = (key, arrayLen) => { // arrayLen prefered to be prime number
    let total = 0;
    // prime numbers occurs less collisions instead of even(четное) numbers
    let WEIRD_PRIME = 31; 
    for (let i = 0; i < Math.min(key.length, 100); i++) { // main improvement Math.min()
        // map 'a' to 1, 'b' to 2, 'c' to 3, etc.
        let char = key[i];
        let val = char.charCodeAt(0) - 96;
        total = (total * WEIRD_PRIME + val) % arrayLen;
    }
    return total;
}

console.log('strHash("hello", 10): ', strHash('hello', 13));
console.log('strHash("goodbye", 10): ', strHash('goodbye', 13));
console.log('strHash("cyan", 10): ', strHash('cyan', 13));
console.log('strHash("orangered", 10): ', strHash('orangered', 13));

console.log('strHash("pink", 10): ', strHash('pink', 13));
console.log('strHash("pink", 10): ', strHash('pink', 13));
console.log('strHash("pink", 10): ', strHash('pink', 13));