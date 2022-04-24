class BTArray {
  constructor() {
    this.length = 0
    this.data = {}
  }

  get = (index) => {
    return this.data[index]
  }

  push = (value) => {
    this.data[this.length] = value;
    this.length++;
    return this.length;
  }

  pop() {
    const lastItem = this.data[this.length - 1]
    delete this.data[this.length - 1]
    this.length--;
    return lastItem;
  }
}

module.exports = BTArray;