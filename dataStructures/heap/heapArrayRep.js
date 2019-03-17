/*MaxBinaryHeap sum:
1. Every parent has at most two child nodes.
2. The value of each parent node is always greater than it's child nodes.
3. Parent is greater than children but there are no guarantees
between sibling nodes. 
4. Binary heap is as compact as possible.All the children of each node
are as full as they can be and left children are filled out first.

Heap - Array representation:
for any index of an array n...
The left child is sorted at 2n + 1. let leftChild = (index * 2 + 1);
The right child is at 2n + 2. let rightChild = (index * 2 + 2);

another direction, if we have a child node and we need to find a parent:
for any child at index n...
its parent is at index(n - 1) / 2. let parent = Math.floor((index - 1) / 2);
*/

class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }

    /* .insert(val): Adds element to MaxBinaryHeap.
    main idea is to .push() element and then bubble it up to the correct place.
    1.  push() the value into the values property on the heap.
    2.  bubble the value up to its correct spot:
        3. create a variable called index, which is the length of the values property-1
        4. create a variable called parentIndex, which is the floor of (index - 1)/2
        5. loop as long as the values element at the parentIndex is less than the
            values element at the child index:
            6. swap the value of the values element at the parentIndex with the value
               of the element property at the child index.
            7. set the index to be the parentIndex and start over.
    */
    myInsert(val) {
        if (!val) return false; // no value edge case
        this.values.push(val); // add to the end of the values
        let index = this.values.length - 1; // assign index for added element
        const bubble = index => { // helper function takes index
            if (index === 0) return this; // first element edge case
            let parentIndex = Math.floor((index - 1) / 2); // assign parent index
            if (this.values[index] > this.values[parentIndex]) { // child > parent
                let temp = this.values[parentIndex]; // swap parent and child
                this.values[parentIndex] = this.values[index];
                this.values[index] = temp;
                bubble(parentIndex); // start sorting for next levels of the heap
            } else {
                return this; // return sorted values
            }
        }
        return bubble(index);
    }

    insert(val) { // add new element to the heap
        this.values.push(val); // add new element to the end of the values
        this.bubbleUp(); // sort values elements
    }
    bubbleUp() {
        let idx = this.values.length - 1; // assign index of last element
        const element = this.values[idx]; // assign last element
        while (idx > 0) { // while index less than root or break
            let paridx = Math.floor((idx - 1) / 2); // assign parent index
            let parent = this.values[paridx]; // assign parent element
            if (element <= parent) break; // break point
            this.values[paridx] = element; // swap parent and child elements
            this.values[idx] = parent; 
            idx = paridx; // assign new index for next levels of the heap
        }
    }

    /* .remove(): removes element from the heap.
    maxElement(root) for MaxBinaryHeap.
    minElement(root) for MinBinaryHeap.
    main idea is to remove the root, replace with most recently added, adjust (sink down).
    Sink down - procedure for deleting the root from the heap ( effectively extracting 
    the maximum element from the max-heap or the minimum element from the min-heap ) and
    restoring the properties is called down-heap (also known as: bubble-down, 
    percolate-down, sift-down, trickle down, heapify-down, cascade-down, extract min/max).
    1. swap the first value in the values property with the last one.
    2. .pop() from the values property, so you can return the value at the end.
    3. have the new root 'sink down' to the correct spot:
        4. parent index starts at 0 (the root).
        5. find the index of the left child (2 * index + 1). make sure it's not
           out of bounds.
        6. find the index of the right child (2 * index + 2).make sure its not
           out of bounds.
        7. if left or right child is greater than the element...swap. if both children
           are larger swap with the larger child. 
        8. the child index you swapped to now becomes the new parent index.
        9. keep loop and swap until neither child is larger than the element.
        10. return the old root.
    */
    myRemove() {
        // edge cases
        if (!this.values) return undefined; // empty heap
        if (this.values.length === 1) { // heap has only one value
            return this.values.pop(); // remove and return removed value
        }
        // swap helper function
        const swap = (arr, idx1, idx2) => {
            if (!(idx1 in arr) || !(idx2 in arr)) return this; // edge cases
            return [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]; // return swapped
        }
        const oldRoot = this.values[0]; // store old root value
        swap(this.values, 0, this.values.length - 1); // swap last and first elements
        // const last = this.values.pop(); // store last element value
        // this.values[0] = last; // assign root value to be last element
        // console.log(this.values);
        this.values.pop(); // remove last element

        let index = 0; // assign parent index
        while (true) { // repeat until break
            let indexLC = 2 * index + 1; // assign left child index
            let indexRC = 2 * index + 2; // assign right child index
            let root = this.values[index]; // root assign
            let lc = this.values[indexLC]; // assign left child 
            let rc = this.values[indexRC]; // assign right child 
            if (lc && lc > root && lc > rc) { // left chil bigger then parent and right child
                swap(this.values, index, indexLC); // swap parent and left child values
                index = indexLC; // assign new parent index
            } else if (rc && rc > root && rc > lc) { // right side conditions
                swap(this.values, index, indexRC); // swap parent and right child values
                index = indexRC; // assign new parent index
            } else { break; } // nothing to swap break
        }
        return oldRoot; // return removed root element
    }

    /* same as .myRemove() but not my xD */
    extractMax() {
        // edge cases
        if (!this.values) return undefined; // empty heap
        if (this.values.length === 1) { // heap has only one value
            return this.values.pop(); // remove and return removed value
        }
        const max = this.values[0]; // store the first element
        const end = this.values.pop(); // store the last element
        this.values[0] = end; // assign the first element to be the last element
        this.sinkDown(); // helper function invokation
        return max; // return removed value
    }

    sinkDown() { // extractMax() helper function
        let index = 0; // start index assign
        const length = this.values.length; // length var assign for less space writing
        let element = this.values[index]; // assign starting root element

        while (true) { // loop until break or return
            let indexLC = 2 * index + 1; // assign left child index
            let indexRC = 2 * index + 2; // assign right child index 
            let lc, rc; // assign left and right children values
            let swap = null; // assign variable for indexing element move
            // comparisons
            if (indexLC < length) { // left child index is in array
                lc = this.values[indexLC]; // store left child value
                if (lc > element) { // compare left child value to parent value
                    swap = indexLC; // swap takes left child index
                }
            }

            if (indexRC < length) { // right child index is in array
                rc = this.values[indexRC]; // store current right child value
                /* comparisons
                if left child is bigger than the parent and
                right child is bigger than the parent
                or
                left child is smaller than the parent and 
                right child is bigger than the left child */
                if ((swap === null && rc > element) || (swap !== null && rc > lc)) {
                    swap = indexRC; // swap takes right child index
                }
            }

            if (swap === null) break; // if there nothing to swap stop
            // else swap parent with appropriate child
            this.values[index] = this.values[swap];
            this.values[swap] = element;
            index = swap; // assign new parent index
        }
    }
}

