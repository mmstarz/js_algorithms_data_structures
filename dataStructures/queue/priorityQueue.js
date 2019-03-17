/* Priority Queue (PQ) - data structure where each element has priority.
Elments with higher priorities are served before elements with lower priorities.

The lowest number - the highest priority.(that's why Minimum Binary Heap).

Naive example(inefficient bcs time complexity - O(N)):                
1.use a list(array) to store all elements(nodes).
2.iterate through entire thing to find the highest priority element.

Better solution to use Minimum Binary Heap. (time complexity - O(logN))
Heap is constructed using the priority and don't care about the value ot the Node.
1. write a min binary heap - lower number means highest priority .
2. each node has a val and priority. Use the priority to build the heap.
3. .enqueue() - method accepts a values and priority, makes new node,
   and puts it in the right spot, based on its priority.
4. .dequeue() - method removes the root node, returns it and rearranges heap, using
   priority.

for same priority cases can use:
class Node {
    constructor(val, prt) { // val - value, prt - priority
        this.val = val;
        this.prt = prt;
        this.time = new Date();
    }
}
and add another comparison of times nodes have been added:
if(this.values.leftnode.prt === this.values.rightnode.prt) {
    if(this.values.leftnode.time < this.values.rightnode.time) {

    } else {

    }
}

Big O complexity
    time         space  
    O(logN)      O(N)  

*/

class Node {
    constructor(val, prt) { // val - value, prt - priority
        this.val = val;
        this.prt = prt;
    }
}

class PriorityQueue { // Minimum Binary Heap
    constructor() {
        this.values = [];
    }
    /* .enqueue() */
    myInsert(val, prt = 10) {
        if (!val) return false; // no value edge case
        let node = new Node(val, prt);
        this.values.push(node); // add to the end of the values
        let index = this.values.length - 1; // assign index for added element
        const bubble = index => { // helper function takes index
            if (index === 0) return this; // first element edge case
            let parentIndex = Math.floor((index - 1) / 2); // assign parent index
            if (this.values[index].prt < this.values[parentIndex].prt) { // child < parent
                let temp = this.values[parentIndex]; // swap parent and child
                this.values[parentIndex] = this.values[index];
                this.values[index] = temp;
                bubble(parentIndex); // start sorting for next levels of the heap
            } else {
                return this; // return sorted values
            }
        }
        return bubble(index); // return sorted values
    }
    /* .enqueue() */
    insert(val, prt = 10) { // add new element to the heap
        let node = new Node(val, prt);
        this.values.push(node); // add new element to the end of the values
        this.bubbleUp(); // sort values elements
    }
    bubbleUp() {
        let idx = this.values.length - 1; // assign index of last element
        const child = this.values[idx]; // assign last element
        while (idx > 0) { // while index more than root or break
            let paridx = Math.floor((idx - 1) / 2); // assign parent index
            let parent = this.values[paridx]; // assign parent element
            if (child.prt >= parent.prt) break; // child >= parent; break point
            this.values[paridx] = child; // swap parent and child elements
            this.values[idx] = parent;
            idx = paridx; // assign new index for next levels of the heap
        }
    }
    /* .dequeue() */
    myRemove() {
        // edge cases
        if (!this.values.length) return undefined; // empty heap
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
            let lc = this.values[indexLC]; // assign left child node
            let rc = this.values[indexRC]; // assign right child node            
            if (lc && lc.prt < root.prt && lc.prt < rc.prt) { // left chil smaller then parent and right child
                swap(this.values, index, indexLC); // swap parent and left child values
                index = indexLC; // assign new parent index
            } else if (rc && rc.prt < root.prt && rc.prt < lc.prt) { // right side conditions
                swap(this.values, index, indexRC); // swap parent and right child values
                index = indexRC; // assign new parent index
            } else { break; } // nothing to swap break
        }
        return oldRoot; // return removed root element
    }

    /* .dequeue() */
    extractMax() {
        // edge cases
        if (!this.values) return undefined; // empty heap
        if (this.values.length === 1) { // heap has only one value
            return this.values.pop(); // remove and return removed value
        }
        const min = this.values[0]; // store the first element
        const end = this.values.pop(); // store the last element
        this.values[0] = end; // assign the first element to be the last element
        this.sinkDown(); // helper function invokation
        return min; // return removed value
    }

    sinkDown() { // extractMax() helper function
        let index = 0; // start index assign
        const length = this.values.length; // length var assign for less space writing
        let parent = this.values[index]; // assign starting root element

        while (true) { // loop until break or return
            let indexLC = 2 * index + 1; // assign left child index
            let indexRC = 2 * index + 2; // assign right child index 
            let lc, rc; // assign left and right children values
            let swap = null; // assign variable for indexing element move
            // comparisons
            if (indexLC < length) { // left child index is in array
                lc = this.values[indexLC]; // store left child value
                if (lc.prt < parent.prt) { // compare left child value to parent value
                    swap = indexLC; // swap takes left child index
                }
            }

            if (indexRC < length) { // right child index is in array
                rc = this.values[indexRC]; // store current right child value
                /* comparisons
                if left child is smaller than the parent and
                right child is smaller than the parent
                or
                left child is bigger than the parent and 
                right child is smaller than the left child */
                if ((swap === null && rc.prt < parent.prt) ||
                    (swap !== null && rc.prt < lc.prt)) {
                    swap = indexRC; // swap takes right child index
                }
            }

            if (swap === null) break; // if there nothing to swap stop
            // else swap parent with appropriate child
            this.values[index] = this.values[swap];
            this.values[swap] = parent;
            index = swap; // assign new parent index
        }
    }
}

