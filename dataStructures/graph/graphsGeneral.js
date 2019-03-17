/* Graphs - data structures that are used in basically any social network.
Graphs data structure consists of a finite (and possible mutable) set of
vertices or nodes ot points, together with a set of unordered pairs of these
vertices for an undirected graph or a set of ordered pairs for a directed
graph.

Nodes + Connections = Valid Graph.
                [A]             [B] <-> [A] <-> [E]
        [B]             [F]     [B] <-> [C] <-> [D]        
                                [D] <-> [E] <-> [F]
        [C]             [E]
                [D]

[A] <-> [B] <-> [C]     [E] <-> [F] <-> [A]                 [B]
         |                       |                           |
        [D]                     [D]                 [C] <-> [D] <-> [E]
                                                             |
                                                            [F]
Actually doesn't matter how they connected, just have to be in same network.

Usage:
1. Social Networks.(Facebook, Instagram, Twitter...)
2. Location / Mapping.
3. Routing Algorithms.
4. Visual Hierarchy.
5. File System Optimizations
6. everywhere!

Terminology in graphs:
Vertex - a node(single circle, point).
Edge - connection(connections between vertices(nodes)).
Weighted/Unweighted - values assign to distances between vertices(nodes).
Directed/Undirected - directions assign to distances between vertices(nodes).

Tree(Graph theory):
Tree is an undirected graph in which any two vertices are connected by exactly one path.

Main Graph building ways:
1. Adjacency Matrix is 2 dimensional structure, implemented with
    nested arrays(in commons not always) and stores information in rows and columns.
                [A]             [A] <-> [B] <-> [C] <-> [D] <-> [E] <-> [F]
        [B]             [F]     *   [A]   [B]   [C]   [D]   [E]   [F]
                                [A]  0     1     0     0     0     1
        [C]             [E]     [B]  1     0     1     0     0     0
                [D]             [C]  0     1     0     1     0     0
                                [D]  0     0     1     0     1     0
                                [E]  0     0     0     1     0     1
                                [F]  1     0     0     0     1     0

2. Adjacency List (uses array or a list to store the edges)
                [0]             [0] <-> [1] <-> [2] <-> [3] <-> [4] <-> [5]
        [5]             [1]     [A] <-> [B] <-> [C] <-> [D] <-> [E] <-> [F]
                                [               {
        [4]             [2]     0 [1, 5],       A: ["F", "B"],
                [3]             1 [0, 2],       B: ["A", "C"],
                                2 [1, 3],       C: ["B", "D"],
                [A]             3 [2, 4],       D: ["C", "E"],
        [F]             [B]     4 [3, 5],       E: ["D", "F"],
                                5 [4, 0]        F: ["E", "A"]
        [E]             [C]     ]               }
                [D]

Big O Notation
|V| - number of vertices.
|E| - number of edges.
Operation               Adjacency List         Adjacency Matrix
Add Vertex              O(1)                    O(|V^2|) - V squared
Add Edge                O(1)                    O(1)
Remove Vertex           O(|V| + |E|)            O(|V^2|)
Remove Edge             O(|E|)                  O(1)
Query                   O(|V| + |E|)            O(1)
storage                 O(|V| + |E|)            O(|V^2|)

Adjacency List
1.Can take up less space(in sparse graphs).
2.Faster to iterate over all edges.
3.Can be slower to lookup specific edge.

Adjacency Matrix
1.Takes up more space(in sparse graphs).
2.Slower to iterate over all edges.
3.Faster to lookup specific edge.

Graph main functions:
1.addVertex.
2.removeVertex.
3.addEdge.
4.removeEdge.

Traversing Graph:
usage: Visiting/Checking/Updating each vertex in a graph.
real world examples:
1. Peer to peer networking.
2. Web Crawlers. (follow link from one page to other - graph traverse)
3. Finding 'closest' matches/recommendations. 
4. Shortest path problems:
        5. GPS navigation.
        6. Solving mazes.
        7. AI(artificial intelligence) shortest path to win the game.

Graph traverse types:
1. Depth first traversal.
   (choose direction. visit as far as there are siblings of every neighbor first).
2. Breadth first traversal.
   (visit al neighbors first and then siblings of each neighbor and so on...).
*/