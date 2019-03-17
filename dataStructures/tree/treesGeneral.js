/* Trees - data structure that consists of nodes in a parent/child relationship.
Trees are nonlinear (have many different paths).
SLL - can be a sort of a special case of a tree. ({} -> {} -> {}).

Terminology:
Root - top node of a tree.
Child - a node directly connected to another node when moving away from the Root.
Parent - the converse(протилежний) notion of a child.
Siblings - a group of nodes with the same parent.
Leaf - a node with no children.
Edge- the connection between one node and another.

Tree rules:
1. Child can't point to parent.
2. Child can't point to siblings(брати і сестри).
3. Every node is moving away from root node.
4. Tree can't have more than one root.

Usage examples:
1. HTML DOM
2. Network Routing
3. Abstract syntax tree (tree that represents code implementaion)
4. Artificial intelligence (штучний интелект)
5. Machine Learning
6. Folders in Operating Systems

JSON (JavaScript Object Notation) request data from the API

https://en.wikipedia.org/wiki/List_of_data_structures

Kinds of trees:
Binary trees
B-trees
Heaps
Tries (In these data structures each tree node compares a bit slice of key values.)
Multiway trees
Space-partitioning trees
Application-specific trees

Types of trees:
1.Tree.
2.Binary tree. (each node can have most of 2(що найбільше двоє) children).
3.Binary search tree (BST).

BST - is a special case of binary tree. BST stores data that can be compared.
Every node with value that is greater than the parent value, is placed to the right,
and nodes with less values are placed to the left from the parent node.

Big O complexity            BST
insertion -                 O(log N)
searching -                 O(log N)
            NOT Guaranteed!

*/