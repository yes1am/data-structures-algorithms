const { defaultCompare, reverseCompare, swap, Compare } = require('../util/index')

function getLeftIndex (index) {
  return 2 * index + 1
}

function getRightIndex (index) {
  return 2 * index + 2
}

function heapSort (array, compareFn = reverseCompare(defaultCompare)) {
  let heapSize = array.length
  buildMaxHeap(array, compareFn)

  while (heapSize > 1) {
    swap(array, 0, --heapSize)
    heapify(array, 0, heapSize, compareFn)
  }
  return array
}

function heapify (array, index, size, compareFn) {
  let element = index
  const left = getLeftIndex(element)
  const right = getRightIndex(element)

  if (left < size && compareFn(array[element], array[left]) === Compare.BIGGER_THAN) {
    element = left
  }

  if (right < size && compareFn(array[element], array[right]) === Compare.BIGGER_THAN) {
    element = right
  }

  if (index !== element) {
    swap(array, index, element)
    heapify(array, element, size, compareFn)
  }
}
function buildMaxHeap (array, compareFn) {
  // 只有 array.length / 2 的索引可能还有子节点，因此只需要循环到这
  for (let i = Math.floor(array.length / 2); i >= 0; i -= 1) {
    heapify(array, i, array.length, compareFn)
  }
  return array
}

const array = [7, 6, 3, 5, 4, 1, 2]
console.log(heapSort(array))
