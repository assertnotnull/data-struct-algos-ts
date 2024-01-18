export class GraphNode {
  private edges: GraphEdge[] = [];
  constructor(private value: string | number) {}

  getValue() {
    return this.value;
  }

  addEdge(edge: GraphEdge) {
    this.edges.push(edge);
  }

  getEdges() {
    return this.edges;
  }
}

export class GraphEdge {
  constructor(private cost: number, private node: GraphNode) {}

  getCost() {
    return this.cost;
  }

  getNode() {
    return this.node;
  }
}
