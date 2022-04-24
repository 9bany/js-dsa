class BTArray {
  constructor() {
    this.length = 0
    this.data = null
  }

  get = (index) => {
    return this.data[index]
  }

  push = (value) => {
  
  }
}

const newArray = new BTArray()
console.log(newArray)