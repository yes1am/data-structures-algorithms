const { defaultEquals } = require('../../util/index')
const Node = require('./linked-list-node')

class LinkedList {
  constructor (equalsFn = defaultEquals) {
    this.count = 0
    this.head = null
    this.equalsFn = equalsFn
  }

  // 向链表尾部添加元素
  push (element) {
    const node = new Node(element)
    let current
    if (this.head === null) {
      // 链表为空
      this.head = node
    } else {
      current = this.head
      // 获得最后一项
      while (current.next !== null) {
        current = current.next
      }
      current.next = node
    }
    this.count++
  }

  // 从链表中移除元素
  removeAt (index) {
    if (index >= 0 && index < this.count) {
      let current = this.head

      if (index === 0) {
      // 移除第一项
        this.head = current.next
      } else {
        const previous = this.getElementAt(index - 1)
        current = this.getElementAt(index)
        // 将 previous 与 current 的下一项链接起来，跳过 current，从而移除它
        previous.next = current.next
      }
      this.count--
      return current.element
    }
    return null
  }

  // 迭代循环列表，直到目标位置
  getElementAt (index) {
    if (index >= 0 && index < this.count) {
      let node = this.head
      for (let i = 0; i < index && node !== null; i++) {
        node = node.next
      }
      return node
    }
    return null
  }

  insert (element, index) {
    if (index >= 0 && index < this.count) {
      const node = new Node(element)

      if (index === 0) {
        // 在第一个位置添加
        const current = this.head
        node.next = current
        this.head = node
      } else {
        const previous = this.getElementAt(index - 1)
        const current = this.getElementAt(index)

        node.next = current
        previous.next = node
      }

      // 更新链表长度
      this.count++
      return true
    }
    return false
  }

  indexOf (element) {
    let current = this.head
    for (let i = 0; i < this.count && current !== null; i++) {
      if (this.equalsFn(element, current.element)) {
        return i
      }
      current = current.next
    }
    return -1
  }

  remove (element) {
    const index = this.getElementAt(element)
    return this.removeAt(index)
  }

  size () {
    return this.count
  }

  isEmpty () {
    return this.size() === 0
  }

  getHead () {
    return this.head
  }

  toString () {
    if (this.head === null) {
      return ''
    }
    let objString = `${this.head.element}`
    let current = this.head.next
    for (let i = 1; i < this.size() && current !== null; i++) {
      objString = `${objString},${current.element}`
      current = current.next
    }
    return objString
  }
}

module.exports = LinkedList
