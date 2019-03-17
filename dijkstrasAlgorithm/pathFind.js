/* Use Dijkstra's Algorithm along with Priority Queue data structure
for finding shortest way from one node of the graph to another in node
in the graph.

Priority Queue represented by Array(push, shift).
Not the best implementation. It's simple example.
Time complexity - O(N * Log(N))

For improvement should use (Min/Max)Binary Heap

Dijkstra's Algorithm based on Weighted Graph data structure.

Dijkstra's Algorithm pseudo code:
1. The function shold accept a starting and ending vertices.
2. Create an object(we'll call it distances) and set each key, to be every vertex in the
   adjacency list with a value of infinity, except for the starting vertex which should
   have a value of 0. 
3. After setting a value in the distances object, add each vertex with a prority of
   infinity to the PriorityQueue, except the starting vertex, which should have
   a priority of 0 because that's where we begin.
4. Create another Object called previous and set each key to be every vertex in the
   adjecency list(AL) with a value of null. 
5. Start iteration as long as there is anything in PriorityQueue(PQ):
    6.  Dequeue a vertex from the PQ.
    7.  If that vertex is the same as the ending vertex we are done.    
    8.  Otherwise iterate through each value in the AL at that vertex:
        9.  Calculate the distance to that vertex from the starting vertex
        10. if the distance is less than what is currently stored in our distances object            
            11. update distances object with new lower distance.
            12. update the previous object to contain that vertex.            
            13. enqueue the vertex with the total distance from the start node.
*/

/* Naive version to get the smallest priority first */
// class PriorityQueue {
//     constructor() {
//         this.values = [];
//     }
//     /* add element and it's priority to the queue */
//     enqueue(val, prt) {
//         this.values.push({ val, prt });
//         this.sort();
//     }
// 
//     dequeue() {
//         return this.values.shift();
//     }
// 
//     sort() {
//         this.values.sort((a, b) => a.prt - b.prt);
//     }
// }

const PriorityQueue = require('../dataStructures/queue/priorityQueue.js');

class WeightedGraph {
    constructor() {
        this.adjacencyList = {}
    }
    /* addVertex() pseudo code:
    1. Accepts a name of a vertex.
    2. Add key to AdjacencyList(AL) with the name of the vertex and set its value to be
       an em pty array.
    */
    addVertex(vertex) {
        if (!vertex) return undefined; // no name edge case    
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
        return this;
    }

    /* addEdge() pseudo code:
    1. Accepts two vertices.
    2. Find in the AL the key of vertex1 and push the vertex2 to the array.
    3. Find in the AL the key of vertex2 and push the vertex1 to the array.    
    */
    addEdge(vrx1, vrx2, weight = 0) { // !toLowerCase or toUpperCase args case apsent
        if (!vrx1 || !vrx2) return undefined; // arguments edge case
        let vrx1found = false; // assign variable for duplicates check in vrx1 values
        let vrx2found = false; // assign variable for duplicates check in vrx2 values
        if (!this.adjacencyList[vrx1].length && !this.adjacencyList[vrx2].length) {
            // if both vertices are empty push new node to each one
            this.adjacencyList[vrx1].push({ node: vrx2, weight: weight });
            this.adjacencyList[vrx2].push({ node: vrx1, weight: weight });
        } else if (this.adjacencyList[vrx1].length && this.adjacencyList[vrx2].length) {
            // if both vertices are not empty
            this.adjacencyList[vrx1].forEach(el => { // iterate through elements
                if (el.node === vrx2) { // if such node already exist
                    vrx1found = true; // mark duplication
                }
            });
            this.adjacencyList[vrx2].forEach(el => { // iterate through element
                if (el.node === vrx1) { // if such node already exist
                    vrx2found = true; // mark duplication
                }
            });
            // add new nodes if such were not found among vertices values
            if (!vrx1found) this.adjacencyList[vrx1].push({ node: vrx2, weight: weight });
            if (!vrx2found) this.adjacencyList[vrx2].push({ node: vrx1, weight: weight });
        } else if (!this.adjacencyList[vrx1].length && this.adjacencyList[vrx2].length) {
            // if only first vertex is empty add new node to it's values
            this.adjacencyList[vrx1].push({ node: vrx2, weight: weight });
            // check second vertex values for duplication node
            this.adjacencyList[vrx2].forEach(el => {
                if (el.node === vrx1) {
                    vrx2found = true;
                }
            });
            // if duplication node was not found, add new node to second vertex values
            if (!vrx2found) this.adjacencyList[vrx2].push({ node: vrx1, weight: weight });
        } else if (this.adjacencyList[vrx1].length && !this.adjacencyList[vrx2].length) {
            // if only second vertex is empty add new node to it's values
            this.adjacencyList[vrx2].push({ node: vrx1, weight: weight });
            // check first vertex values for duplication node
            this.adjacencyList[vrx1].forEach(el => {
                if (el.node === vrx2) {
                    vrx1found = true;
                }
            });
            // if duplication node was not found, add new node to first vertex values
            if (!vrx1found) this.adjacencyList[vrx1].push({ node: vrx2, weight: weight });
        }
        return this; // still not working correctly  
    }

