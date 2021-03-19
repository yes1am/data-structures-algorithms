const Node = require('./binary-search-tree-node')
const { Compare, defaultCompare } = require('../../util/index')

class BinarySearchTree {
  constructor (compareFn = defaultCompare) {
    this.compareFn = compareFn // 用来比较值
    this.root = null // Node 类型的根节点
  }

  insert (key) {
    if (this.root === null) {
      this.root = new Node(key)
    } else {
      this.insertNode(this.root, key)
    }
  }

  insertNode (node, key) {
    if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      // 如果要插入的 key，小于 node 节点，那么应该往左边插入
      if (!node.left) {
        // 没有 left
        node.left = new Node(key)
      } else {
        this.insertNode(node.left, key)
      }
    } else {
      if (!node.right) {
        // 没有 left
        node.right = new Node(key)
      } else {
        this.insertNode(node.right, key)
      }
    }
  }

  inOrderTraverse (callback) {
    this.inOrderTraverseNode(this.root, callback)
  }

  // 接受一个回调函数作为参数，回调函数用来定义我们对遍历到的每个节点进行的操作
  // 这也叫访问者模式
  inOrderTraverseNode (node, callback) {
    if (node !== null) {
      this.inOrderTraverseNode(node.left, callback)
      callback(node.key)
      this.inOrderTraverseNode(node.right, callback)
    }
  }

  preOrderTraverse (callback) {
    this.preOrderTraverseNode(this.root, callback)
  }

  preOrderTraverseNode (node, callback) {
    if (node !== null) {
      callback(node.key)
      this.preOrderTraverseNode(node.left, callback)
      this.preOrderTraverseNode(node.right, callback)
    }
  }

  postOrderTraverse (callback) {
    this.postOrderTraverseNode(this.root, callback)
  }

  postOrderTraverseNode (node, callback) {
    if (node !== null) {
      this.postOrderTraverseNode(node.left, callback)
      this.postOrderTraverseNode(node.right, callback)
      callback(node.key)
    }
  }

  min () {
    return this.minNode(this.root)
  }

  minNode (node) {
    if (node !== null && node.left !== null) {
      return this.minNode(node.left)
    }
    return node
  }

  max () {
    return this.maxNode(this.root)
  }

  maxNode (node) {
    if (node !== null && node.right !== null) {
      return this.maxNode(node.right)
    }
    return node
  }

  // 判断是否有这个 key 对应的 tree
  search (key) {
    return this.searchNode(this.root, key)
  }

  searchNode (node, key) {
    if (node === null) {
      return false
    }
    if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      return this.searchNode(node.left, key)
    } else if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
      return this.searchNode(node.right, key)
    } else {
      return true
    }
  }

  remove (key) {
    this.root = this.removeNode(this.root, key)
  }

  removeNode (node, key) {
    if (node === null) {
      return null
    }
    if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      node.left = this.removeNode(node.left, key)
      return node
    } else if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
      node.right = this.removeNode(node.right, key)
      return node
    } else {
      // 找到了那个节点
      if (node.left === null && node.right === null) {
        // 是叶子节点
        node = null
        return node
      }
      // 只有一个子节点
      if (node.left === null) {
        node = node.right
        return node
      } else if (node.right === null) {
        node = node.left
        return node
      }

      // 左右都有值，那么应该右边节点应该作为父节点
      // 此时应该找右侧最小的节点来替代 node
      const min = this.minNode(node.right)
      node.key = min.key
      node.right = this.removeNode(node.right, min.key)
      return node
    }
  }
}

module.exports = BinarySearchTree
