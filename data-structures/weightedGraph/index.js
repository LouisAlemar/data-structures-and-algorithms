/**
 * Name: Weighted Graph
 * Time Complexity:
 */

class WeightedGraph {
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
  addEdge(v1, v2, weight) {
    this.adjacencyList[v1].push({ node: v2, weight });
    this.adjacencyList[v2].push({ node: v1, weight });
  }
}
