/* One of the most famous and widely used algorithms around.
Find the shortest path between two vertices on a graph.

Edsger Dijkstra was a Dutch programmer, physicist, essayist...
He helped to advance the field of computer science from an "art" to
an academic discipline.

Many of his discoveries and algorithms are still commonly used to this day.

Usage:
GPS - finding fastest route.
Network routing - finds open shortest path for data.
Biology - used to model the spread of viruses among people.
Airline tickets - finding cheapest route to your destination.
...

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
        return this;
    }

    /* .removeEdge()
    1. Accepts 2 vertices.
    2. The function should reassign the key of vertex1 to be an array,
       that does not contain vertex2.
    3. The function should reassign the key of vertex2 to be an array,
       that does not contain vertex1.     
    */
    removeEdge(vrx1, vrx2) { // not refactored for weighted graph
        if (!vrx1 && !vrx2) return undefined; // args edge case
        if (this.adjacencyList[vrx1] && this.adjacencyList[vrx2]) { // both exist
            // first way
            this.adjacencyList[vrx1].splice(this.adjacencyList[vrx1].indexOf(vrx2), 1);
            // this.adjacencyList[vrx2].splice(this.adjacencyList[vrx2].indexOf(vrx1), 1);

            // second way
            // this.adjacencyList[vrx1] = this.adjacencyList[vrx1].filter(el => el !== vrx2);
            this.adjacencyList[vrx2] = this.adjacencyList[vrx2].filter(el => el !== vrx1);
        } else if (!this.adjacencyList[vrx1] || !this.adjacencyList[vrx2]) { // nonexist 
            return undefined;
        }
    }

    /* .removeVertex()
    1. accept vertex name as argument
    2. iterate as long as there are any other vertices in the AL for that vertex.
    3. inside of the loop call removeEdge function with the vertex we are removing and
       and any values in the AL for that vertex.
    4. delete the key in AL for that vertex.        
    */
    myRemoveVertex(vrx) { // not refactored for weighted graph
        if (!vrx) return undefined; // no vrx passed in edge case
        if (!this.adjacencyList) return undefined; // adjacency list is empty edge case

        if (this.adjacencyList[vrx]) { // if this key exist in AL
            delete this.adjacencyList[vrx]; // delete vrx key from the AL properties
        }
        // inefficient moment: loop throught whole entire list
        for (let [key, value] of Object.entries(this.adjacencyList)) {
            // console.log('before: ', value);
            value = value.filter(el => el !== vrx); // return new value array without vrx
            // console.log('after: ',value);
            this.adjacencyList[key] = value; // assign new value to the exist key
        }
        return this;
    }

    removeVertex(vrx) { // not refactored for weighted graph
        if (!vrx) return undefined; // no vrx passed in edge case
        if (!this.adjacencyList) return undefined; // adjacency list is empty edge case

        while (this.adjacencyList[vrx].length) {
            let curr = this.adjacencyList[vrx].pop(); // last value of vrx key of AL
            // update vertices edges values without removed vertex
            this.adjacencyList[curr] = this.adjacencyList[curr].filter(el => el !== vrx);
        }
        delete this.adjacencyList[vrx]; // del vertex key from AL
        return this;
    }

    /* Depth first traverse recursive way pseudo code:
    1. if empty vertex - starting point edge case.
    2. add vertex to the result list.
    3. mark vertex as visited.
    4. for each neighbor in vertex`s neighbors.
    5. if neighbor not visited.
    6. call DFS on neighbor recursively.
    */
    myDFtraverseRecursive(vrx, result = [], marked = {}) {
        if (!vrx) return undefined; // no vertex passed in edge case
        if (!marked[vrx]) { // current vertex not visited
            result.push(vrx); // add current vertex to the result array
            marked[vrx] = true; // mark current vertex as visited
        }
        // if (this.adjacencyList[vrx].length > 0) { doubles check unnecessary processes
        this.adjacencyList[vrx].forEach(element => { // check every edge of the node
            if (!marked[element]) { // if edged vertex is not visited
                this.myDFtraverseRecursive(element, result, marked); // call traverse on it
            }
        });
        return result; // return result
    }

    /* DF traverse iterative pseudo code:
    (uses array based Stack(LIFO principle) data structure)
    1. the function should accepts a starting node.
    2. create a stack to help use keep track of vertices(use a list/array).
    3. create a list to store the end result, to be returned at the very end.
    4. create an object to store visited vertices.
    5. add starting vertex to the stack, and mark it visited.
    6. while stack has something in it:
        7. .pop() the next vertex from the stack.
        8. if that vertex hasn't been visited yet:
            9.  mark it as visited
            10. add it to the result list
            11. push all of it's neighbors into the stack list
    12. return the result array. */
    dFtraverseIterative(vrx) {
        const stack = [vrx]; // assign stack and add start vertex to it
        const result = []; // assign result array
        const visited = {}; // assign object for visited vertices
        let curr; // assign current vertex
        visited[vrx] = true; // mark start vertex as visited and add to visited object
        while (stack.length) { // while stack not empty
            curr = stack.pop(); // remove and store last element of the stack
            result.push(curr); // add current element to the result array
            this.adjacencyList[curr].forEach(el => { // iterate edges of current element
                if (!visited[el]) { // if node at certain edge is not visited
                    visited[el] = true; // set that node as visited
                    stack.push(el); // add that node to the stack
                }
            });
        }
        return result; // return result
    }

    /* Breath First traverse pseudo code:
    (uses array based Queue(FIFO principle) data structure)
    1. This function should accept a starting vertex. 
    2. Create a queue and place a strarting vertex in it.
    3. Create an array to store the visited nodes.(result array)
    4. Create an object for marked nodes.
    5. Mark the starting vertex as visited.
    6. iterate while queue has something in it:
        7. remove the first vertex from the queue and push it to the result array.
        8. iterate over each vertex in the AL for the vertex you are visiting(current).
        9. if the vertex hasn't been visited yet, mark it as visited
           and add to hte queue.
    10. return the result array.
    */
    bFtraverse(vrx) {
        const queue = [vrx]; // assign queue and add start vertex to it
        const result = []; // assign result array
        // assign object for visited vertices. add start vertex and mark it as visited.
        const visited = { [vrx]: true };
        // console.log(visited);
        let curr; // assign current vertex        
        // visited[vrx] = true; // mark start vertex as visited and add to visited object
        while (queue.length) { // while queue not empty
            curr = queue.shift(); // remove and store the first element of the queue
            result.push(curr); // add current element to the result array
            this.adjacencyList[curr].forEach(el => { // iterate edges of current element
                if (!visited[el]) { // if node at certain edge is not visited
                    visited[el] = true; // set that node as visited
                    queue.push(el); // add that node to the queue
                }
            });
        }
        // console.log(result.length); // wawes number
        return result; // return result
    }

    dijkstrasAlgoForShortesPath(start, end) {
        let previous = {};
        let priorityQueue = new PriorityQueue();
        let distances = {};
        Object.keys(this.adjacencyList).forEach(key => {
            if (key === start) {
                distances[key] = 0;
                priorityQueue.myInsert(key, 0);
            }
            else {
                distances[key] = Infinity;
                priorityQueue.myInsert(key, Infinity);
            }
            previous[key] = null;
        });
        // console.log(priorityQueue.values);
        // console.log(distances);    
        // console.log(previous);
        let path = [];
        let total = 0;
        let curr;
        let smallest;
        while (priorityQueue.values.length) {
            curr = priorityQueue.myRemove();
            smallest = curr.val;
            // console.log(curr);
            if (smallest !== end) { // (curr.val || distances[curr.val] !== Infinity)            
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
                        priorityQueue.myInsert(nextNode.node, dist);
                    }
                }
                // console.log('distances: ', distances); // [A:0] [B:4] [C:2]...
                // console.log('prevsious: ', previous);  // [A:0] [B:A] [C:A]...    
            }

            if (curr.val === end) {
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
        }

        path.push(start);
        path.reverse();
        console.log('total distance: ', total);
        return path;
        // console.log('distances: ', distances);
        // console.log('prevsious: ', previous);
        // console.log('pq values: ', priorityQueue.values);
    }
}

