// 计数排序
const { findMaxValue } = require('../../util/index')

const countingSort = (array) => {
  if (array.length < 2) {
    return array
  }

  const maxValue = findMaxValue(array)
  const counts = new Array(maxValue + 1)
  array.forEach(item => {
    if (!counts[item]) {
      counts[item] = 0
    }
    counts[item]++
  })

  let sortedIndex = 0
  counts.forEach((count, index) => {
    while (count > 0) {
      array[sortedIndex++] = index
      count--
    }
  })

  return array
}

const array = [5, 4, 6, 7, 2, 3]

countingSort(array)

console.log(array)
