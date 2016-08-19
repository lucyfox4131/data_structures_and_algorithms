function ListNode(data, nextNode = null){
  this.data = data;
  this.nextNode = nextNode;
};

function List(){
  this._length = 0;
  this.head = null;
}

List.prototype.push = function (data) {
  if (this._length == 0){
    this.head = new ListNode(data);
  }else {
    var lastNode = findFinalNode(this.head);
    lastNode.nextNode = new ListNode(data);
  }
  return this._length += 1;
};

List.prototype.pop = function () {
  if (this._length === 0){
    return null;
  } else if (this._length === 1){
    var headNode = this.head;
    this.head = null;
    this._length = 0;
    return headNode;
  } else {
    var lastNode = findFinalNode(this.head)
    var newLastNode = findSecondToLast(this.head)
    this._length -= 1;
    newLastNode.nextNode = null;
    return lastNode
  }
};

function findFinalNode(currentNode){
  if (currentNode.nextNode === null){
    return currentNode
  }
  else {
    return findFinalNode(currentNode.nextNode);
  }
};

function findSecondToLast(currentNode){
  if (currentNode.nextNode.nextNode === null){
    return currentNode
  }else{
    return findSecondToLast(currentNode.nextNode)
  }
};

List.prototype.delete = function (data) {
  // var node = findNodeWithData(this.head, data)
  if (this._length === 1 && this.head.data === data){
    this.head = null;
    this._length = 0;
    // I want to delete this node, if it has a child node, then I want it's parent node to have
    //the new child node be the current nodes child. else I'm basically just popping one off the end (can call)
    //that function again.
    //maybe have if case for only one length? That kind of makes sense to handle separately at first
  }
};


function findNodeWithData(currentNode, data){
  if (currentNode.data === data){
    return currentNode
  } else if (currentNode.data != data && currentNode.nextNode === null){
    return null
  } else {
    return findNodeWithData(currentNode.nextNode, data)
  }
}
