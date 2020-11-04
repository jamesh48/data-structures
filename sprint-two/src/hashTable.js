var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //Test checks for hash function collisions
  let bucketArr = this._storage.get(index);
  //If there is a collison...
  if (bucketArr !== undefined) {
    //If the key already exists...
    if (bucketArr.some((element) => {
      if (element.includes(k)) {
        return true;
      }
    }) === true) {
      this._storage.set(index, v);
      return;
    }

    bucketArr.push([k, v]);
    this._storage.set(index, bucketArr);
    return;
  };

  //Otherwise...
  let newBucketArr = [];
  newBucketArr.push([k, v]);
  this._storage.set(index, newBucketArr);
};

// HashTable.prototype.retrieve = function(k) {
//   var index = getIndexBelowMaxForKey(k, this._limit);
//   return this._storage.get(index);
// };

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  let bucketArr = this._storage.get(index);
  if (bucketArr !== undefined) {
    for (let i = 0; i < bucketArr.length; i++) {
      if (bucketArr[i][0] === k) {
        return bucketArr[i][1];
      }
    }
  }
  return this._storage.get(index);
};

HashTable.prototype.remove = function(k) {
  if (k === undefined) {
    return 'key is undefined';
  }
  var index = getIndexBelowMaxForKey(k, this._limit);

  this._storage.each((item, i, collection) => {
    if (item !== undefined) {
      for (let j = 0; j < item.length; j ++) {
        if (item[j].includes(k)) {
          collection.splice(index, 1);
          j += 2;
        }
      }
    }
  });
};



/*
 * Complexity: What is the time complexity of the above functions?
insert- O(n)
retrieve- O(n)
remove- O(n)
*/


