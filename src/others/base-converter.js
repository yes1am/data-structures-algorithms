const Stack = require('../data-structures/stack')

/**
 * 将十进制的数，转换为 {2,36} 中任意进制的数
 * @param {*} decNumber 十进制的数
 * @param {*} base 进制
 * @returns
 */
function baseConverter (decNumber, base) {
  const stack = new Stack()

  const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'

  let number = decNumber
  let binaryString = ''

  if (base < 2 || base > 36) {
    return ''
  }

  while (number > 0) {
    // 取模
    const rem = number % base
    stack.push(rem)
    number = Math.floor(number / base)
  }
  while (!stack.isEmpty()) {
    binaryString += digits[stack.pop()]
  }
  return binaryString
}

console.log(baseConverter(26, 16))
