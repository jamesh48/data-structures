var Stack = function() {
  let obj = {};
  extend(obj, stackMethods);
  obj['storage'] = {};
  return obj;
};

let extend = function(obj, methods) {
  for (let key in methods) {
    obj[key] = methods[key];
  }
};

var stackMethods = {
  push: function (value) {
    let keyLength = Object.keys(this.storage).length;
    this.storage[keyLength] = value;
  },
  pop: function () {
    let keys = Object.keys(this.storage);
    let keyLength = keys.length;
    let deleted = this.storage[keyLength - 1];
    delete this.storage[keyLength - 1];
    return deleted;
  },
  size: function () {
    return Object.keys(this.storage).length;
  }
};


