const HashTable = require("./hashtable/hashtable.js")

let hashTable = new HashTable(50)
hashTable.set("grapes", '1000')
hashTable.set("apples", 100)
let result = hashTable.get("apples")

console.log(result)
