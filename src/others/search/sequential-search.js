const { defaultEquals } = require('../../util/index')

const DOES_NOT_EXIST = -1

// 顺序搜索

const sequentialSearch = (array, value, equalsFn = defaultEquals) => {
  for (let i = 0; i < array.length; i++) {
    if (equalsFn(array[i], value)) {
      return i
    }
  }
  return DOES_NOT_EXIST
}

const array = [5, 4, 3, 2, 1]
console.log('搜索结果', sequentialSearch(array, 3))
