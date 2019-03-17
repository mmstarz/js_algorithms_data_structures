// piece of data - value.
// reference to the next node or null.

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// let first = new Node('Hi');
// first.next = new Node('there');
// first.next.next = new Node('how');
// first.next.next.next = new Node('are');
// first.next.next.next.next = new Node('you');
// 
// console.log(first.val);
// console.log(first.next.val);

/* Big O complexity         LL                  Array
insertion -              O(1)                   O(N) - average
removal   - it depends   O(1) or O(N)           O(N)
searching -              O(N)                   O(1)
access    -              O(N)                   O(1)
*/

/* Recap:
1. SLL are an excellent alternative to the arrays,
when insertion and deletion at the beginning are frequently required.
2. Arrays have a built in index and LL do not.
3. The idea of a List data structure that consists of nodes is the 
foundation for other data structures like Stacks and Queues.
*/


class SinglyLinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    /* .push() pseudo code:
    1. function should accept a value.
    2. create a new node using the value passed to the function.
    3. if there is no head property on the list, set the head and the tail
       to be newly created node.
    4. otherwise set the next property on the tail, to be the new node.
       Set the tail property on the list to be the newly created node.
    5. increment the length by one.
    6. return the linked list.
    */
    // add value to the end of SLL
    push(val) {
        if (!val) return undefined;
        let newObj = new Node(val); // new object of data structure
        // edge case situation
        if (!this.head) {
            this.head = newObj;
            this.tail = this.head;
        } else {
            // assign newNode to be the next node to the old tail
            this.tail.next = newObj;
            // assign newNode to be new tail
            this.tail = newObj;
        }
        // increment the LL length
        this.length++;
        // return the LL
        return this;
    }
    // traverse(перетинати/рухатись через) throught entire LL
    // and return an array of values of LL nodes
    traverse() {
        let curr = this.head;
        let result = [];
        // print value until reach null (tail.next)
        while (curr) {
            result.push(curr.val);
            curr = curr.next;
        }
        return console.log(result);
    }
    /* .reverse() pseudo code:
    1. swap the head and the tail
    2. create a variable called next(stores next element after current)
    3. create a variable called prev(stores previous before current element)
    4. create a variable called current and initialize it to the head property.
    5. loop throung the list
    6. set the next to be the next property on whatever node is
    7. set the next property on the node to be whatvever prev is
    8. set prev to be the the value of the node variable
    9. set the node variable to be the value of the next variable
    10 return this
    */
    // reversing the LL in place
    myReverse1Try() {
        let result = [];
        let temp = this.head;
        let curr = this.head;
        while (temp) {
            result.push(temp.val);
            temp = temp.next;
        }
        // console.log(result);
        for (let i = this.length - 1; i >= 0; i--) {
            curr.val = result[i];
            curr = curr.next;
        }
        this.traverse();
        return this;
    }

    myReverse2Try() {
        // swap head and tail
        let first = this.head;
        this.head = this.tail;
        this.tail = first;
        // assign prev variable for the first time(null by default from this.tail.next)
        let prev = null;

        for (let i = 0; i < this.length; i++) {
            // store next to the first element of the LL in a variable
            let second = first.next; // {this.head.next}++ moves to next element in old LL
            // assign next to the first element of the LL to be the prev element
            first.next = prev; // rewrite first next link to prev
            // {first} -> {prev}
            // regroup  elements in LL order 
            // assign prev element to be the first element         
            prev = first; // prev takes first properties {first} -> {first}
            // assign first element to be the second element
            first = second; //  first takes first.next properties {first.next} -> {first}
            /*
            tail                               head
            [0] -> [1] -> [2] -> [3] -> [4] -> [5] -> [null]
            first->second                              prev            
            */
        }
        this.traverse();
        return this;
    }

    reverse() {
        // swap head and tail properties
        let node = this.head;
        this.head = this.tail;
        this.tail = node;

        let next = null;
        let prev = null;

        for (let i = 0; i < this.length; i++) {
            next = node.next;
            node.next = prev;

            prev = node;
            node = next;
        }
        this.traverse();
        return this;
    }
    /* .pop() pseudo code:
    1. if there are no nodes in the list, return undefined. (if length === 0 or if !this.head)
    2. loop through entire list until reach the tail
    3. set the next property, of the second to last node, to be null.
    4. set the tail to be the 2nd to last node.
    5. decrement the length.
    6. return the value of the node removed.
    */
    // remove value from the end of the SLL
    pop() {
        // edge case
        if (!this.head) return undefined;
        // assign 2 variables for loop till tail.
        let temp = this.head;
        let newTail = temp;
        // loop while there is a next object
        while (temp.next) {
            // move newTail after temp so it's always 1 step before temp
            newTail = temp;
            // move temp till reach the current tail
            temp = temp.next;
        }
        // assign tail to be the 2nd node from the end
        this.tail = newTail;
        // assign newTail next to be null(delete the reference to prev. tail from the LL)
        this.tail.next = null;
        // decrement length of hte SLL
        this.length--;
        // if first element of LL have been removed
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        // return the tail node, that have been removed from SLL
        return temp;
    }
    /* .shift() pseudo code:
    1. if there are no nodes return undefined
    2. store the current head property in a variable
    3. set the head property to be the current head's next property
    4. decrement the length by 1
    5. return the value of the node removed 
    */
    // removes new node from the beginning of the LL
    shift() {
        // edge case before run
        if (!this.head) return undefined;
        // store this.head node in a variable
        let current = this.head;
        // make this.head to be the next one property
        this.head = current.next;
        // decrement this.length 
        this.length--;
        // if first element of LL have been removed
        if (this.lenght === 0) {
            this.tail = null;
        }
        // return the oldHead node
        return current;
    }
    /* .unshift() pseudo code:
    1. the function should accept the value
    2. create a new node using the passed value to the function
    3. if there is no head property on the list,
       set the head and tail to be the newly created node
    4. otherwise set the newly created node's next property
       to be the current head property on the list
    5. set the head property on the list to be that newly created node
    6. increment the length of the list by one
    7. return the LL
    */
    // add new node to the beginning of the LL
    unshift(val) {
        if (!val) return undefined;
        // create new Node of val
        let newHead = new Node(val);
        // edge case
        if (!this.head) {
            this.head = newHead;
            this.tail = this.head;
        } else {
            // assign oldHead to be newHead's next property
            newHead.next = this.head;
            // assign newHead to be LL head
            this.head = newHead;
        }
        // increment length
        this.length++;
        // return whole LL
        return this;
    }
    /* .get() pseudo code:
    1. function should accept the index
    2. if the index is less then zero or greater then or equal to
       the length of the LL return null(undefined/eror notification)
    3. loop through the list until you rerach the index and return the node
       at that specific index
    */
    // retrieving(отримувати) a node by it's position in the LL
    get(index) {
        // edge cases
        if (index < 0 || index >= this.length) {
            return null;
        }
        // assign variable for traverse throught the entire LL
        let curr = this.head;
        // loop throught until get the Node of index
        for (let i = 0; i < index; i++) {
            curr = curr.next
        }
        // return that node
        return curr;
    }
    /* .set() pseudo code
    1. function should accept a value and an index
    2. use get method to find specific node
    3. if the node is not found return false
    4. if the node is found, set the value of that node to be the value pased 
       to the function and return true 
    */
    // method changing the value of a node based on it's position in the LL
    set(val, index) {
        if(!val) return false;
        // assign variable for found node
        let temp = this.get(index);
        // check if found node is not null
        if (temp) {
            // change value of that node and return true
            temp.val = val;
            return true;
        }
        // otherwise return false
        return false;
    }
    /* .insert() pseudo code:
    1. function takes index and a value
    2. if index is less then zero or greater then the length, return false
    3. if the index is same as the length .push() newNode to the end of the LL
    4. if the index is zero, .unshift() newNode to the beginning of the LL
    5. otherwise, using .get() method, access to the prevNode at index - 1
    6. set the next property of prevNode to be the newNode
    7. then set newNode next property to be the oldNode of that index
    8. increment the length
    8. return true
    */
    // insert new node on the index passed to the function
    insert(index, val) {
        if (!val) return undefined;
        // edge cases
        if (index < 0 || index > this.length) return false;
        // inserting first element
        else if (index === 0) return !!this.unshift(val); // return from this into boolean
        // inserting last element
        else if (index === this.length) return !!this.push(val); // opposite opposite to .push(val)

        // inserting in the middle of the LL
        // assign newNode of the velue passed in function
        let newNode = new Node(val);
        // find prevNode 
        let prevNode = this.get(index - 1);
        // store old node in a veriable
        let temp = prevNode.next;
        // insert newNode at it's index
        prevNode.next = newNode;
        // connect oldNode to the newNode next
        newNode.next = temp; // prevNode.next.next = temp; also works
        // increment length
        this.length++;
        // return List
        return true;
    }
    /* .remove() pseudo code:
    1. define a function which accepts an index
    2. if index is less then zero or greater then or equal to the length return undefined
    3. if index is same as length - 1 use .pop() method
    4. if index equal to zero use .shift() method
    5. otherwise use .get() method to access prevNode at the index - 1 position
    6. set the next property of the prevNode to be the next of the next node
    7. decrement the length
    8. return removed node
    */
    // remove node from the LL at a specific position
    remove(index) {
        // edge cases
        if (index < 0 || index >= this.length) return undefined;
        // removing first element
        else if (index === 0) return !!this.shift();
        // removing last element
        else if (index === this.lnegth - 1) return !!this.pop();

        // assign Node previous to the removing Node
        let prevNode = this.get(index - 1);
        // store remoNode in a variable
        let removeNode = prevNode.next; // let temp = prevNode.next.next; 
        // link prevNode and next to removeNode Node
        prevNode.next = removeNode.next; // prevNode.next = temp; also works
        // decrement the length of LL
        this.length--;
        // return removed node
        return removeNode;
    }
}

