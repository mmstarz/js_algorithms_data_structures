/* Data structures.

What do the do?
Data structures are collections of values, the relationships among them,
and the functions or operators can be applied to them.

Why they are so many?
Different data structures excel at different things. Some are highly specialized,
while others(like arrays) are more generally used.

Why care?
The more time you spend as a developer, the more likely you'll need to use one
of these data structures.
You have already worked with many of them unknowingly(не осознанно).
Interviews frequently asked.

There is no one "BEST" data structure! They are excel in defferent situations.
Otherwise Why bother learning them all?

Examples:
Working with map/location data(google map shows nearest gas station)?
Use a graph(represent a map in a single array)!

Need an ordered list(like array) with fast inserts/removals at the beggining and end?
Use a linked List!

Browser History 
Use a Doubly Linked list.

Web scraping nested HTML?
Use a tree!

Need to write a scheduler?
Use a binary heap!

Learning:
Learn Singly linked lists(SLL).
Take a day break.
Learn Doubly linked lists(DLL).

DLL are almost the same as SLL except there is an additional pointer
to the previous nodes.
DLL is better than SLL for finding nodes and can be done in half the time.
However, they do take up more memory considering the extra pointer.

Attention:
Pay attention to the prerequisites for each section.

Using classes:
class DataStructure() {
    constructor() {
        // default properties
    }

    someInstanceMethod() {
        // what should each object, created from this class, be able to do
    }

    static methodName() {
        // Utility function of a class. It`s not related to the individual instance.
    }
}
*/