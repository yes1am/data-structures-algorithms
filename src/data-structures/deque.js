class Deque {
  constructor () {
    this.count = 0
    this.lowestCount = 0
    this.items = []
  }

  // 从队尾添加元素
  addBack (element) {
    this.items[this.count++] = element
  }

  addFront (element) {
    if (this.isEmpty()) {
      this.addBack(element)
    } else if (this.lowestCount > 0) {
      this.lowestCount--
      this.items[this.lowestCount] = element
    } else {
      for (let i = this.count; i > 0; i--) {
        this.items[i] = this.items[i - 1]
      }
      this.count++
      this.lowestCount = 0
      this.items[0] = element
    }
  }

  isEmpty () {
    return this.count - this.lowestCount === 0
  }

  // 移除队列头的第一个元素
  removeFront () {
    if (this.isEmpty()) {
      return undefined
    }
    const result = this.items[this.lowestCount]
    delete this.items[this.lowestCount]
    this.lowestCount++
    return result
  }

  removeBack () {
    if (this.isEmpty()) {
      return undefined
    }

    // 获取最后最后一个元素的 index
    this.count--
    const result = this.items[this.count]
    delete this.items[this.count]
    return result
  }

  // 查看队列头的元素
  peekFront () {
    if (this.isEmpty()) {
      return undefined
    }
    return this.items[this.lowestCount]
  }

  peekBack () {
    if (this.isEmpty()) {
      return undefined
    }
    return this.items[this.count - 1]
  }

  size () {
    return this.count - this.lowestCount
  }

  clear () {
    this.count = 0
    this.lowestCount = 0
    this.items = []
  }

  toString () {
    if (this.isEmpty()) {
      return ''
    }
    let objString = `${this.items[this.lowestCount]}`
    for (let i = this.lowestCount + 1; i < this.count; i++) {
      objString = `${objString},${this.items[i]}`
    }

    return objString
  }
}

module.exports = Deque
