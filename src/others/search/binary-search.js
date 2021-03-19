const { defaultCompare, lessOrEquals, Compare } = require('../../util/index')
const quickSort = require('../sort/quick-sort')
const DOES_NOT_EXIST = -1

// 二分搜索
const binarySearch = (array, value, compareFn = defaultCompare) => {
  const sortedArray = quickSort(array)

  let low = 0
  let high = array.length - 1

  while (lessOrEquals(low, high, compareFn)) {
    const middle = Math.floor((low + high) / 2)
    const element = sortedArray[middle]

    if (compareFn(element, value) === Compare.LESS_THAN) {
      low = middle + 1
    } else if (compareFn(element, value) === Compare.BIGGER_THAN) {
      high = middle - 1
    } else {
      return middle
    }
  }

  return DOES_NOT_EXIST
}

const array = [5, 4, 3, 2, 1]
console.log('搜索结果', binarySearch(array, 3))
