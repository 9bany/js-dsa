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

  insert(index, value) {
    if (index > this.length - 1 || index < 0) {
      console.log("Index out of range")
      return this;
    }
    
    if (index == 0) {
      return this.prepend(value)
    }

    if (index == this.length - 1) {
      return this.append(value)
    }
    
    var currentIndex = 1
    var currentNode = this.head.next
    var previousNode = this.head
    
    var newNode = {
      value: value,
      next: null
    }
    
    while(currentNode != null) {
      if (currentIndex == index) {
        newNode.next = currentNode
        previousNode.next = newNode
        this.length++;
        break;
      }
      previousNode = currentNode
      currentNode = currentNode.next
      currentIndex++;
    }
    return this;
  }
}

module.exports = LinkedList;