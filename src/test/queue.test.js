const Queue = require('../data-structures/queue')

const queue = new Queue()

console.log(queue.isEmpty() === true)

queue.enqueue('john')

queue.enqueue('jack')

console.log(queue.toString() === 'john,jack')

queue.enqueue('camila')

console.log(queue.toString() === 'john,jack,camila')
console.log(queue.size() === 3)
console.log(queue.isEmpty() === false)

queue.dequeue()
queue.dequeue()

console.log(queue.toString() === 'camila')
