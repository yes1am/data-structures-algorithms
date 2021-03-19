const MaxHeap = require('../data-structures/Heap/max-heap')

const maxHeap = new MaxHeap()

maxHeap.insert(2)
maxHeap.insert(3)
maxHeap.insert(4)
maxHeap.insert(5)

console.log(maxHeap.size() === 4)

console.log(maxHeap.isEmpty() === false)

console.log(maxHeap.findMinimum() === 5)

console.log(maxHeap.extract() === 5)
