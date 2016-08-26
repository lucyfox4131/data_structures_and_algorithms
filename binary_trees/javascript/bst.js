TreeNode = function(data, left=null, right=null){
  this.data = data;
  this.left = left;
  this.right = right;
};

BST = function(){
  this.rootNode = null;
}

BST.prototype.push = function (data) {
  if(!this.rootNode){
    this.rootNode = new TreeNode(data)
  }else{
    compareNodes(data, this.rootNode);
  }
};

function compareNodes(data, currentNode){
  if(data <= currentNode.data){
    checkLeft(data, currentNode)
  } else if(data > currentNode.data){
    checkRight(data, currentNode)
  }
}

function checkLeft(data, currentNode){
  if(!currentNode.left){
    currentNode.left = new TreeNode(data)
  }else{
    compareNodes(data, currentNode.left)
  }
}

function checkRight(data, currentNode){
  if(!currentNode.right){
    currentNode.right = new TreeNode(data)
  }else{
    compareNodes(data, currentNode.right)
  }
}

BST.prototype.find = function (num) {
  if (this.rootNode){
    var node = findNode(num, this.rootNode)
    return node
  }else{
    return null
  }
};

function findNode(num, currentNode){
  if(currentNode.data === num){
    return currentNode
  } else if (num <= currentNode.data){
    return currentNode.left ? findNode(num, currentNode.left) : null
  } else if (num > currentNode.data){
    return currentNode.right ? findNode(num, currentNode.right) : null
  }
}

BST.prototype.toArray = function () {
  return []
  // starting with the left side, return root, then left untill you get down to the bottom,
  // then return all from the right side till you get to the bottom
};

BST.prototype.min = function () {
  if(!this.rootNode){
    return null
  }else{
    return findMin(this.rootNode)
  }
};

function findMin(node){
  if(node.left){
    return findMin(node.left)
  }else{
    return node.data
  }
}

BST.prototype.max = function () {
  if(!this.rootNode){
    return null
  }else{
    return findMax(this.rootNode)
  }
};

function findMax(node){
  if(node.right){
    return findMax(node.right)
  }else{
    return node.data
  }
}
