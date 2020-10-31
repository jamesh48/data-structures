var BinarySearchTree = function(value) {
  this.root = value;
};

BinarySearchTree.prototype.createNode = function(value) {
  var node = {};
  node.value = value;
  node.left = null;
  node.right = null;
  return node;
};

BinarySearchTree.prototype.insert = function(value) {
  var newNode = createNode(value);
  if (!this.root) {
    this.root = newNode;
  } else {

  }
};

BinarySearchTree.prototype.contains = function(value) {

};

BinarySearchTree.prototype.depthFirstLog = function(cb) {

};

var binarySearchTree = new BinarySearchTree(5);

/*
 * Complexity: What is the time complexity of the above functions?
 insert
 contains
 depthFirstLog
 */
