// 快速排序
const { defaultCompare, swap, Compare } = require('../../util/index')

// 保证 i 左边的都比 array[i] 小，右边都比 array[i] 大
// TODO: 没看懂
const partition = (array, left, right, compareFn) => {
  const pivot = array[Math.floor((left + right) / 2)]
  let i = left
  let j = right
  while (i <= j) {
    while (compareFn(array[i], pivot) === Compare.LESS_THAN) {
      i++
    }
    while (compareFn(array[j], pivot) === Compare.BIGGER_THAN) {
      j--
    }
    if (i <= j) {
      swap(array, i, j)
      i++
      j--
    }
  }

  return i
}

const quick = (array, left, right, compareFn) => {
  let index
  if (array.length > 1) {
    index = partition(array, left, right, compareFn)
    if (left < index - 1) {
      quick(array, left, index - 1, compareFn)
    }
    if (index < right) {
      quick(array, index, right, compareFn)
    }
  }
  return array
}

const quickSort = (array, compareFn = defaultCompare) => {
  return quick(array, 0, array.length - 1, compareFn)
}

const array = [5, 4, 6, 7, 2, 3]

console.log(quickSort(array), '##')

module.exports = quickSort
