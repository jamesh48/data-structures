var Stack = function() {
  this.storage = {};
};

Stack.prototype.push = function (value) {
  let keyLength = Object.keys(this.storage).length;
  this.storage[keyLength] = value;
};

Stack.prototype.pop = function () {
  let keyLength = Object.keys(this.storage).length;
  let deleted = this.storage[keyLength - 1];
  delete this.storage[keyLength - 1];
  return deleted;
};

Stack.prototype.size = function () {
  return Object.keys(this.storage).length;
};

