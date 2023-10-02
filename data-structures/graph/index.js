/**
 * Name: Graph
 * Time Complexity:
 *
 *      |v| - number of vertices
 *      |e| - number of edges
 *
 *      Adjacency List:
 *            Add Vertex: O(1)
 *            Add Edge: O(1)
 *            Remove Vertex: O(|v| + |e|)
 *            Remove Edge: O(|e|)
 *            Query: O(|v| + |e|)
 *            Storage: O(|v| + |e|)
 *      Adjacency Matrix:
 *            Add Vertex: O(|v^2|)
 *            Add Edge: O(1)
 *            Remove Vertex: O(|v^2|)
 *            Remove Edge: O(1)
 *            Query: O(1)
 *            Storage: O(|v^2|)
 */

class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  // add a vertex to graph
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  // add an edge to graph
  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }

  // remove an edge from graph
  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (v) => v !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (v) => v !== vertex1
    );
  }
}

let g = new Graph();
g.addVertex("Tokyo");
g.addVertex("Dallas");
g.addVertex("Aspen");
g.addEdge("Dallas", "Tokyo");
g.addEdge("Dallas", "Aspen");
