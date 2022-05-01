class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

// Use linked list
class Stack {
  constructor() {
    this.top = null
    this.bottom = null
    this.length = 0 
  }

  peek() {
    return this.top 
  }

  push(value) {
    const newNode = new Node(value)
    if (this.length === 0) {
      this.top = newNode
      this.bottom = newNode
    } else {
      const holdingPointer = this.top;
      this.top = newNode;
      this.top.next = holdingPointer;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.top) {
      return null;
    }
    if(this.top === this.bottom) {
      this.bottom = null;
    }
    // const holdingPointer = this.top;
    this.top = this.top.next;
    this.length--;
    return this;
  }
}

// Use array
class StackInArray {
  constructor() {
    this.array = [];
  }

  peek() {
    return this.array[0]
  }

  push(value) {
    if (this.array.length == 0) {
      const newNode = new Node(value)
      this.array = [newNode]
    } else {
      const newNode = new Node(value)
      this.array = [newNode, ...this.array] 
    }
  }

  pop() {
    return this.array.pop()
  }
}

module.exports = {Stack, StackInArray};