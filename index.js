const LinkedList = require("./linked_list/linked_list.js")

let linkedList = new LinkedList(10)

linkedList.prepend(11)
linkedList.append(13)
linkedList.insert(2, 12)
linkedList.printList()
linkedList.reverse()
linkedList.printList()