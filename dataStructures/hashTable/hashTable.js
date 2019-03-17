/* hand made Hash Table class. Collisions - deal with Separate Chaining */

class HashTable {
    constructor(size = 5) { // any size. prime number prefered
        this.keyMap = new Array(size)
    }

    /* hash function */
    _hash(key) {
        let total = 0;
        let WEIRD_PRIME = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            let number = char.charCodeAt(0) - 96;
            total = (total * WEIRD_PRIME + number) % this.keyMap.length;
        }
        return total;
    }

    /* .set() pseudo code:
    1. accepts a key and a value.
    2. hashes the key.
    3. stores the key-value pair in the hash table array via separate chaining.
        4. check if that hashed key index is empty.
        5. if it is not push() that value to the array at that index.
        6. if it is create new array on that index and then push value to that array.
    */
    set(key, value) {
        if (!key || !value) return undefined; // edge case not all arguments passed in
        let index = this._hash(key); // hash key for index in HT.        
        if (!this.keyMap[index]) { // HT[index] empty or not?      
            this.keyMap[index] = []; // create new empty array
        }
        // push new array [key, value] to that HT[index] array
        this.keyMap[index].push([key, value]);
        return this; // return this.keyMap;
    }

    /* .get() pseudo code:
    1. accepts a key.
    2. hashes the key.
    3. retrieves the key-value pair in the hash table.
        4. if it is more than one value loop through array until find the correct value.
        5. if the key is not in the hash table return undefined.
    */
    get(key) { // for now returns only the first of a kind key-value :()
        if (!key) return undefined; // no key edge case
        let index = this._hash(key); // assign index of HT
        if (!this.keyMap[index]) return undefined; // empty HT[index] edge case
        // let result = []; // assign result array
        for (let i = 0; i < this.keyMap[index].length; i++) { // iterate HT[index] array
            if (this.keyMap[index][i][0] === key) { // if key was found
                return this.keyMap[index][i][1]; // return the value of the key passed in
            }
        }
    }
    /* .keys() iterate through the HT array and returns
    an array of unique keys in the HT */
    keys() {
        let keys = []; // keys array assign 
        for (let i = 0; i < this.keyMap.length; i++) { // iterate keyMap
            if (this.keyMap[i]) { // if element not empty
                for (let j = 0; j < this.keyMap[i].length; j++) { // iterate element
                    if (!keys.includes(this.keyMap[i][j][0])) { // unique key check
                        keys.push(this.keyMap[i][j][0]); // add key to keys array
                    }
                }
            }
        }
        return keys; // return keys
    }
    /* .values() iterare through the HT array and returns
    an array of unique values in the HT */
    values() {
        let values = []; // values array assign
        for (let i = 0; i < this.keyMap.length; i++) { // iterate keyMap
            if (this.keyMap[i]) { // ef element not empty
                for (let j = 0; j < this.keyMap[i].length; j++) { // iterate element
                    if (!values.includes(this.keyMap[i][j][1])) { // unique check
                        values.push(this.keyMap[i][j][1]); // add value to values
                    }
                }
            }
        }
        return values;
    }
}

let ht = new HashTable();
ht.set('color1', 'pink');
ht.set('color2', 'red');
ht.set('dogs', 'good');
ht.set('cats', 'better');
ht.set('ns', 'spec');
ht.set('sm', 'nicetry');
ht.set('empty', 'not empty');
console.log('ht.set("one arg try"): ', ht.set('one arg try'));
console.log(ht);
console.log('ht.get("color1"): ', ht.get('color1'));
console.log('ht.get("color2"): ', ht.get('color2'));
console.log('ht.get("ns"): ', ht.get('ns'));
console.log('ht.get("cats"): ', ht.get('cats'));
console.log('ht.get("empty")', ht.get('empty'));
console.log('ht.get("empty key try")', ht.get(''));
console.log('ht.get("no key try")', ht.get());
console.log('ht.keys(): ', ht.keys());
console.log('ht.values(): ', ht.values());