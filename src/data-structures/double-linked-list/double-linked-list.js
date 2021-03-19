const List = require('../linked-list/linked-list')
const { defaultEquals } = require('../../util/index')
const Node = require('./double-linked-list-node')

class DoubleLinkedList extends List {
  constructor (equalsFn = defaultEquals) {
    super(equalsFn)
    this.tail = null
  }

  push (element) {
    const node = new Node(element)
    if (this.head === null) {
      this.head = node
      this.tail = node
    } else {
      this.tail.next = node
      node.prev = this.tail
      this.tail = node
    }
    this.count++
  }

  insert (element, index) {
    if (index >= 0 && index < this.count) {
      const node = new Node(element)
      let current = this.head

      if (index === 0) {
        // 在最前面插入元素
        if (this.head === null) {
          this.head = node
          this.tail = node
        } else {
          node.next = current.next
          current.prev = node
          this.head = node
        }
      } else if (index === this.count) {
        // 在最后面插入元素
        current = this.tail
        current.next = node
        node.prev = current
        this.tail = node
      } else {
        // 在中间插入
        const previous = this.getElementAt(index - 1)
        current = previous.next
        previous.next = node
        node.prev = previous
        node.next = current
        current.prev = node
      }
      this.count++
      return true
    }
    return false
  }

  removeAt (index) {
    if (index >= 0 && index < this.count) {
      let current = this.head
      if (index === 0) {
        this.head = current.next

        if (this.count === 1) {
          // 只有一个元素，那么 this.head 为 null
          this.tail = null
        } else {
          this.head.prev = null
        }
      } else if (index === this.count - 1) {
        // 删除最后一个元素
        current = this.tail
        this.tail = current.prev
        this.tail.next = null
      } else {
        current = this.getElementAt(index)
        const previous = current.prev
        previous.next = current.next
        current.next.prev = previous
      }
      this.count--
      return current.element
    }
    return undefined
  }

  getTail () {
    return this.tail
  }

  clear () {
    super.clear()
    this.tail = null
  }
}

module.exports = DoubleLinkedList
