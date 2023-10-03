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

  // remove a vertex and all its vertices from graph
  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }

    delete this.adjacencyList[vertex];
  }

  // depth first traversal - recursive
  depthFirstRecursive(start) {
    const result = [];
    const visited = {};
    const adjacencyList = this.adjacencyList;

    (function dfs(vertex) {
      if (!vertex) {
        return null;
      }

      visited[vertex] = true;
      result.push(vertex);

      adjacencyList[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          return dfs(neighbor);
        }
      });
    })(start);

    return result;
  }
}

let g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");
