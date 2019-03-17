/* Stack is an abstract data structure(collection of data)
of a LIFO(Last In First Out) principle.

Last element added to the stack will be the first element removed from the stack.
***************************************************
                                            -> ----
stack adding                        -> ----    ----
                            -> ----    ----    ----
                    -> ----    ----    ----    ----
***************************************************
                    ---- ->
                    ----    ---- ->
stack removing      ----    ----    ---- ->
                    ----    ----    ----    ---- ->
***************************************************

Stack usability:
1. For managing function invocation:
    Call Stack example:
    function factorial(val) {
        if (val === 0) return 1; // break point
        return val * factorial(val - 1);
    }

2. Undo/Redo.
3. Routing (the history object) is treated like a stack.
...
*/

/* Array implementation of stack: using .push() and .pop(), .unshift() and .shift()
methods on the array, actually create a stack.

end - is the same direction     beginning - is the same direction
    
(not efficient because of indexing elements in the array)

let stack = [];                 let stack2 = [];
stack.push('first');            stack2.unshift('first');
stack.push('second');           stack2.unshft('second');
stack.push('third');            stack2.unshift('third');
stack.pop();                    stack2.shift();
stack.pop();                    stack2.shift();
stack.pop();                    stack2.shift();
*/

/* Big O complexity         STACK
insertion -                 O(1)
removal   -                 O(1)
searching -                 O(N)
access    -                 O(N)
*/

/* Singly Linked List implementation of stack */

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.size = 0;
        this.first = null;
        this.last = null;
    }
    /* .unshift() pseudocode:
    1. the function should accept the value.
    2. create newNode with that value.
    3. if there are no nodes in the stack, set first and last properties to be
       newly created node.
    4. if there is at least one node in the stack, store first property in a variable.
    5. reset first property to be newly created node.
    6. set next property on the first node to be stored variable.
    7. increment size.
    8. return this.size.
    */
    // add to the beginning of the stack
    unshift(val) {
        if (!val) return null; // edge case for no value passed in
        let newNode = new Node(val); // assign newNode
        if (!this.first) { // edge case for empty stack
            this.first = newNode;
            this.last = this.first;
        } else {
            newNode.next = this.first; // update link
            this.first = newNode; // set newnode to be the first
        }
        this.size++; // increment size
        return this; // return updated stack
    }
    /* .shift() pseudocode:
    1. if there is no nodes in the stack return undefined;
    2. store this.first in a variable.
    3. if there is only one node in the stack,
       set the first and the last properties to be null.
    4. if there is more than one node, set the first property
       to be the next property of the stored first.
    5. decrement this.size.
    6. return the value of the removed node.
    */
    // remove from the beginning of the stack
    shift() {        
        if (!this.first) return undefined; // edge case for empty stack        
        let removed = this.first; // store first node        
        if (this.first === this.last) { // if there is only one node
            this.last = null;
        }
        this.first = this.first.next; // set first node to be the next one
        removed.next = null; // erase link
        this.size--; // decrement size
        return removed; // return removed node
    }
    // and return an array of values of LL nodes
    traverse() {
        let result = [];
        let step = this.first;
        while (step) {
            result.push(step.value);
            step = step.next;
        }
        return result;
    }
}

let stack = new Stack();
/* unshift(O(1)) -> shift(O(1))  stack */
/* working with queues this methods used to be named:
add() and remove() */
stack.unshift('FIRST');
stack.unshift('SECOND');
stack.unshift('LAST');
console.log(stack.traverse());
console.log('removed : ', stack.shift());
console.log('removed : ', stack.shift());
console.log('removed : ', stack.shift());
console.log(stack.traverse());