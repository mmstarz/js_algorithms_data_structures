/* Doubly Linked List (DLL) is almost identical to Singly Linked List (SLL),
except every node has another pointer, to the previous node.

DLL always takes more memory then SLL.
More memory === More flexibility.(It's almost always a tradeof!)
*/

/* Big O complexity         DLL                    Array
insertion -                 O(1)                   O(N) - average
removal   -                 O(1)                   O(N)
searching -                 O(N), O(N/2)           O(1)
access    -                 O(N)                   O(1)
*/

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

// let first = new Node(0);
// first.next = new Node(1);
// 
// first.next.prev = first;
// 
// console.log(first.prev);
// console.log(first.val);
// console.log(first.next.val);
// console.log(first.next.prev.val); // first.val
// console.log(first.next.next);


class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    /* .push(val) takes a value and adds a  new node to the end of the DLL.
    .push() pseudo code:
    1. create a new node with a value passed to the function
    2. if the head property is null, assign the head and the tail to be the new node.
    3. otherwise, set the next property on the tail to be that node.
    4. set the previous property of the newly created node to be the tail.
    5. set the tail to be newly created node.
    6. increment the length.
    7. return the DLL. 
    */
    push(val) {
        if(!val) return undefined;
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    /* .pop() removing a node from the end of the DLL.
    .pop() pseudocode:
    1. if there is no head(no tail or length === 0) return undefined.
    2. store the removing tail in a variable to return it later.
    3. edge case: if the length is 1 set the head and the tail to be null.
    4. update this.tail to be the previous of removing tail.
    5. set this.tail.next property to be null.(set the removed.prev no be null,
       to prevent access to the entire DLL properties through result node).
    6. decrement the length.
    7. return the removed tail.
    */
    pop() {
        if (!this.head) return undefined;
        let removed = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = removed.prev;
            this.tail.next = null;
            removed.prev = null;
        }

        // removed.prev = null;
        this.length--;
        return removed;
    }
    /* .shift() removes a node from the beginning of the DLL.
    .shift pseudocode:
    1. edge case: if this.length === 0(or !this.head or !this.tail) return undefined.
    2. store removing head in a variable.
    3. if this.length === 1 set this.head = null and this.tail = null.
    4. update this.head to be the next of the removed node.
    5. after that set this.head.prev to null(set the removed.next no be null,
       to prevent access to the entire DLL properties through result node).
    6. decrement this.length.
    7. return removed head.
    */
    shift() {
        if (!this.head) return undefined;
        let removed = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = removed.next;
            this.head.prev = null;
            removed.next = null;
        }

        // removed.next = null;
        this.length--;
        return removed;
    }
    /* .unshift() adding a node to the beginning of the DLL.
    .unshift() pseudocode:
    1. create a newNode with a value passed to the function.
    2. edge case: if !this.head or !this.tail or this.length === 0,
       set this.head to  be the newNode and this.teil to be the newNode.
    3. otherwise, set the prev property on the head of the DLL to be the newNode.
    4. set the nex property of the newNode to be the head.
    5. update the head to be the newNode.
    6. increment this.length.
    7. return this.
    */
    unshift(val) {
        if(!val) return undefined;
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }

        this.length++;
        return this;
    }
    /* .get(index) accessing a node in DLL by it's position.
    .get() pseudocode:
    1. edge case: check if index is less then 0,
       or greater or equal to the length return null.
    2. if index is less then the half of the length of the DLL,
       loop througth the list from head to middle.
       return the node once it found.
    3. if index is greater the the half of the length of the DLL,
       loop through the list from tail to middle.
       return the node once it found.    
    */
    get(index) {
        // console.log(Math.floor(this.length / 2));
        if (index < 0 || index >= this.length) return undefined;
        else if (index === 0) return this.head;
        else if (index === this.length - 1) return this.tail;

        if (index <= Math.floor(this.length / 2)) {
            let curr = this.head;
            for (let i = 0; i < index; i++) {
                curr = curr.next;
                // console.log(curr.val);
            }
            return curr;
        } else {
            let curr = this.tail;
            for (let i = this.length - 1; i > index; i--) {
                curr = curr.prev;
                // console.log(curr.val);
            }
            return curr;
        }
    }
    /* .set() replacing the value of a node in a DLL
    .set() pseudocode:
    1. create a variable that is a result of a .get() method,
       of the index that passed to the fucntion.
    2. if the .get() method return a valid node, set the value
       of that node to be the value passed to the fucntion.
    3. return true.    
    */
    set(index, value) {
        if(!value) return false;
        // index edge cases already checked in .get() method
        let found = this.get(index); // store found node in a variable        
        if (found === undefined) return false; // if node is invalid

        found.val = value; // set new value
        return true;
    }
    /* .insert() adding new node to the DLL at a certain position
    .insert() pseudocode:
    1. function takes index and a value.
    2. if index is less then zero or is greater then this.length return false.
    3. if index is zero use .unshift() method.
    4. if index is same as this.length use .push() method.
    5. otherwise use .get() method to access the item right before the index.
    6. set the next and prev properties on the correct nodes to link everything
       together 
    7. increment this.length.
    8. return true.
    */
    insert(index, value) {
        if(!value) return false;
        // index edge cases
        if (index < 0 || index > this.length) return false;
        else if (index === 0) return !!this.unshift(value);
        else if (index === this.length) return !!this.push(value);
        // assign variables for newNode and previous one
        let newNode = new Node(value);
        let prevNode = this.get(index - 1);
        // connections setup
        prevNode.next.prev = newNode;
        newNode.next = prevNode.next;
        prevNode.next = newNode;
        newNode.prev = prevNode;
        // console.log(prevNode);
        // console.log(newNode);
        // console.log(newNode.next);
        this.length++;
        return true;
    }
    /* .remove() removes a node from th DLL by an index.
    .remove() pseudocode:
    1. function takes index.
    2. if index is less then 0 or greater then or equal to this.length return undefined.
    3. if index is zero use .shift() method.
    4. if index is this.length - 1 use .pop() method.
    5. otherwise use .get() method to find the node.
    6. set up connections between previous and next nodes.
    7. erase connections of removing node(next = null, prev = null).
    8. decrement this.length.
    9. return removed node.
    */
    remove(index) {
        // index edge cases
        if (index < 0 || index >= this.length) return undefined;
        else if (index === 0) return this.shift();
        else if (index === this.length - 1) return this.pop();
        // store removing node
        let removed = this.get(index);
        // setup connections
        removed.next.prev = removed.prev;
        removed.prev.next = removed.next;
        // erase connections
        removed.next = null;
        removed.prev = null;
        this.length--;
        return removed;
    }
    /* return an array of values of the DLL from head -> tail */
    traverse() {
        let curr = this.head;
        let result = [];
        while (curr) {
            result.push(curr.val);
            curr = curr.next;
        }
        return result;
    }
    /* return an array of values of the DLL from tail -> head */
    reverse() {
        let curr = this.tail;
        let result = [];
        while (curr) {
            result.push(curr.val);
            curr = curr.prev;
        }
        return result;
    }
}

