const LinkedList = require("./linked_list/linked_list.js")

let linkedList = new LinkedList(10)

linkedList.append(11)
linkedList.prepend(1)
linkedList.append(12)
linkedList.printList()
// console.log(JSON.stringify(linkedList))
