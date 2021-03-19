const ListNode = require('../linked-list/linked-list-node')

class Node extends ListNode {
  constructor (element, next, prev) {
    super(element, next)
    this.prev = prev
  }
}

module.exports = Node
