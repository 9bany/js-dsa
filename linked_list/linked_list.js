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
      array.push(currentNode.value)
      currentNode = currentNode.next
    }
    console.log(array)
    return array 
  }

  insert(index, value) {
    if (index >= this.length) {
      return this.append(value)
    }
    
    if (index == 0) {
      return this.prepend(value)
    }
    
    var newNode = {
      value: value,
      next: null
    }
    
    const leader = this.traverseToIndex(index-1)
    const hodingPointer = leader.next
    leader.next =  newNode
    newNode.next = hodingPointer
    this.length++;
    return this;
  }

  traverseToIndex(index) {
    var counter = 0
    var currentNode = this.head
    while(index !== counter) {
      currentNode = currentNode.next 
      counter++;
    }
    return currentNode;
  }

  remove(index) {
    if (index === 0) { 
      this.head = this.head.next; 
      this.length--;
      return this 
    }
    const leader = this.traverseToIndex(index-1)
    const hodingPointer = leader.next
    leader.next = hodingPointer.next
    this.length--;
    return this
  }
}

module.exports = LinkedList;
