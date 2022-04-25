const HashTable = require("./hashtable/hashtable.js")

let hashTable = new HashTable(50)
hashTable.set("bany", '1000')
hashTable.set("banyd", '1000')
console.log(JSON.stringify(hashTable))
