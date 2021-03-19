// 冒泡排序
const { defaultCompare, swap, Compare } = require('../../util/index')

const bubbleSort = (array, compareFn = defaultCompare) => {
  const { length } = array
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - i - 1; j++) {
      // 从小到大排序
      if (j + 1 < length && compareFn(array[j + 1], array[j]) === Compare.LESS_THAN) {
        swap(array, j, j + 1)
      }
    }
  }
}

const array = [5, 4, 6, 7, 2, 3]

bubbleSort(array)

console.log(array)
