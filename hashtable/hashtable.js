class HashTable {
  constructor(size) {
    this.data = new Array(size)
  }

  _hash(key) {
    let hash = 0
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i ) % this.data.length
    }
    return hash
  }

  set(key, value) {
    let address = this._hash(key)
    if (!this.data[address]) {
      this.data[address] = []
    }
    this.data[address].push([key, value])
    return this.data
  }

  get(key) {
    let address = this._hash(key)
    let currentBuckets = this.data[address]
    for(let i = 0; i < currentBuckets.length; i++) {
      if(currentBuckets[i][0] === key) {
        return currentBuckets[i][1]
      }
    }
    return undefined
  }

  keys() {
    if (!this.data.length) {
      return undefined
    }
    let keyArray = []
    for(let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        keyArray.push(this.data[i][0][0])
      }
    }
    return keyArray
  }
}

module.exports = HashTable;