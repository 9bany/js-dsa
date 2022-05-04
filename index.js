const BinarySearchTree = require("./BST")

const tree = new BinarySearchTree()
tree.insert(2)
tree.insert(8)
tree.insert(6)
tree.insert(12)
tree.insert(30)
tree.insert(45)
tree.insert(50)



console.log(JSON.stringify(tree.root))
console.log(tree.lookup(50))