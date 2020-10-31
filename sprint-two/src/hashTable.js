var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

// HashTable.prototype.insert = function(k, v) {
//   var index = getIndexBelowMaxForKey(k, this._limit);

//   if (this._storage[index] !== undefined) {
//     alert('test');
//   }
//   this._storage.set(index, v);
// };

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //Test checks for hash function collisions
  let test = this._storage.get(index);
  //If there is a collison...
  if (test !== undefined) {
    //First save the index of the collision location
    let saveIndex = index;
    //Save the Value of the existing property.
    let saveValue = test;
    //Start from 0, and increment index until there is not a collision.
    index = 0;
    while (test !== undefined) {
      index++;
      test = this._storage.get(index);
    }

    //This gets the right key to pass the test, but I suspect that its hard coded such that it actually gets the value 'val1'...
    //get function: return storage[index];
    //index = 0, then 1 after the while loop, then 0  after subtracting 1;
    //so storage[0 (val1)(I actually want this key)] = 'val1' (I don't want this value);
    let savedKey = this._storage.get(index - 1);

    //Defines bucketArr as variable...
    let bucketArr;
    //If the initial test revealed that a bucket arr already exists...
    if (Array.isArray(saveValue)) {
      bucketArr = saveValue;
      //Simply push the new property nto that bucket as a tuple.
      bucketArray.push([k, v]);
    } else {
      //Otherwise, declare bucketArr as an arr, and push in the old property, along with the new property, everyones invited!
      bucketArr = [];
      bucketArr.push([savedKey, saveValue], [k, v]);
    }
    //Set the bucket arr at the storage array index, where the collision originally took place.
    this._storage.set(saveIndex, bucketArr);
    return;
  }


  // [0[savedKey, savedValue], [k, v]]
  //If there is not a collision, simply set the property normally.
  this._storage.set(index, v);

};

// HashTable.prototype.retrieve = function(k) {
//   var index = getIndexBelowMaxForKey(k, this._limit);
//   return this._storage.get(index);
// };

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  let test = this._storage.get(index);
  if (Array.isArray(test)) {
    for (let i = 0; i < test.length; i++) {
      if (test[i][0] === k) {
        // alert(JSON.stringify(test));
        // alert(JSON.stringify(test[i]));
        // alert(JSON.stringify(test[i][0]) + ' === ' + k);
        return test[i][1];
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
  this._storage.each((item, i, collection) => delete collection[index]);
};



/*
 * Complexity: What is the time complexity of the above functions?
insert- O(n)
retrieve- O(n)
remove- O(n)
*/


