var Queue = function() {
  let obj = {};
  extendTwo(obj, queueMethods);
  obj['storage'] = {};
  return obj;
};

var extendTwo = function(obj, methods) {
  for (let key in methods) {
    obj[key] = methods[key];
  }
};

var queueMethods = {
  enqueue: function (value) {
    let keyLength = Object.keys(this.storage).length;
    if (keyLength === 0) {
      this.storage[0] = value;
    } else {
      for (let i = 1; i <= keyLength; i++) {
        this.storage[i] = this.storage[i - 1];
      }
      this.storage[0] = value;
    }
  },
  dequeue: function() {
    let keys = Object.keys(this.storage);
    let keyLength = keys.length;
    let deleted = this.storage[keyLength - 1];
    delete this.storage[keyLength - 1];
    return deleted;
  },
  size: function() {
    return Object.keys(this.storage).length;
  }
};


