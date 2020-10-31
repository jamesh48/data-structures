var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newTail = Node(value);

    if (!list.head) {
      list.head = newTail;
      list.tail = newTail;
    } else {
      list.tail.next = newTail;
      list.tail = newTail;
    }
  };

  list.removeTail = function() {
    var oldTail = list.tail;
    list.tail = null;
    if (list.head.value) {
      list.tail = oldTail.previous;
    }
    return oldTail.value;
  };

  list.addToHead = function(value) {
    var newHead = Node(value);
    var oldHead = list.head;

    if (!list.head) {
      list.head = newHead;
      list.tail = newHead;
    } else {
      oldHead.previous = newHead;
      newHead.next = oldHead;
      list.head = newHead;
    }
  };

  list.removeHead = function() {
    var oldHead = list.head;
    list.head = null;
    if (list.tail.value) {
      list.head = oldHead.next;
    }
    return oldHead.value;
  };

  list.contains = function(target) {
    if (target === undefined) {
      return false;
    }
    for (var key in list) {
      if (list[key].value === target) {
        return true;
      }
    }
    return false;
  };

  list.containsKeyOrValue = function(location, target, kOrV) {
    if (kOrV === 'k') {
      if (Object.keys(list[location]).includes(target)) {
        return true;
      }
      return false;
    }
    if (kOrV === 'v') {
      if (Object.values(list[location]).includes(target)) {
        return true;
      }
      return false;
    }
  };

  return list;
};


var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;
  node.previous = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

// addtoTail O(1)
// removeHead O(1)
// contains O(n)
