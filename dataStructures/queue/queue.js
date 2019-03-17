/* Queue is a data structure of a FIFO(first in first out) principle.
Queue supports only two operation adding and removing.

wait in line = wait in a queue (ждать в очереди)
Usage examples:
Background tasks
Uploading resources
Printing queue / Task processing


Building a Queue with an Array implementation:

let Queue = [];                     let Queue1 = [];

not efficient bcs of                inefficient because of 
reindexing after adding             reindexing after removing

Queue.unshift(1);                   Queue1.push(1);
Queue.unshift(2);                   Queue1.push(2);
Queue.unshift(3);                   Queue1.push(3);
console.log('Queue:  ', Queue);     console.log('Queue1: ', Queue1);
Queue.pop();                        Queue1.shift();
Queue.pop();                        Queue1.shift();
console.log('Queue:  ', Queue);     console.log('Queue1: ', Queue1);
*/

/* Big O complexity         QUEUE
insertion -                 O(1)
removal   -                 O(1)
searching -                 O(N)
access    -                 O(N)
*/

/* Building a Queue with an SLL implementation: */
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.size = 0;
        this.first = null;
        this.last = null;
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
        if (!this.first) return undefined; // edge case for empty queue
        if (this.first === this.last) { // edge case for size = 1
            this.last = null;
        }
        let removed = this.first; // store first node in a variable        
        this.first = this.first.next; // set first to be the next node
        removed.next = null; // erase link from removed node
        this.size--; // decrement size
        return removed; // return removed node
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
        if (!val) return null; // edge case no value passed in        
        let newNode = new Node(val); // assign newNode        
        if (!this.first) { // edge case for empty queue
            this.first = newNode;
            this.last = this.first;
        } else {
            newNode.next = this.first; // update link
            this.first = newNode; // set new node to be the first one
        }
        this.size++; // increment size
        return this; // return queue
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
        if (!val) return null; // edge case fo no value passed in
        let newNode = new Node(val); // new object of data structure
        if (!this.first) { // edge case situation for empty queue
            this.first = newNode;
            this.last = this.first;
        } else {
            this.last.next = newNode; // assign newNode to be the next node to the old last
            this.last = newNode; // assign newNode to be new last
        }
        this.size++; // increment size
        return this; // return updated queue
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
        if (!this.first) return undefined; // edge case size = 0
        // assign 2 variables for loop till last.
        let temp = this.first;
        let newLast = temp;
        if (this.first === this.last) { // if there is only one node
            this.first = null;
            this.last = null;
        }
        while (temp.next) { // loop while there is a next object
            // move newLast after temp so it's always 1 step before temp
            newLast = temp;
            // move temp till reach the current last
            temp = temp.next
        }
        newLast.next = null; // erase last next         
        this.last = newLast; // assign last to be the 2nd node from the end        
        this.size--; // decrement size        
        return temp; // return removed node
    }
    // and return an array of values of LL nodes
    traverse() {
        let result = [];
        let curr = this.first;
        while (curr) {
            result.push(curr.val);
            curr = curr.next;
        }
        return result;
    }
}

let line = new Queue();
/* unshift(O(1)) -> pop(O(N))  queue*/
line.unshift(1);
line.unshift(2);
line.unshift(3);
console.log(line.traverse());
console.log('removed: ', line.pop());
console.log('removed: ', line.pop());
console.log('removed: ', line.pop());
console.log(line.traverse());

/* push(O(1)) -> shift(O(1)) queue */
/* working with queues this methods used to be named:
enqueue() and dequeue() */
line.push(1);
line.push(2);
line.push(3);
console.log(line.traverse());
console.log('removed: ', line.shift());
console.log('removed: ', line.shift());
console.log('removed: ', line.shift());
console.log(line.traverse());
