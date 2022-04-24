function reverseString(string) {
  if (!string || string.length < 2 || typeof string != 'string') {
    console.error("That's not good string")
    return
  }
  var backwords = []
  const totalItems = string.length
  for(let i = totalItems; i >=0; i--) {
    backwords.push(string[i])
  }
  return backwords.join('')
}

// better one
function reverseStringBetterOne(string) {
  return string.split('').reverse().join('')
}

module.exports = { 
  reverseString,
  reverseStringBetterOne
}