// 插入排序
const { defaultCompare, Compare } = require('../../util/index')

const insertionSort = (array, compareFn = defaultCompare) => {
  const { length } = array
  let temp
  for (let i = 1; i < length; i++) {
    let j = i
    temp = array[i]
    while (j > 0 && compareFn(array[j - 1], temp) === Compare.BIGGER_THAN) {
      array[j] = array[j - 1]
      j--
    }
    array[j] = temp
  }
}

const array = [5, 4, 6, 7, 2, 3]

insertionSort(array)

console.log(array)

module.exports = insertionSort
