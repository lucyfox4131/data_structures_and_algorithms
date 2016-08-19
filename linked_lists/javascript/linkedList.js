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
  }
  else {
    var lastNode = findFinalNode(this.head);
    lastNode.nextNode = new ListNode(data);
  }
  return this._length += 1;
};

List.prototype.pop = function () {
  return null;
};

function findFinalNode(currentNode){
  if (currentNode.nextNode === null){
    return currentNode
  }
  else {
    return findFinalNode(currentNode.nextNode);
  }
};
