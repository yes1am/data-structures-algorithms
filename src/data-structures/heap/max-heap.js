const { defaultCompare, reverseCompare } = require('../../util/index')
const MinHeap = require('./min-heap')

// 最大堆
class MaxHeap extends MinHeap {
  constructor (compareFn = defaultCompare) {
    super(compareFn)
    this.compareFn = reverseCompare(compareFn)
  }
}

module.exports = MaxHeap