let mbh1 = new MaxBinaryHeap();
let mbh2 = new MaxBinaryHeap();
let mbh3 = new MaxBinaryHeap();
let mbh4 = new MaxBinaryHeap();

mbh1.myInsert(1);
mbh1.myInsert(2);
mbh1.myInsert(3);
mbh1.myInsert(4);
mbh1.myInsert(5);
mbh1.myInsert(6);
mbh1.myInsert(7);
console.log('MBH1 values: ', mbh1.values);

mbh2.myInsert(55);
mbh2.myInsert(39);
mbh2.myInsert(41);
mbh2.myInsert(18);
mbh2.myInsert(27);
mbh2.myInsert(12);
mbh2.myInsert(33);
console.log('MBH2 values: ', mbh2.values);

mbh3.myInsert(11);
console.log('MBH3 values: ', mbh3.values);

mbh4.myInsert(12);
console.log('MBH4 values: ', mbh4.values);

console.log('MBH3 Removed root: ', mbh3.myRemove());
console.log('MBH3 Removed root: ', mbh3.myRemove());
console.log('MBH4 Removed root: ', mbh4.extractMax());
console.log('MBH4 Removed root: ', mbh4.extractMax());

console.log('MBH1 values: ', mbh1.values);
console.log('MBH1 Removed root: ', mbh1.myRemove());
console.log('MBH1 values: ', mbh1.values);
console.log('MBH1 Removed root: ', mbh1.myRemove());
console.log('MBH1 values: ', mbh1.values);
console.log('MBH1 Removed root: ', mbh1.myRemove());
console.log('MBH1 values: ', mbh1.values);

console.log('MBH2 values: ', mbh2.values);
console.log('MBH2 Removed root: ', mbh2.extractMax());
console.log('MBH2 values: ', mbh2.values);
console.log('MBH2 Removed root: ', mbh2.extractMax());
console.log('MBH2 values: ', mbh2.values);
console.log('MBH2 Removed root: ', mbh2.extractMax());
console.log('MBH2 values: ', mbh2.values);

// console.log(Math.floor((0 - 1) / 2));
// console.log(Math.floor((1 - 1) / 2));
// console.log(Math.floor((2 - 1) / 2));
// console.log(Math.floor((3 - 1) / 2));