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
  var result = []
  if(this.rootNode){
    addLeftSideValues(result, this.rootNode)
    addRightSideValues(result, this.rootNode.right)
    return result
  }else{
    return result
  }
};

function addLeftSideValues(array, currentNode){
  array.push(currentNode.data)
  if(currentNode.left != null){
    return addLeftSideValues(array, currentNode.left)
  }else if(currentNode.right != null){
    return addLeftSideValues(array, currentNode.right)
  }else if (currentNode.left === null && currentNode.right === null){
    return array
  }
}

function addRightSideValues(array, currentNode){
  array.push(currentNode.data)
  if(currentNode.right != null){
    return addRightSideValues(array, currentNode.right)
  }else if(currentNode.left){
    return addRightSideValues(array, currentNode.left)
  }
  return array
}

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

BST.prototype.sort = function () {
  var result = sortArray(this.toArray(), []);
  return result;
};

function sortArray(arrayToSort, result){
  for(var i = 0; i < arrayToSort.length; i++){
    if (result.length === 0){
      result.push(arrayToSort[i])
    } else{
      var num = arrayToSort[i]
      var index = firstLesserNum(result, num)
      if(index != null){
        result.splice(index, 0, num)
      } else{
        result.push(arrayToSort[i])
      }
    }
  }
  return result
}

function firstLesserNum(result, num) {
  for(var j = 0; j < result.length; j++){
    if(result[j] > num){
      return j;
    } else {
      return null
    }
  }
}

BST.prototype.postOrdered = function () {
  var result = [];
  if(this.rootNode){
    addPostOrdered(this.rootNode, result)
  };
  return result;
};


function addPostOrdered(currentNode, result){
  result.unshift(currentNode.data)
  if(currentNode.right) addPostOrdered(currentNode.right, result);
  if(currentNode.left) addPostOrdered(currentNode.left, result)
}
