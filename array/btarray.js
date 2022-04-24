class BTArray {
  constructor() {
    this.length = 0
    this.data = {}
  }

  get = (index) => {
    return this.data[index]
  }

  getAll = () => {
    return this.data
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

  delete = (index) => {
    const item = this.data[index]
    this.shiftItms(index)
    this.pop()
    return item
  }

  shiftItms = (index) => {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i+1]
    }
  }
}

module.exports = BTArray;