let List = new SinglyLinkedList();
List.traverse();
console.log('***NEXT***');
console.log('adding element to the end');
List.push('hi');
List.push('there');
List.push('How');
List.push('are');
List.push('you');
List.push(99);
console.log('***After .push() x 6***')
List.traverse();
console.log('***NEXT***');
console.log('removing last element: ', List.pop().val);
console.log('***After .pop()***');
List.traverse();
console.log('***NEXT***');
console.log('removing first element: ', List.shift().val);
console.log('***After .shift()***');
List.traverse();
console.log('***NEXT***');
console.log('adding element to the beginning: hi');
List.unshift('hi');
console.log('***After .unshift()***');
List.traverse();
console.log('***NEXT***');
console.log('find element of a specific index');
console.log(List.get(5));
List.traverse();
console.log('***NEXT***');
console.log('change value of a specific node by index');
List.set('Where', 2);
List.traverse();
console.log('***NEXT***');
console.log('insertion new Node to the LL');
console.log(List.insert(2, ' !'));
console.log(List.insert(6, ' ?'));
List.traverse();
console.log('***NEXT***');
console.log('remove Node from the LL at a specific index');
List.remove(2);
List.traverse();

let List2 = new SinglyLinkedList();
List2.push(0);
List2.push(1);
List2.push(2);
List2.push(3);
List2.push(4);
List2.push(5);
console.log('***NEXT***');
console.log('myReverse1Try the LL');
List2.myReverse1Try();

let List3 = new SinglyLinkedList();
List3.push(0);
List3.push(1);
List3.push(2);
List3.push(3);
List3.push(4);
List3.push(5);
console.log('***NEXT***');
console.log('myReverse2Try the LL');
List3.myReverse2Try();

let List4 = new SinglyLinkedList();
List4.push(11);
List4.push(12);
List4.push(13);
List4.push(14);
List4.push(15);
List4.push(16);
console.log('***NEXT***');
console.log('reverse the LL');
List4.reverse();
// console.log(List.head.next.next.next.next);
// console.log(List.head.next.next.next);
// console.log(List.head.next.next);
// console.log(List.head.next);
// console.log(List.head);