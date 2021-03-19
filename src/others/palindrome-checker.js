const Deque = require('../data-structures/deque')

function palindromeChecker (aString) {
  // 检测参数是否合法
  if (aString === undefined || aString === null || (aString !== null && aString.length === 0)) {
    return false
  }

  const deque = new Deque()

  const lowerString = aString.toLocaleLowerCase().split(' ').join('')

  let isEqual = true
  let firstChar, lastChar

  for (let i = 0; i < lowerString.length; i++) {
    deque.addBack(lowerString.charAt(i))
  }

  while (deque.size() > 1 && isEqual) {
    firstChar = deque.removeFront()
    lastChar = deque.removeBack()
    isEqual = (firstChar === lastChar)
  }

  return isEqual
}

console.log(palindromeChecker('121') === true)
console.log(palindromeChecker('1') === true)
console.log(palindromeChecker('12') === false)
console.log(palindromeChecker('Step on no pets') === true)
