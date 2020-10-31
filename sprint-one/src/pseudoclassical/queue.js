var Queue = function() {
  this.storage = {};
};

Queue.prototype.enqueue = function (value) {
  let keyLength = Object.keys(this.storage).length;
  if (keyLength === 0) {
    this.storage[0] = value;
  } else {
    for (let i = 1; i <= keyLength; i++) {
      this.storage[i] = this.storage[i - 1];
    }
    this.storage[0] = value;
  }
};

Queue.prototype.dequeue = function () {
  let keyLength = Object.keys(this.storage).length;
  let deleted = this.storage[keyLength - 1];
  delete this.storage[keyLength - 1];
  return deleted;
};

Queue.prototype.size = function() {
  return Object.keys(this.storage).length;
};


