// 基数排序 TODO: 没看懂

const { findMaxValue, findMinValue } = require('../../util/index')

const countingSortForRadix = (array, radixBase, significantDigit, minValue) => {
  let bucketIndex
  const buckets = []
  const aux = []
  for (let i = 0; i < radixBase; i++) {
    buckets[i] = []
  }
  for (let i = 0; i < array.length; i++) {
    // 依次比较第一位，第二位...
    bucketIndex = Math.floor(((array[i] - minValue) / significantDigit) % radixBase)
    buckets[bucketIndex]++
  }

  for (let i = 1; i < radixBase; i++) {
    buckets[i] += buckets[i - 1]
  }
  for (let i = array.length - 1; i >= 0; i--) {
    bucketIndex = Math.floor((array[i] - minValue) / significantDigit % radixBase)
    aux[--buckets[bucketIndex]] = array[i]
  }

  for (let i = 0; i < array.length; i++) {
    array[i] = aux[i]
  }
  return array
}

const radixSort = (array, radixBase = 10) => {
  if (array.length < 2) {
    return array
  }

  const minValue = findMinValue(array)
  const maxValue = findMaxValue(array)
  let significantDigit = 1

  while ((maxValue - minValue) / significantDigit >= 1) {
    array = countingSortForRadix(array, radixBase, significantDigit, minValue)
    significantDigit *= radixBase
  }

  return array
}

const array = [5, 14, 6, 7, 2, 3]

console.log(radixSort(array))
