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

module.exports = reverseString;