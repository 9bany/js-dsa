const BTArray = require('./array/btarray.js')
const newArray = new BTArray()
newArray.push(1)
newArray.push(2)
newArray.push(3)
console.log("push result", newArray)
newArray.delete(1)
console.log("delete result", newArray)