// let weightedGraph = new WeightedGraph();
// weightedGraph.addVertex('A');
// weightedGraph.addVertex('B');
// weightedGraph.addVertex('C');
// weightedGraph.addVertex('D');
// weightedGraph.addVertex('E');
// weightedGraph.addVertex('F');
// weightedGraph.addEdge('A', 'B', 10);
// console.log('weightedGraph values: ', Object.values(weightedGraph.adjacencyList));
// weightedGraph.addEdge('A', 'B', 10); // duplicate edge case
// weightedGraph.addEdge('A', 'C', 10);
// weightedGraph.addEdge('B', 'D', 12);
// weightedGraph.addEdge('C', 'E', 12);
// weightedGraph.addEdge('D', 'E', 30);
// weightedGraph.addEdge('D', 'F', 15);
// weightedGraph.addEdge('E', 'F', 15);
// console.log('weightedGraph: ', weightedGraph);
// console.log('weightedGraph keys: ', Object.keys(weightedGraph.adjacencyList));
// console.log('weightedGraph values: ', Object.values(weightedGraph.adjacencyList));
// console.log('weightedGraph entries: ', Object.entries(weightedGraph.adjacencyList));

let pathMap = new WeightedGraph();
pathMap.addVertex('A');
pathMap.addVertex('B');
pathMap.addVertex('C');
pathMap.addVertex('D');
pathMap.addVertex('E');
pathMap.addVertex('F');
pathMap.addEdge('A', 'C', 2);
pathMap.addEdge('A', 'B', 4);
pathMap.addEdge('C', 'D', 2);
pathMap.addEdge('C', 'F', 4);
pathMap.addEdge('D', 'F', 1);
pathMap.addEdge('D', 'E', 3);
pathMap.addEdge('F', 'E', 1);
pathMap.addEdge('B', 'E', 3);

