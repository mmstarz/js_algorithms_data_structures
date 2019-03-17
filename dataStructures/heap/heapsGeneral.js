/* Heap is another category of a tree structure.
There are a lot of kinds of heaps. One of them is binary Heap.

Binary Heap(BH) is very similar to BST(binary search tree),
but with some different is rules:
1. In a MaxBinaryHeap parent nodes are always larger than child nodes.
2. In MinBinaryHeap parent nodes are always smaller than child nodes.
3. Child side order doesn't matter.

BH usage: 
Binary Heaps are used to implement Priority Queues, which are very 
commonly used data structures.
Theu are also used quite a bit, with graph traversal algorithms.

MaxBinaryHeap sum :
1. Every parent has at most two child nodes.
2. The value of each parent node is always greater than it's child nodes.
3. Parent is greater than children but there are no guarantees
   between sibling nodes. 
4. Binary heap is as compact as possible. All the children of each node
   are as full as they can be and left children are filled out first.

MinBinaryHeap sum :
1. Every parent has at most two child nodes.
2. The value of each parent node is always smaller than it's child nodes.
3. Parent is smaller than children but there are no guarantees
   between sibling nodes. 
4. Binary heap is as compact as possible. All the children of each node
   are as full as they can be and left children are filled out first.

Heap - Array representation:
for any index of an array n...
The left child is sorted at 2n + 1. let leftChild = (index * 2 + 1);
The right child is at 2n + 2. let rightChild = (index * 2 + 2);

another direction, if we have a child node and we need to find a parent:
for any child at index n...
its parent is at index (n-1)/2. let parent = Math.floor((index - 1) / 2);

Big O complexity:
                time        space
insertion()     O(Log N)
deletion()      O(Log N)
search()        O(N)
*/

class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class MaxBinaryHeap {
    constructor() {
        this.root = null;
    }

    insert(val) { // add new node to the heap
        if (!val) return undefined; // no values passed in edge case
        let newNode = new Node(val); // assign new Node with value passed
        if (!this.root) { // empty Heap edge case
            this.root = newNode; 
            return this;
        } else { // heap is not empty
            let curr = this.root;
            while (true) { // repeat until return
                if(val === curr.val) return this; // duplicate value edge case

                if (!curr.left && val < curr.val) { // no left property and parent bigger than the child
                    curr.left = newNode;
                    return this;
                } else if (!curr.right && val < curr.val) { // no right preperty and parent bigger than the child
                    curr.right = newNode;
                    return this;
                } else { // continue traverse conditions
                    if (!curr.left.left || !curr.left.right) { // no next left nodes
                        curr = curr.left;
                    } else if (!curr.right.left || !curr.right.right) { // no next right nodes
                        curr = curr.right;
                    }
                }
            }
        }
    }

    breadthFirstSearch() {
        let queue = [];
        let data = [];
        let node = this.root;
        queue.push(node);
        while (queue.length) { // !!0 - false            
            node = queue.shift(); // remove first element from the queue and store it
            data.push(node.val); // data.push(node); depends on expected result
            if (node.left) queue.push(node.left); // continue if there is node.left
            if (node.right) queue.push(node.right); // continue for node.right
        }
        return data;
    }

    depthFirstSearchPreOrder() {
        let data = []; // array of values
        let curr = this.root; // current node
        const traverse = node => { // helper function
            data.push(node.val); // data.push(node); depends on expected result
            if (node.left) traverse(node.left); // traverse all left side nodes
            // node.left && traverse(node.left) - same as previous line
            if (node.right) traverse(node.right); // traverse all right side nodes
            // node.right && traverse(node.right) - same as previous line
        }
        traverse(curr); // traverse(this.root); traverse launch
        return data; // result
    }

    dfsPreOrder() {
        let data = []; // assign array of values
        let curr = this.root; // store root in a variable
        const traverse = node => { // helpers function
            if (node.left) traverse(node.left);  // traverse left side of the node
            // node.left && traverse(node.left) - same as previous line
            if (node.right) traverse(node.right); // traverse right side of the node
            // node.right && traverse(node.right) - same as previous line
            data.push(node.val); // data.push(node); depends on expected result
        }
        traverse(curr); // traverse(this.root); launch traverse
        return data; // return result
    }

    dfsInOrder() {
        let data = []; // assign array of values
        let curr = this.root; // store root in a variable
        const traverse = node => { // assign helper function
            if (node.left) traverse(node.left); // traverse left side of the node
            // node.left && traverse(node.left) - same as previous line
            data.push(node.val); // data.push(node); depends on expected result
            if (node.right) traverse(node.right); // traverse right side of the node
            // node.right && traverse(node.right) - same as previous line
        }
        traverse(curr); // traverse(this.root); launch traverse
        return data; // return result
    }
}

let heap = new MaxBinaryHeap();
heap.root = new Node(10);
heap.insert(10);
heap.insert(9);
heap.insert(8);
heap.insert(7);
heap.insert(6);
heap.insert(5);
heap.insert(4);
// console.log(heap);
console.log(heap.breadthFirstSearch());
console.log(heap.depthFirstSearchPreOrder());
console.log(heap.dfsPreOrder());
console.log(heap.dfsInOrder());