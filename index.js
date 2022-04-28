const DoublyLinkedList = require("./linked_list/doubly-linked-list.js")

let linkedList = new DoublyLinkedList(10)

linkedList.prepend(11)
linkedList.append(13)
linkedList.insert(2, 12)
linkedList.printList()