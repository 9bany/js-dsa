const LinkedList = require("./linked_list/linked_list.js")

let linkedList = new LinkedList(10)

linkedList.append(11)
linkedList.append(12)
linkedList.prepend(8)
linkedList.insert(0987654, 9)
linkedList.printList()
linkedList.remove(0)
linkedList.printList()