console.log('shortestPathFind("A", "E"): ', pathMap.dijkstrasAlgoForShortesPath('A', 'E'));
console.log('shortestPathFind("E", "C"): ', pathMap.dijkstrasAlgoForShortesPath('E', 'C'));
console.log('shortestPathFind("B", "C"): ', pathMap.dijkstrasAlgoForShortesPath('B', 'C'));
console.log('shortestPathFind("B", "D"): ', pathMap.dijkstrasAlgoForShortesPath('B', 'D'));
console.log('shortestPathFind("F", "A"): ', pathMap.dijkstrasAlgoForShortesPath('F', 'A'));



const dijkstrasAlgoForShortesPath = (start, end) => {
    let previous = {};
    let priorityQueue = new PriorityQueue();
    let distances = {};
    Object.keys(pathMap.adjacencyList).forEach(key => {
        if (key === start) {
            distances[key] = 0;
            priorityQueue.myInsert(key, 0);
        }
        else {
            distances[key] = Infinity;
            priorityQueue.myInsert(key, Infinity);
        }
        previous[key] = null;
    });
    // console.log(priorityQueue.values);
    // console.log(distances);    
    // console.log(previous);
    let path = [];
    let total = 0;
    let curr;
    let smallest;
    while (priorityQueue.values.length) {
        curr = priorityQueue.myRemove();
        smallest = curr.val;
        // console.log(curr);
        if (smallest !== end) { // (curr.val || distances[curr.val] !== Infinity)            
            // find neighboring node
            for (let node in pathMap.adjacencyList[smallest]) {
                let nextNode = pathMap.adjacencyList[smallest][node];
                // calculate new distance to neigboring node
                let dist = distances[smallest] + nextNode.weight;
                if (dist < distances[nextNode.node]) {
                    // updating new smallest distance to neighbor
                    distances[nextNode.node] = dist;
                    // updating previous path to that neighbor
                    previous[nextNode.node] = smallest;
                    // enqueue in priorityQueue with new priority
                    priorityQueue.myInsert(nextNode.node, dist);
                }
            }
            // console.log('distances: ', distances); // [A:0] [B:4] [C:2]...
            // console.log('prevsious: ', previous);  // [A:0] [B:A] [C:A]...    
        }

        if (curr.val === end) {
            // we are done
            // bild up path to return
            while (previous[smallest]) {
                for (let temp of pathMap.adjacencyList[smallest]) {
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
    }

    path.push(start);
    path.reverse();
    console.log('total distance: ', total);
    return path;

    // console.log('distances: ', distances);
    // console.log('prevsious: ', previous);
    // console.log('pq values: ', priorityQueue.values);
}

// console.log('shortestPathFind("A", "E"): ', dijkstrasAlgo('A', 'E'));
// console.log('shortestPathFind("E", "C"): ', dijkstrasAlgo('E', 'C'));
// console.log('shortestPathFind("B", "C"): ', dijkstrasAlgo('B', 'C'));
// console.log('shortestPathFind("B", "D"): ', dijkstrasAlgo('B', 'D'));
// console.log('shortestPathFind("F", "A"): ', dijkstrasAlgo('F', 'A'));

// console.log(dijkstrasAlgo('A', 'E'));
// console.log(dijkstrasAlgo('E', 'C'));
// console.log(dijkstrasAlgo('B', 'C'));