let List = new DoublyLinkedList();
List.push('HEAD');
List.push(1);
List.push(2);
List.push(3);
List.push(4);
List.push(5);
List.push('TAIL');
console.log('traverse DLL   : ', List.traverse());
console.log('***.pop()***   : ', List.pop());
console.log('traverse DLL   : ', List.traverse());
console.log('***.shift()*** : ', List.shift());
console.log('traverse DLL   : ', List.traverse());
List.unshift('HEAD');
List.push('TAIL');
console.log(`***after unshift('HEAD') and push('TAIL') ***`);
console.log('traverse DLL   : ', List.traverse());
console.log('List.get(2)    : ', List.get(2).val);
console.log('List.get(3)    : ', List.get(3).val);
console.log('List.get(4)    : ', List.get(4).val);
console.log('List.get(0)    : ', List.get(0).val);
console.log('List.get(6)    : ', List.get(6).val);
console.log('List.get(7)    : ', List.get(7));
console.log('List.set(7, onetwo)     : ', List.set(7, 'onetwo'));
console.log('List.set(-1, threefour) : ', List.set(-1, 'threefour'));
console.log('List.set(0, newHEAD)    : ', List.set(0, 'newHEAD'));
console.log('List.set(0, newTAIL)    : ', List.set(6, 'newTAIL'));
console.log('List.set(1, 5)    : ', List.set(1, 5));
console.log('List.set(2, 4)    : ', List.set(2, 4));
console.log('List.set(4, 2)    : ', List.set(4, 2));
console.log('List.set(5, 1)    : ', List.set(5, 1));
console.log('traverse DLL   : ', List.traverse());
List.shift();
List.pop();
console.log(`***after shift('newHEAD') and pop('newTAIL') ***`);
console.log('traverse DLL   : ', List.traverse());
console.log('List.insert(0, HEAD)    : ', List.insert(0, 'HEAD'));
console.log('List.insert(6, TAIL)    : ', List.insert(6, 'TAIL'));
console.log('traverse DLL   : ', List.traverse());
console.log('List.remove(-1) : ', List.remove(-1));
console.log('List.remove(7) : ', List.remove(7));
console.log('List.remove(0) : ', List.remove(0));
console.log('List.remove(5) : ', List.remove(5));
console.log('List.remove(2) : ', List.remove(2));
console.log('traverse DLL   : ', List.traverse());
