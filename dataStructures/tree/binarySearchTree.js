class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }


    helper(node) {
        if (!node) return null;
        let tree = new BinarySearchTree();
        tree.root = node;
        return tree;
    }

    treeLevels(node, level = 0) {
        if (!node) return level;
        let curr = new BinarySearchTree();
        curr.root = node;
        level++;
        while (curr.root) {
            if (!curr.root.left && !curr.root.right) { // no children
                return level;
            } else {
                let rightlvl = this.treeLevels(curr.root.right, level);
                let leftlvl = this.treeLevels(curr.root.left, level);
                level = Math.max(leftlvl, rightlvl);
                return level;
            }
        }
    }

    treeLevelValues(node, result = []) {
        if (!node) {
            return result;
        }

        if (!node.left && !node.right) { // no children
            return result;
        } else if (!node.left) { // no left child            
            let right = node.right.val;
            let tempRight = [];
            if (right === undefined) {
                tempRight.push(' ');
            } else {
                tempRight.push(right);
            }
            let tree = new BinarySearchTree();
            tree.root = node;
            let rs = this.treeLevelValues(tree.root.right, tempRight);
            result.push(rs);
            return result;
        } else if (!node.right) { // no right child
            let left = node.left.val;
            let tempLeft = [];
            if (left === undefined) {
                tempLeft.push(' ');
            } else {
                tempLeft.push(right);
            }
            let tree = new BinarySearchTree();
            tree.root = node;
            let ls = this.treeLevelValues(tree.root.left, tempLeft);
            result.push(ls);
            return result;
        } else {
            let left = node.left.val;
            let right = node.right.val;
            let tempLeft = [];
            let tempRight = [];
            if (left === undefined) {
                tempLeft.push(' ');
            } else {
                tempLeft.push(left);
            }
            if (right === undefined) {
                tempRight.push(right);
            } else {
                tempRight.push(right);
            }
            let tree = new BinarySearchTree();
            tree.root = node;
            let ls = this.treeLevelValues(tree.root.left, tempLeft);
            let rs = this.treeLevelValues(tree.root.right, tempRight);
            if (ls === rs) {
                return result;
            }
            let tempArr = ls.concat(rs);
            result.push(tempArr);
            return result;
        }
    }

    /* insert() add new node into a BST.
    .insert() pseudo code:
    1. Create a newNode.
    2. If there is no root then newNode bocomes the root.
    3. otherwise compare the value of the newNode and the root.
    4. if newNode.val is greater than the root.val :
        5. check if there is a node to the right.
        6. if there is, move to that node and repeat this steps.
        7. if there is not, set newNode as the right property.
    8. if newNode.val is less than the root.val :
        9.  check if there is a node to the left.
        10. if there is, move to that node and repeat this steps.
        11. if there is not, set newNode as the left preperty.
    */
    myInsert(val) {
        if (!val) return undefined; // edge case no val
        let newNode = new Node(val); // assign variable for new Node
        if (!this.root) { // edge case for root do not exist
            this.root = newNode; // root becomes new Node
            return this; // return BST
        } else { // continue if root do exist
            if (val === this.root.val) return undefined; // edge case duplicate
            else if (newNode.val > this.root.val) { // compare root value
                if (!this.root.right) { // right node do not exist
                    this.root.right = newNode; // set right node to be the newNode
                    return this; // return updated BST
                } else { // right node do exist                    
                    this.helper(this.root.right).myInsert(val);
                }
            } else if (newNode.val < this.root.val) { // compare root value
                if (!this.root.left) { // left node not exist
                    this.root.left = newNode; // set left node to be newNode
                    return this; // return updated BST
                } else { // let node do exist
                    this.helper(this.root.left).myInsert(val);
                }
            }
        }
    }

    insert(val) {
        if (!val) return undefined; // edge case no val
        let newNode = new Node(val); // assign variable for new Node
        if (!this.root) { // edge case for root do not exist
            this.root = newNode; // root becomes new Node
            return this; // return BST
        } else { // continue if root do exist
            let curr = this.root; // assign variable for traverse
            while (true) { // continue while return
                if (val === curr.val) return undefined; // edge case duplicate value
                else if (val < curr.val) { // tree left side operations
                    if (!curr.left) { // if there is no left node
                        curr.left = newNode; // set newNode to be left node
                        return this; // return BST
                    } else {
                        curr = curr.left; // move to the next level of nodes
                    }
                } else if (val > curr.val) { // tree right side operations
                    if (!curr.right) { // if there is no right node
                        curr.right = newNode; // set newNode to be right node
                        return this; // return BST
                    } else {
                        curr = curr.right; // move to the next level of nodes
                    }
                }
            }
        }
    }
    /* .find() finds if node is in a BST
    .find() pseudocode:
    0. edge case no value passed in
    1. check if there is a root, if not searching is done.    
    2. if there is a root check root.val === val, if it is true searching is done.
    3. if root.val !== val, compare if val is less or greater than root.val
    4. if it is greater (val > root.val):
        5. check if there is a node to the right (root.right):
        6. if there is, move to that node and repeat steps. 
        7. if there is not, searching is done.
    8. if it is less (val < root.val):
        9. check if there is a node to the left (root.left):
        10. if there is, move to that node and repeat steps. 
        11. if there is not, searching is done.
    */
    myFind(val) {
        if (!val) return undefined; // edge case for no value passed in 
        if (!this.root) return false; // edge case for empty tree
        if (this.root.val === val) return this.root; // root is looked value
        let curr = this.root; // assign variable for traverse
        let found = false; // assign variable for found triggering
        while (curr && !found) {
            if (val > curr.val) {
                curr = curr.right
            }
            else if (val < curr.val) {
                curr = curr.left;
            } else {
                return curr;
            }
        }
        return false;
    }

    find(val) {
        if (!val) return false;
        if (!this.root) return false;

        if (this.root.val === val) {
            return this.root;
        } else if (val > this.root.val) {
            if (this.root.right) {
                if (this.root.right.val === val) {
                    return this.root.right;
                } else {
                    return this.helper(this.root.right).find(val);
                }
            } else if (!this.root.right) {
                return false;
            }
        } else {
            if (this.root.left) {
                if (this.root.left.val === val) {
                    return this.root.left;
                } else {
                    return this.helper(this.root.left).find(val);
                }
            } else if (!this.root.right) {
                return false;
            }
        }
    }
    /* .contains() find if node is in a BST return true/false */
    contains(val) {
        if (!val) return undefined; // edge case for no value passed in 
        if (!this.root) return false; // edge case for empty tree
        if (this.root.val === val) return true; // root is looked value
        let curr = this.root; // assign variable for traverse
        let found = false; // assign variable for found triggering
        while (curr && !found) {
            if (val > curr.val) {
                curr = curr.right
            }
            else if (val < curr.val) {
                curr = curr.left;
            } else {
                return true;
            }
        }
        return false;
    }

    dfsInOrder() {
        let data = []; // assign array of values
        let curr = this.root; // store root in a variable
        const traverse = node => { // assign helper function
            if (node.left) traverse(node.left); // traverse left side of the node
            data.push(node.val); // data.push(node); depends on expected result
            if (node.right) traverse(node.right); // traverse right side of the node
        }
        traverse(curr); // traverse(this.root); launch traverse
        return data; // return result
    }

    myTraverseVisual() {
        let root = this.root;
        let level = this.treeLevels(root);
        console.log('tree level: ', level);
        let result = [];
        result = this.treeLevelValues(root);

        let lvl0 = [];
        let lvl1 = [];
        let lvl2 = [];
        let lvl3 = [];
        lvl0.push(root.val);
        console.log('root :', root.val);
        result[0].map((el, index) => {
            if (index === 0 || index === 2) {
                lvl1.push(el);
            } else {
                el.map((item, index) => {
                    if (index === 0 || index === 2) {
                        lvl2.push(item);
                    } else {
                        lvl3.push(item);
                    }
                });
            }
        });
        console.log('level 0 element : ', lvl0);
        console.log('level 1 elements: ', lvl1);
        console.log('level 2 elements: ', lvl2);
        console.log('level 3 elements: ', lvl3);
        return result;
    }
}

