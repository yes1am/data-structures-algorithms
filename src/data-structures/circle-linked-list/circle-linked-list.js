const LinkedList = require('../linked-list/linked-list')
const { defaultEquals } = require('../../util/index')
const Node = require('../linked-list/linked-list-node')

class CircleLinkedList extends LinkedList {
  constructor (equalsFn = defaultEquals) {
    super(equalsFn)
  }

  push (element) {
    const node = new Node(element)
    let current
    if (this.head == null) {
      this.head = node
    } else {
      current = this.getElementAt(this.size() - 1)
      current.next = node
    }
    // 将最后一个节点，指回 head
    node.next = this.head
    this.count++
  }

  insert (element, index) {
    if (index >= 0 && index <= this.count) {
      const node = new Node(element)

      if (index === 0) {
        // 在第一个位置添加
        if (this.head === null) {
          this.head = node
          node.next = this.head
        } else {
          let current = this.head
          node.next = current
          current = this.getElementAt(this.size() - 1)
          this.head = node
          current.next = this.head
        }
      } else {
        // 和原本的 LinkedList 保持一致
        // TODO: 书中的代码似乎有 bug
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

  removeAt (index) {
    if (index >= 0 && index < this.count) {
      let current = this.head

      if (index === 0) {
      // 移除第一项
        if (this.size() === 1) {
          // 如果只有一个元素
          this.head = null
        } else {
          const removed = this.head
          // TODO: 是否有问题， this.size() 会溢出吧, 应该是 this.size() - 1
          current = this.getElementAt(this.size())
          this.head = this.head.next
          current.next = this.head
          current = removed
        }
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
}

module.exports = CircleLinkedList
