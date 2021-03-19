const MinHeap = require('../data-structures/Heap/min-heap')

const minHeap = new MinHeap()

minHeap.insert(6)
minHeap.insert(3)
minHeap.insert(2)
minHeap.insert(5)
minHeap.insert(4)

console.log(minHeap.size() === 5)

console.log(minHeap.isEmpty() === false)

console.log(minHeap.findMinimum() === 2)