    /* Dijkstras Algo */
    shortestPathFind(start, end) {
        const nodes = new PriorityQueue();
        const distances = {};
        const previous = {};
        let path = [];
        let total = 0;
        let smallest;
        let curr;
        // build up initial state
        for (let vertex in this.adjacencyList) {
            if (vertex === start) {
                distances[vertex] = 0;
                nodes.myInsert(vertex, 0);
            } else {
                distances[vertex] = Infinity;
                nodes.myInsert(vertex, Infinity);
            }
            previous[vertex] = null;
        }
        // as long as there is something to visit
        while (nodes.values.length) {
            curr = nodes.myRemove();
            smallest = curr.val;

            if (smallest === end) {
                // we are done
                // bild up path to return
                while (previous[smallest]) {
                    for (let temp of this.adjacencyList[smallest]) {
                        if (temp.node === previous[smallest]) {
                            total += temp.weight;
                        }
                    }
                    // console.log(this.adjacencyList[smallest]);
                    // console.log(previous[smallest]);
                    path.push(smallest);
                    // total += curr.prt;
                    smallest = previous[smallest];
                }
                break;
            }

            if (smallest || distances[smallest] !== Infinity) { // (smallest !== end)                
                // find neighboring node
                for (let node in this.adjacencyList[smallest]) {
                    let nextNode = this.adjacencyList[smallest][node];
                    // calculate new distance to neigboring node
                    let dist = distances[smallest] + nextNode.weight;
                    if (dist < distances[nextNode.node]) {
                        // updating new smallest distance to neighbor
                        distances[nextNode.node] = dist;
                        // updating previous path to that neighbor
                        previous[nextNode.node] = smallest;
                        // enqueue in priorityQueue with new priority
                        nodes.myInsert(nextNode.node, dist);
                    }
                }
            }
        }

        path.push(start);
        path.reverse();
        path.push(`${total} miles`);
        // console.log(total);
        return path;
    }
}

let graph = new WeightedGraph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('F');
graph.addVertex('E');

graph.addEdge('A', 'B', 4);
graph.addEdge('A', 'C', 2);
graph.addEdge('B', 'E', 3);
graph.addEdge('C', 'D', 2);
graph.addEdge('C', 'F', 4);
graph.addEdge('D', 'E', 3);
graph.addEdge('D', 'F', 1);
graph.addEdge('E', 'F', 1);

// Object.entries(graph.adjacencyList).forEach(([key, value]) => {
//     console.log(`${key} :`, value);
// });

console.log('shortestPathFind("A", "E"): ', graph.shortestPathFind('A', 'E'));
console.log('shortestPathFind("E", "C"): ', graph.shortestPathFind('E', 'C'));
console.log('shortestPathFind("B", "C"): ', graph.shortestPathFind('B', 'C'));
console.log('shortestPathFind("B", "D"): ', graph.shortestPathFind('B', 'D'));
console.log('shortestPathFind("F", "A"): ', graph.shortestPathFind('F', 'A'));