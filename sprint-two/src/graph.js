

// Instantiate a new graph
var Graph = function() {
  this.list = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.list[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return Object.keys(this.list).includes(node.toString());
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  this.list[node].forEach(element => this.removeEdge(node, element));
  delete this.list[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return this.list[fromNode].includes(toNode) && this.list[toNode].includes(fromNode);
  // for (let key in this.list) {
  //   if (this.list[key].includes(fromNode) && this.list[key].includes(toNode)) {
  //     return true;
  //   }
  // }
  // return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.list[fromNode].push(Number(toNode));
  this.list[toNode].push(Number(fromNode));
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  this.list[fromNode].splice(this.list[fromNode].indexOf(toNode), 1);
  this.list[toNode].splice(this.list[toNode].indexOf(fromNode), 1);
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  Object.keys(this.list).forEach(node => cb(node));
};

/*
 * Complexity: What is the time complexity of the above functions?
 addNode O(1)
 contains O(n)
 removeNode O(n)
 hasEdge O(n)
 addEdge O(1)
 removeEdge O(n)
 forEachNode O(n)
 */


