var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    // list.tail = Node(value);
    var newTail = Node(value);

    if (!list.head) {
      list.head = newTail;
      list.tail = newTail;
    } else {
      list.tail.next = newTail;
      list.tail = newTail;
    }
  };

  list.removeHead = function() {

  };

  list.contains = function(target) {
  };

  return list;
};


var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
