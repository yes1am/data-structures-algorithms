const { defaultCompare, lessOrEquals, Compare, defaultEquals, defaultDiff } = require('../../util/index')
const quickSort = require('../sort/quick-sort')
const DOES_NOT_EXIST = -1

// 内插搜索
const interpolationSearch = (
  array,
  value,
  compareFn = defaultCompare,
  equalsFn = defaultEquals,
  diffFn = defaultDiff
) => {
  const sortedArray = quickSort(array)

  let low = 0
  let high = sortedArray.length - 1
  let position = -1
  let delta = -1

  while (lessOrEquals(low, high, compareFn)) {
    delta = diffFn(value, sortedArray[low]) / diffFn(sortedArray[high], sortedArray[low])
    position = low + Math.floor((high - low) * delta)
    if (equalsFn(sortedArray[position], value)) {
      return position
    }

    if (compareFn(sortedArray[position], value) === Compare.LESS_THAN) {
      low = position + 1
    } else {
      high = position - 1
    }
  }

  return DOES_NOT_EXIST
}

const array = [5, 4, 3, 2, 1]
console.log('搜索结果', interpolationSearch(array, 3))
