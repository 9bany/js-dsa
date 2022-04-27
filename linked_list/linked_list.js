class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null
    }
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    var newNode = {
      value: value,
      next: null
    }
    this.tail.next = newNode
    this.tail = newNode
    this.length++;
    return this;
  }
  
  prepend(value) {
    var newNode = {
      value: value,
      next: null
    }
    newNode.next = this.head
    this.head = newNode
    this.length++;
    return this;
  }

  printList() {
    var array = []
    var currentNode = this.head
    while(currentNode != null) {
      array.push(currentNode)
      currentNode = currentNode.next
    }
    console.log(array)
    return array 
  }
}

module.exports = LinkedList;