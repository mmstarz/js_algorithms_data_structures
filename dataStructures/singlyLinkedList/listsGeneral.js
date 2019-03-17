/* Linked list(LL) is an unordered data structure.
Lists are linear (have only one path(line) begin <-> end).
LL contains a head, tail and length property.
LL consists of nodes(every node store a piece of data) and each node has a value
and a pointer to another(next) node or null.
Head - is the beginning of the LL, Tail - is the end of LL.

example of Singly Linked List(SLL):
   head                  tail
    [4] -> [6] -> [8] -> [2] -> 
       next   next   next   null
    |--------length--------|

SLL - is a bunch of nodes.
one node have only one link to the nex node.
elevator analogy.
*/

/* methods */
// 1.   creating
// 2.   searching
// 3.   insertion
// 4.   removal    

/* Comparison LL with Arrays.
    List:
    1. Do not have indexes.
    2. Connected via nodes with a next pointer.
    3. Random access is not allowed.(from beginning to needed node)

    Arrays:
    1. Indexed in order    
    2. Insertion and deletion can be expensive.
    3. Can quickly be accessed at a specific index.
*/