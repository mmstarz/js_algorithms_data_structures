/* traversing a tree have 2 main ways:
1.Breadth first-Search (BFS):
***************************************************
                                            ->  (10)
BFS traverse                        -> -(6)- -> -> -> -> -(15)-
                            -> -(3)- ->  ->  -> -(8)-  ->  ->  -> -(20)-
                                       [10, 6, 15, 3, 8, 20]
***************************************************

2.Depth first-Search (DFS):
DFS - inOrder (starts from left bottom -> goes up one -> right...)
[3, 6, 8, 10, 15 ,20]
DFS - preOrder (starts from root -> left side of the tree -> right side of the tree)
[10, 6, 3, 8, 15, 20]
DFS - postOrder (from left bottom -> right bottom -> up one level...)
[3, 8, 6, 20, 15, 10]

Complexity BFS and DFS 
time complexity - same 
space complexity - DFS is better then BFS

usage:
DFS inOrder - commonly used with BST, because it returns values in order.

DFS preOrder - can be used to export a tree structure so that it is easily
               reconstructed or copied.


*/

class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class Tree {
    constructor() {
        this.root = null;
    }

    insert(val) {
        if (!val) return undefined; // edge case no val
        let newNode = new Node(val); // assign variable for new Node
        if (!this.root) { // edge case for root do not exist
            this.root = newNode; // root becomes new Node
            return this; // return BST
        } else { // continue if root do exist
            let curr = this.root; // assign variable for traverse
            while (true) { // continue while until return
                if (val === curr.val) return undefined; // edge case duplicate value

                if (!curr.left) {
                    curr.left = newNode;
                    return this;
                } else if (!curr.right) {
                    curr.right = newNode;
                    return this;
                } else {
                    if (!curr.left.left || !curr.left.right) {
                        curr = curr.left;
                        // let temp = new Tree();
                        // temp.root = curr;
                        // temp.insert(val);
                    } else if (!curr.right.left || !curr.right.right) {
                        curr = curr.right;
                        // let temp = new Tree();
                        // temp.root = curr;
                        // temp.insert(val);
                    }
                }
            }
        }
    }

    /* BFS pseudo code:
    1. create a queue(this can be an array) and a variable.
       to store the values of nodes visited.
    2. place the root node in the queue.
    3. loop as long as there is anything in a queue.
       4. dequeue the node from the queue and push the value of the node
       into a variable that stores the nodes.
       5. if there is a left property on the node dequeued - add it to the queue
       6. if there is a right property on the node dequeued - add it to the queue
    7. return the variable that stores the values.    
    */
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
    /*DFS - preOrder pseudo code:
    1. create a variable to store the values of visited nodes.
    2. store the root of the tree in a variable called current.
    3. write a helper function which accepts a node:
        4. push the value of the node to the variable that stores the values
        5. if the node has a left property, call the helper function with 
           the left property of the node.
        6. if the node has a right property, call the helper function with
           the right property of the node. 
    7. invoke the helper function with the current variable.
    8. return the array of values.
    */
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
    /* DFS - postOrder pseudo code:
    1. create a variable to store values of visited nodes.
    2. store the root node of the tree in a variable called current.
    3. write a helper function which accepts a node:
        4. if the node has left property, call the helper function with
           the left property on the node.
        5. if the node has right property, call the helper function with
           the right property onthe node.
        7. push the values of the node to the variable that stores the values.
    8. invoke the helper function with the current variable.
    9. return the array of values.
    */
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
    /* DFS - inOrder pseudo code: 
    1. create a variable to store values of visited nodes.
    2. store the root node of the tree in a variable called current.
    3. write a helper function which accepts a node:
        4. if the node has left property, call the helper function with
           the left property on the node.
        5. push the values of the node to the variable that stores the values.
        6. if the node has right property, call the helper function with
           the right property onthe node.
    7. invoke the helper function with the current variable.
    8. return the array of values.
    */
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

let tree = new Tree();
tree.insert(10);
tree.insert(5);
tree.insert(8);
tree.insert(1);
tree.insert(2);
tree.insert(3);
tree.insert(4);
// console.log(tree);
// console.log(tree.root.left);
// console.log(tree.root.right);
console.log(tree.breadthFirstSearch());
console.log(tree.depthFirstSearchPreOrder());
console.log(tree.dfsPreOrder());
console.log(tree.dfsInOrder());