module.exports = PriorityQueue;

// initial 
// let pq1 = new PriorityQueue();
// let pq2 = new PriorityQueue();
// let pq3 = new PriorityQueue();
// let pq4 = new PriorityQueue();

// pq1.myInsert(1, 6);
// pq1.myInsert(2, 5);
// pq1.myInsert(3, 4);
// pq1.myInsert(4, 3);
// pq1.myInsert(5, 2);
// pq1.myInsert(6, 1);
// pq1.myInsert(7, 0);
// console.log('PQ1 values: ', pq1.values);

// pq2.insert(55, 6);
// pq2.insert(39, 5);
// pq2.insert(41, 4);
// pq2.insert(18, 3);
// pq2.insert(27, 2);
// pq2.insert(12, 1);
// pq2.insert(33, 0);
// console.log('PQ2 values: ', pq2.values);

// pq3.myInsert(11);
// console.log('PQ3 values: ', pq3.values);
// console.log('PQ3 Removed root: ', pq3.myRemove());
// console.log('PQ3 values: ', pq3.values);
// console.log('PQ3 Removed root: ', pq3.myRemove());

// pq4.myInsert(12);
// console.log('PQ4 values: ', pq4.values);
// console.log('PQ4 Removed root: ', pq4.extractMax());
// console.log('PQ4 values: ', pq4.values);
// console.log('PQ4 Removed root: ', pq4.extractMax());

// console.log('PQ1 values: ', pq1.values);
// console.log('PQ1 Removed root: ', pq1.myRemove());
// console.log('PQ1 values: ', pq1.values);
// console.log('PQ1 Removed root: ', pq1.myRemove());
// console.log('PQ1 values: ', pq1.values);
// console.log('PQ1 Removed root: ', pq1.myRemove());
// console.log('PQ1 values: ', pq1.values);
// console.log('PQ1 Removed root: ', pq1.myRemove());
// console.log('PQ1 values: ', pq1.values);
// console.log('PQ1 Removed root: ', pq1.myRemove());
// console.log('PQ1 values: ', pq1.values);
// console.log('PQ1 Removed root: ', pq1.myRemove());
// console.log('PQ1 values: ', pq1.values);

// console.log('PQ2 values: ', pq2.values);
// console.log('PQ2 Removed root: ', pq2.extractMax());
// console.log('PQ2 values: ', pq2.values);
// console.log('PQ2 Removed root: ', pq2.extractMax());
// console.log('PQ2 values: ', pq2.values);
// console.log('PQ2 Removed root: ', pq2.extractMax());
// console.log('PQ2 values: ', pq2.values);
// console.log('PQ2 Removed root: ', pq2.extractMax());
// console.log('PQ2 values: ', pq2.values);
// console.log('PQ2 Removed root: ', pq2.extractMax());
// console.log('PQ2 values: ', pq2.values);
// console.log('PQ2 Removed root: ', pq2.extractMax());
// console.log('PQ2 values: ', pq2.values);