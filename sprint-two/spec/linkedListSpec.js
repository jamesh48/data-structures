describe('linkedList', function() {
  var linkedList;

  beforeEach(function() {
    linkedList = LinkedList();
  });

  it('should have a head and tail', function() {
    expect(linkedList).to.have.property('head');
    expect(linkedList).to.have.property('tail');
  });

  it('should have methods named "addToTail", "removeTail", "addToHead", "removeHead", and "contains"', function() {
    expect(linkedList.addToTail).to.be.a('function');
    expect(linkedList.removeHead).to.be.a('function');
    expect(linkedList.contains).to.be.a('function');
    expect(linkedList.addToHead).to.be.a('function');
    expect(linkedList.removeTail).to.be.a('function');
  });

  it('should designate a new tail when new nodes are added', function() {
    linkedList.addToTail(4);
    expect(linkedList.tail.value).to.equal(4);
    linkedList.addToTail(5);
    expect(linkedList.tail.value).to.equal(5);
  });

  it('should add to head when addToHead is called', function() {
    linkedList.addToHead(5);
    expect(linkedList.head.value).to.equal(5);
    expect(linkedList.tail.value).to.equal(5);
  });

  it('should create a new node when addToHead is called and assign that node to the "next" key of head', function() {
    linkedList.addToHead(5);
    linkedList.addToHead(4);
    expect(linkedList.head.value).to.equal(4);
    expect(linkedList.head.next.value).to.equal(5);
    expect(linkedList.tail.value).to.equal(5);
    expect(linkedList.tail.previous.value).to.equal(4);
  });

  it('should remove the head from the list when removeHead is called', function() {
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    expect(linkedList.head.value).to.equal(4);
    linkedList.removeHead();
    expect(linkedList.head.value).to.equal(5);
  });

  it('should return the value of the former head when removeHead is called', function() {
    linkedList.addToTail(4);
    expect(linkedList.removeHead()).to.equal(4);
  });

  it('should remove the tail from the list when removeTail is called', function() {
    linkedList.addToHead(4);
    linkedList.addToHead(5);
    expect(linkedList.tail.value).to.equal(4);
    linkedList.removeTail();
    expect(linkedList.tail.value).to.equal(5);
  });

  it('should contain a value that was added', function() {
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    expect(linkedList.contains(4)).to.equal(true);
    expect(linkedList.contains(5)).to.equal(true);
    expect(linkedList.contains(6)).to.equal(false);
  });

  it('should not contain a value that was removed', function() {
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    linkedList.removeHead();
    expect(linkedList.contains(4)).to.equal(false);
  });

  it('should include a "next" && "previous" key on the lists head', function() {
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    expect(linkedList.containsKeyOrValue('head', 'next', 'k')).to.equal(true);
    expect(linkedList.containsKeyOrValue('head', 'previous', 'k')).to.equal(true);
  });

  it('should have the head "previous" value set to null', function() {
    linkedList.addToTail(3);
    linkedList.addToTail(4);
    expect(linkedList.containsKeyOrValue('head', null, 'v')).to.equal(true);
  });

  it('should include a "next" && "previous" key on the lists tail', function() {
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    expect(linkedList.containsKeyOrValue('tail', 'next', 'k')).to.equal(true);
    expect(linkedList.containsKeyOrValue('tail', 'previous', 'k')).to.equal(true);
  });


  it('should have the tail "next" value set to null', function() {
    linkedList.addToTail(3);
    linkedList.addToTail(4);
    expect(linkedList.containsKeyOrValue('tail', null, 'v')).to.equal(true);
  });

  it('should return false if the target is undefined', function() {
    expect(linkedList.contains(undefined)).to.equal(false);
  });

  // add more tests here to test the functionality of linkedList
});
