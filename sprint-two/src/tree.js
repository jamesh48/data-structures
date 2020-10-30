var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var newNode = Tree(value);
  this.children.push(newNode);
};

treeMethods.contains = function(target) {
  var result = false;

  var helper = function(target, obj) {
    for (var i = 0; i < obj.length; i++) {
      if (obj[i].value === target) {
        result = true;
      }
      if (obj[i].children.length > 0) {
        helper(target, obj[i].children);
      }
    }
  };
  helper(target, this.children);
  return result;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

//  addChild O(1)
//  contains O(n)
