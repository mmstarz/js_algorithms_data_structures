/* Undirected Graph represent by Adjacency List */

class Graph {
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
        // if (this.adjacencyList.hasOwnProperty(vertex)) {
        //     console.log('key already exist');
        //     return this;
        // }
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
        return this;
    }

    /* addEdge() pseudo code:
    1. Accepts two vertices.
    2. Find in the AL the key of vertex1 and push the vertex2 to the array.
    3. Find in the AL the key of vertex2 and push the vertex1 to the array.    
    */
    addEdge(vrx1, vrx2) {
        if (!vrx1 || !vrx2) return undefined; // arguments edge case
        if (this.adjacencyList[vrx1] && this.adjacencyList[vrx2]) { // both exist
            if (!this.adjacencyList[vrx1].includes(vrx2)) { // duplicate edge check
                this.adjacencyList[vrx1].push(vrx2); // add edge to vertex1
            }
            if (!this.adjacencyList[vrx2].includes(vrx1)) { // duplicate edge check
                this.adjacencyList[vrx2].push(vrx1); // add edge to vertex2
            }
        } else if (!this.adjacencyList[vrx1] ||
            !this.adjacencyList[vrx2]) { // either vrx1 or vrx2 nonexist
            return undefined;
        }
    }
    /* .removeEdge()
    1. Accepts 2 vertices.
    2. The function should reassign the key of vertex1 to be an array,
       that does not contain vertex2.
    3. The function should reassign the key of vertex2 to be an array,
       that does not contain vertex1.     
    */
    removeEdge(vrx1, vrx2) {
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
    myRemoveVertex(vrx) {
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

    removeVertex(vrx) {
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

    /* traverseDFS pseudo code:
    1. The function should accept a starting node.
    2. Create a list to store the end result, to be returned at the very end.
    3. Create an Object to store visited vertices.    
    4. Create a helper function which accepts a vertex.
    5. The helper function should return early if the vertex is empty.
    6. The helper function should place the vertex it accepts into the visited object,
       and push that vertex into the result array.
    7. Iterate over all of the values in the adjacency list for that vertex.
    8. If any of those values have not been visited, recursively invoke
       the helper function with that vertex.
    9. return the result array.
    */
    dFtraverseRecursive(vrx) {
        const result = []; // assign result array
        const visited = {}; // assign visited object type
        const adjacencyList = this.adjacencyList; // for func in func special case
        // define and run at once. instead of function helper(){...}; helper();
        (function helper(node) {
            if (!node) return undefined; // no vertex passed in edge case
            visited[node] = true; // mark as visited
            result.push(node); // add to the result array
            // function in function reference special case can't read this.
            // console.log(this.adjacencyList[node]); // returns undefined
            // console.log(adjacencyList[node]); // returns values now
            adjacencyList[node].forEach(neighbor => { // for every edge of the node
                if (!visited[neighbor]) { // if edge not visited
                    return helper(neighbor); // call help on that edge
                }
            });
        })(vrx); // start vertex for helper function invokation
        return result; // return result
    }

    /* DF traverse not recursive pseudo code:
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
        console.log(result.length); // wawes number
        return result; // return result
    }

    bFreverse(vrx) {
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
            // reverse order of edges of current element and iterate them
            this.adjacencyList[curr].reverse().forEach(el => { 
                if (!visited[el]) { // if node at certain edge is not visited
                    visited[el] = true; // set that node as visited
                    queue.push(el); // add that node to the queue
                }
            });
        }
        return result; // return result
    }
}

let graph = new Graph();
let alphagraph = new Graph();

graph.addVertex('Tokyo');
graph.addVertex('SanFrancisco');
graph.addVertex('NewYork');
graph.addVertex('London');
graph.addVertex('Paris');
// add double edges
graph.addEdge('Tokyo', 'London');
graph.addEdge('NewYork', 'Paris');
graph.addEdge('NewYork', 'London');
graph.addEdge('SanFrancisco', 'Tokyo');
// add single edges
graph.addEdge('Tokyo', 'Berlin');
graph.addEdge('Hong Kong', 'London');
// console.log('graph: ', graph);
// duplicate edges case
// console.log('addEdge() duplicate edges case: ', graph.addEdge('Tokyo', 'London'));
// empty arg case
// console.log('addEdge() empty args case: ', graph.addEdge('', ''));
// no arg case
// console.log('addEdge() no arg case: ', graph.addEdge(''));
// nonexistance cases
// console.log('addEdge() nonexist vertices: ', graph.addEdge('Berlin', 'Hong Kong'));
// remove edges
// console.log('removeEdge() nonexist vertex case: ', graph.removeEdge('Kiev', 'London'));
graph.myRemoveVertex('SanFrancisco');
// console.log('graph: ', graph);
// console.log('****NEXT RUN****');
graph.myRemoveVertex('NewYork');
// console.log('graph: ', graph);
graph.addVertex('Aspen');
graph.addVertex('Kiev');
graph.addEdge('Tokyo', 'London');
graph.addEdge('Tokyo', 'Paris');
graph.addEdge('Paris', 'London');
graph.addEdge('Kiev', 'Aspen');
graph.addEdge('Aspen', 'Tokyo');
graph.addEdge('Kiev', 'London');
graph.addEdge('Kiev', 'Paris');
graph.addEdge('Kiev', 'Tokyo');
// console.log('graph: ', graph);
graph.removeVertex('Kiev');
// console.log('graph: ', graph);
alphagraph.addVertex('A');
alphagraph.addVertex('B');
alphagraph.addVertex('C');
alphagraph.addVertex('D');
alphagraph.addVertex('E');
alphagraph.addVertex('F');
alphagraph.addEdge('A', 'B');
alphagraph.addEdge('A', 'C');
alphagraph.addEdge('B', 'D');
alphagraph.addEdge('C', 'E');
alphagraph.addEdge('D', 'E');
alphagraph.addEdge('D', 'F');
alphagraph.addEdge('E', 'F');
console.log('alphagraph: ', alphagraph);
// console.log('graph.myDFtraverseRecursive("Aspen"): ', graph.myDFtraverseRecursive('Aspen'));
// console.log('alphagraph.myDFtraverseRecursive("A"): ', alphagraph.myDFtraverseRecursive('A'));
// console.log('graph.dFtraverseRecursive("Aspen"): ', graph.dFtraverseRecursive('Aspen'));
// console.log('alphagraph.dFtraverseRecursive("A"): ', alphagraph.dFtraverseRecursive('A'));
// console.log('graph.dFreverseIterative("Aspen"): ', graph.dFtraverseIterative('Aspen'));
// console.log('alphagraph.dFreverseIterative("A"): ', alphagraph.dFtraverseIterative('A'));
// console.log('graph.bFtraverse("Aspen"): ', graph.bFtraverse('Aspen'));
console.log('alphagraph.bFtraverse("A"): ', alphagraph.bFtraverse('A'));
//  console.log('graph.bFreverse("Aspen"): ', graph.bFreverse('Aspen'));
// console.log('alphagraph.bFreverse("A"): ', alphagraph.bFreverse('A'));
// graph.removeEdge('Tokyo', 'London');
// graph.removeEdge('Tokyo', 'SanFrancisco');
// graph.removeEdge('NewYork', 'Paris');
// graph.removeEdge('NewYork', 'London');
// console.log('graph: ', graph);
// graph.removeVertex('SanFrancisco');
// graph.removeVertex('NewYork');
// console.log('graph: ', graph);
// console.log('graph: ', Object.entries(graph));