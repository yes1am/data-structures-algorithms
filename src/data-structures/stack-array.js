class Stack {
  constructor () {
    this.items = []
  }

  // 能一次添加多个元素
  push (element) {
    this.items.push(element)
  }

  pop () {
    return this.items.pop()
  }

  peek () {
    return this.items[this.items.length - 1]
  }

  isEmpty () {
    return this.items.length === 0
  }

  size () {
    return this.items.length
  }

  clear () {
    this.items = []
  }
}

module.exports = Stack
