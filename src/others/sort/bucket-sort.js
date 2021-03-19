// 桶排序
const insertionSort = require('./insertion-sort')

const createBuckets = (array, bucketSize = 5) => {
  let minValue = array[0]
  let maxValue = array[0]

  for (let i = 0; i < array.length; i++) {
    if (array[i] < minValue) {
      minValue = array[i]
    } else if (array[i] > maxValue) {
      maxValue = array[i]
    }
  }

  // 桶的数量
  const bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1
  const buckets = []

  for (let i = 0; i < bucketCount; i++) {
    buckets[i] = []
  }

  for (let i = 0; i < array.length; i++) {
    const bucketIndex = Math.floor((array[i] - minValue) / bucketSize)
    buckets[bucketIndex].push(array[i])
  }

  return buckets
}

const bucketSort = (array, bucketSize = 5) => {
  if (array.length < 2) {
    return array
  }
  const buckets = createBuckets(array, bucketSize)
  const sortedArray = []
  for (let i = 0; i < buckets.length; i++) {
    if (buckets[i] !== null) {
      insertionSort(buckets[i])
    }
    sortedArray.push(...buckets[i])
  }

  return sortedArray
}

const array = [5, 4, 6, 7, 2, 3]

console.log(bucketSort(array))