let tree = new BinarySearchTree();
let tree2 = new BinarySearchTree();

tree.root = new Node(10);
tree.insert(5);
tree.insert(13);
tree.insert(2);
tree.insert(7);
tree.insert(11);
tree.insert(16);
console.log('****NEXT OPERATIONS****');
console.log('duplicate try tree.insert(5) : ', tree.insert(5));
console.log('duplicate try tree.insert(13) : ', tree.insert(13));
tree.insert(12);
tree.insert(14);
tree.insert(17);
tree.insert(1);
tree.insert(3);
tree.insert(6);
tree.insert(8);
console.log('tree.find(2) : ', tree.find(2));
console.log('tree.find(10) : ', tree.find(10));
console.log('tree.find(18) : ', tree.find(18));
console.log('tree.contains(7) : ', tree.contains(7));
console.log('tree.contains(0) : ', tree.contains(0));
console.log('********************** TREE  MAP **********************');
tree.myTraverseVisual();
console.log(tree.dfsInOrder());

console.log('****SECOND TREE****');
tree2.root = new Node(100);
tree2.myInsert(50);
tree2.myInsert(150);
tree2.myInsert(40);
tree2.myInsert(60);
tree2.myInsert(110);
tree2.myInsert(160);
console.log('****NEXT OPERATIONS****');
console.log('duplicate try tree2.myInsert(50) : ', tree2.myInsert(50));
console.log('duplicate try tree2.myInsert(150) : ', tree2.myInsert(150));
tree2.myInsert(39);
tree2.myInsert(41);
tree2.myInsert(159);
tree2.myInsert(161);
tree2.myInsert(59);
tree2.myInsert(61);
tree2.myInsert(109);
tree2.myInsert(111);
console.log('tree2.myFind(110): ', tree2.myFind(110));
console.log('tree2.myFind(100): ', tree2.myFind(100));
console.log('tree2.myFind(112): ', tree2.myFind(112));
console.log('tree2.contains(60): ', tree2.contains(60));
console.log('tree2.contains(42): ', tree2.contains(42));
console.log('********************** TREE2 MAP **********************');
tree2.myTraverseVisual();
console.log(tree2.dfsInOrder());