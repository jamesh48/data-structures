var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    let keysLength = Object.keys(storage).length;
    if (keysLength === 0) {
      storage[0] = value;
    } else {
      for (let i = 1; i <= keysLength; i++) {
        storage[i] = storage[i - 1];
      }
    }
    storage[0] = value;
  };

  someInstance.dequeue = function() {
    let keys = Object.keys(storage);
    let objectLength = keys.length;
    let deleted = storage[objectLength - 1];
    delete storage[objectLength - 1];
    return deleted;
  };

  someInstance.size = function() {
    let objectLength = Object.keys(storage).length;
    return objectLength;
  };

  return someInstance;
};
