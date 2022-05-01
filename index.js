const Stack = require("./stacks")

let stack = new Stack()
stack.push('google')
stack.push('udemy')
stack.push('discord')
stack.push('youtube')

console.log(stack.pop())