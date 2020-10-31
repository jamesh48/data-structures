var BinarySearchTree = function(value) {
  this.root = value;
  let newTreeX = {};
  newTreeX.left = null;
  newTreeX.right = null;
  newTreeX.value = value;
  _.extend(newTreeX, treeMethodsX);
  return newTreeX;
};

let treeMethodsX = {};

treeMethodsX.insert = function(value) {
  let newNode = BinarySearchTree(value);
  this.insertNode(this, newNode);
};

treeMethodsX.insertNode = function(root, newNode) {
  if (newNode.value < root.value) {
    if (!root.left) {
      root.left = newNode;
    } else {
      this.insertNode(root.left, newNode);
    }
  } else {
    if (!root.right) {
      root.right = newNode;
    } else {
      this.insertNode(root.right, newNode);
    }
  }
};

treeMethodsX.contains = function(target) {
  let result = false;

  var helper = function(target, obj) {
    if (target === obj.value) {
      result = true;
    }
    if (obj.left) {
      helper(target, obj.left);
    }
    if (obj.right) {
      helper(target, obj.right);
    }
  };
  helper(target, this);

  return result;
};

treeMethodsX.depthFirstLog = function(cb) {
  var helper = function(obj) {
    cb(obj.value);
    if (obj.left) {
      helper(obj.left);
    }
    if (obj.right) {
      helper(obj.right);
    }
  };
  helper(this);
};

// var binarySearchTree = new BinarySearchTree(5);

/*
 * Complexity: What is the time complexity of the above functions?
 insert O(n)
 contains O(n)
 depthFirstLog O(n)
 */
