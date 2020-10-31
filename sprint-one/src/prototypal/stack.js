var Stack = function() {
  let obj = Object.create(stackMethods);
  obj['storage'] = {};
  return obj;
};

var stackMethods = {
  push: function (value) {
    let keyLength = Object.keys(this.storage).length;
    this.storage[keyLength] = value;
  },
  pop: function () {
    let keyLength = Object.keys(this.storage).length;
    let deleted = this.storage[keyLength - 1];
    delete this.storage[keyLength - 1];
    return deleted;
  },
  size: function () {
    return Object.keys(this.storage).length;
  }
};


