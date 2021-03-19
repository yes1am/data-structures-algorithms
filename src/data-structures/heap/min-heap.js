const { defaultCompare, Compare, swap } = require('../../util/index')

// 最小堆
class MinHeap {
  constructor (compareFn = defaultCompare) {
    this.compareFn = compareFn
    this.heap = []
  }

  getLeftIndex (index) {
    return 2 * index + 1
  }

  getRightIndex (index) {
    return 2 * index + 2
  }

  getParentIndex (index) {
    return Math.floor((index - 1) / 2)
  }

  insert (value) {
    if (value !== null) {
      this.heap.push(value)
      this.siftUp(this.heap.length - 1)
      return true
    }
    return false
  }

  // 将节点向上移动，使得父节点小于这个插入的值
  siftUp (index) {
    let parent = this.getParentIndex(index)
    // 如果父节点大于子节点
    while (index > 0 && this.compareFn(this.heap[parent], this.heap[index]) === Compare.BIGGER_THAN) {
      swap(this.heap, parent, index)
      index = parent
      parent = this.getParentIndex(index)
    }
  }

  size () {
    return this.heap.length
  }

  isEmpty () {
    return this.size() === 0
  }

  // 找到最小的值
  findMinimum () {
    return this.isEmpty() ? undefined : this.heap[0]
  }

  extract () {
    if (this.isEmpty()) {
      return undefined
    }

    if (this.size() === 1) {
      return this.heap.shift()
    }

    const removedValue = this.heap.shift()
    // 删除元素后需要调整堆
    this.siftDown(0)
    return removedValue
  }

  // 将元素和最小(最小堆)子节点交换
  // 如果和大的子节点换，换到的新节点还是比另一个子节点大，就有问题了
  // 所以要和最小子节点换

  // 一个堆只能保证父节点小于所有的子节点，当某个子节点成为父节点后，可能会打破这个规则
  // (比如数组 [ 2, 4, 3, 6, 5 ] )，当 extract 抽走 2 之后，4 成了父节点，3 是子节点, 但是此时 4 > 3
  // 因此需要 shitDown 调整顺序
  siftDown (index) {
    let element = index
    const left = this.getLeftIndex(element)
    const right = this.getRightIndex(element)
    const size = this.size()

    // 上面的元素大于下面的元素
    if (left < size && this.compareFn(this.heap[element], this.heap[left]) === Compare.BIGGER_THAN) {
      element = left
    }

    if (right < size && this.compareFn(this.heap[element], this.heap[right]) === Compare.BIGGER_THAN) {
      element = right
    }

    if (index !== element) {
      swap(this.heap, index, element)
      this.siftDown(element)
    }
  }
}

module.exports = MinHeap
