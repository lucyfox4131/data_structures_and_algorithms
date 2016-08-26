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
