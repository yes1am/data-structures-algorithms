const BinarySearchTree = require('./binary-search-tree/binary-search-tree')
const Node = require('./binary-search-tree/binary-search-tree-node')
const { Compare, defaultCompare } = require('../util/index')

const BalanceFactor = {
  UNBALANCED_RIGHT: 1,
  // 稍微不平衡
  SLIGHTLY_UNBALANCED_RIGHT: 2,
  BALANCED: 3,
  SLIGHTLY_UNBALANCED_LEFT: 4,
  UNBALANCED_LEFT: 5
}

class AVLTree extends BinarySearchTree {
  constructor (compareFn = defaultCompare) {
    super(compareFn)
    this.compareFn = compareFn
    this.root = null
  }

  getNodeHeight (node) {
    if (node === null) {
      return -1
    }
    return Math.max(
      this.getNodeHeight(node.left),
      this.getNodeHeight(node.right)
    ) + 1
  }

  // 计算平衡因子
  getBalanceFactor (node) {
    const heightDifference = this.getNodeHeight(node.left) - this.getNodeHeight(node.right)

    switch (heightDifference) {
      case -2:
        return BalanceFactor.UNBALANCED_RIGHT
      case -1:
        return BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT
      case 1:
        return BalanceFactor.SLIGHTLY_UNBALANCED_LEFT
      case 2:
        return BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT
      default:
        return BalanceFactor.BALANCED
    }
  }

  // LL
  rotationLL (node) {
    const tmp = node.left
    node.left = tmp.right
    tmp.right = node
    return tmp
  }

  // RR
  rotationRR (node) {
    const tmp = node.right
    node.right = tmp.left
    tmp.left = node
    return tmp
  }

  rotationLR (node) {
    node.left = this.rotationRR(node.left)
    return this.rotationLL(node)
  }

  rotationRL (node) {
    node.left = this.rotationLL(node.left)
    return this.rotationRR(node)
  }

  insert (key) {
    this.root = this.insertNode(this.root, key)
  }

  insertNode (node, key) {
    // 像 BST 树一样插入节点
    if (node === null) {
      return new Node(key)
    } else if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      node.left = this.insertNode(node.left, key)
    } else if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
      node.right = this.insertNode(node.right, key)
    } else {
      // 插入已有的值
      return node
    }

    // 如果需要，将树进行平衡操作
    const balanceFactor = this.getBalanceFactor(node)

    // 如果插入节点后不平衡了(且节点插入在了左子树)
    if (balanceFactor === BalanceFactor.UNBALANCED_LEFT) {
      // 且插入节点的值，小于左侧子节点的值(说明插在了左侧子节点的左侧，即左侧较重，符合 LL)
      if (this.compareFn(key, node.left.key) === Compare.LESS_THAN) {
        node = this.rotationLL(node)
      } else {
        return this.rotationLR(node)
      }
    }
    if (balanceFactor === BalanceFactor.UNBALANCED_RIGHT) {
      if (this.compareFn(key, node.right.key) === Compare.BIGGER_THAN) {
        node = this.rotationRR(node)
      } else {
        return this.rotationRL(node)
      }
    }
    return node
  }

  removeNode (node, key) {
    node = super.removeNode(node, key)
    if (node === null) {
      return node // 不需要平衡
    }

    const balanceFactor = this.getBalanceFactor(node)

    if (balanceFactor === BalanceFactor.UNBALANCED_LEFT) {
      const balanceFactorLeft = this.getBalanceFactor(node.left)
      if (balanceFactorLeft === BalanceFactor.BALANCED || balanceFactorLeft === BalanceFactor.SLIGHTLY_UNBALANCED_LEFT) {
        return this.rotationLL(node)
      }
      if (balanceFactorLeft === BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT) {
        return this.rotationLR(node)
      }
    }
    if (balanceFactor === BalanceFactor.UNBALANCED_RIGHT) {
      const balanceFactorRight = this.getBalanceFactor(node.right)
      if (balanceFactorRight === BalanceFactor.BALANCED || balanceFactorRight === BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT) {
        return this.rotationRR(node)
      }
      if (balanceFactorRight === BalanceFactor.SLIGHTLY_UNBALANCED_LEFT) {
        return this.rotationRL(node)
      }
    }
    return node
  }
}

module.exports = AVLTree
