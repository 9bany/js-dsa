class Node {
  constructor(value) {
    this.left = null
    this.right = null
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
  }
  insert(value) {
    const newNode = new Node(value)
    if(this.root === null) {
      this.root = newNode
    } else {
      let currentNode = this.root;
      while(true) {
        if(value < currentNode.value) {
          // left
          if(!currentNode.left) {
            currentNode.left = newNode
            return this;
          }
          currentNode = currentNode.left
        } else {
          // right
          if(!currentNode.right) {
            currentNode.right = newNode
            return this;
          }
          currentNode = currentNode.right
        }
      }
    }
    return this;
  }
  lookup(){}
}

function traverse(node) {
  const tree = { value: node.value }
  tree.left = node.left === null ? null : traverse(node.left)
  tree.right = node.right === null ? null : traverse(node.right)
  return tree 
}

module.exports = BinarySearchTree;