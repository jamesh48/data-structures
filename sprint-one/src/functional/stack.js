var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  // Implement the methods below
  someInstance.push = function(value) {
    let keys = Object.keys(storage);
    let objectLength = keys.length;
    storage[objectLength] = value;
  };

  someInstance.pop = function() {
    let keys = Object.keys(storage);
    let objectLength = keys.length;
    let deleted = storage[objectLength - 1];
    delete storage[objectLength - 1];
    return deleted;
  };

  someInstance.size = function() {
    let keys = Object.keys(storage);
    let objectLength = keys.length;
    return objectLength;
  };

  return someInstance;
};
