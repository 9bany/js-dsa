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
}

module.exports = BTArray;