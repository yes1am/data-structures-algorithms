const Deque = require('../data-structures/deque')

const deque = new Deque()

console.log(deque.isEmpty() === true)

deque.addBack('john')

deque.addBack('jack')

console.log(deque.toString() === 'john,jack')

deque.addBack('camila')

console.log(deque.toString() === 'john,jack,camila')

console.log(deque.size() === 3)

console.log(deque.isEmpty() === false)

deque.removeFront()

console.log(deque.toString() === 'jack,camila')

// 队尾 camila 准备离开
deque.removeBack()

console.log(deque.toString() === 'jack')

// 对头 john 准备回来询问信息
deque.addFront('john')

console.log(deque.toString() === 'john,jack')
