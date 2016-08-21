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
  if (this._length === 1 && this.head.data === data){
    this.head = null;
    this._length = 0;
  }else if(this.head.data === data){
    this.head = this.head.nextNode;
    this._length -= 1;
  }else{
    var node = findNodeWithData(this.head, data)
    if (node){
      var parent = findParentNode(this.head, data)
      deleteNode(this, node, parent)
    }
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

function findParentNode(currentNode, data){
  if (currentNode.nextNode.data === data){
    return currentNode
  }else if(currentNode.nextNode === null){
    return null
  }else{
    return findParentNode(currentNode.nextNode, data)
  }
}

function deleteNode(list, nodeWithData, parentNode){
  var newChildNode = nodeWithData.nextNode;
  parentNode.nextNode = newChildNode;
  list._length -= 1;
}

List.prototype.toArray = function () {
  var array = []
};

List.prototype.lastNode = function () {
  if( this._length !== 0){
    return findFinalNode(this.head)
  }else{
    return null
  }
};

List.prototype.include = function (data) {
  if(this._length !== 0){
    return findNodeWithData(this.head, data) ? true : false
  }
};

List.prototype.find = function (data) {
  if(this._length !== 0){
    var node = findNodeWithData(this.head, data)
    return node ? node : null
  }
};
