// 选择排序
const { defaultCompare, swap, Compare } = require('../../util/index')

const selectionSort = (array, compareFn = defaultCompare) => {
  const { length } = array
  let minIndex
  for (let i = 0; i < length; i++) {
    minIndex = i
    for (let j = i; j < length; j++) {
      if (compareFn(array[j], array[minIndex]) === Compare.LESS_THAN) {
        minIndex = j
      }
    }

    if (minIndex !== i) {
      swap(array, i, minIndex)
    }
  }

  return array
}

const array = [5, 4, 6, 7, 2, 3]

selectionSort(array)

console.log(array)
