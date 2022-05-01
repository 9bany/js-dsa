const { StackInArray } = require("./stacks")

let stack = new StackInArray()
stack.push('google')
stack.push('udemy')
stack.push('discord')
stack.push('youtube')
stack.pop()

console.log(stack.peek())