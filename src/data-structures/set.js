class Set {
  constructor () {
    this.items = {}
  }

  has (element) {
    // NOTE: 不是所有的对象都继承了 Object》prototype
    return Object.prototype.hasOwnProperty.call(this.items, element)
  }

  add (element) {
    if (!this.has(element)) {
      this.items[element] = element
      return true
    }
    return false
  }

  delete (element) {
    if (this.has(element)) {
      delete this.items[element]
      return true
    }
    return false
  }

  clear () {
    this.items = {}
  }

  size () {
    return Object.keys(this.items).length
  }

  values () {
    return Object.values(this.items)
  }

  // 交集
  union (otherSet) {
    const unionSet = new Set()
    this.values().forEach(value => unionSet.add(value))
    otherSet.values().forEach(value => unionSet.add(value))
    return unionSet
  }

  // 交集
  intersection (otherSet) {
    const intersectionSet = new Set()
    const thisValues = this.values()
    const otherSetValues = otherSet.values()

    let shortValues = thisValues
    let longValues = otherSetValues

    if (shortValues.length > longValues.length) {
      shortValues = otherSetValues
      longValues = thisValues
    }

    // 只遍历长度更小的集合
    for (let i = 0; i < shortValues.length; i++) {
      if (longValues.includes(shortValues[i])) {
        intersectionSet.add(shortValues[i])
      }
    }

    return intersectionSet
  }

  // 差集
  difference (otherSet) {
    const differenceSet = new Set()
    this.values().forEach(value => {
      if (!otherSet.has(value)) {
        differenceSet.add(value)
      }
    })
    return differenceSet
  }

  // 子集
  // 判断当前 set 是否是 otherSet 的子集
  isSubsetOf (otherSet) {
    if (this.size() > otherSet.size()) {
      return false
    }
    let isSubset = true

    this.values().every(value => {
      if (!otherSet.has(value)) {
        isSubset = false
        return false
      }
      return true
    })
    return isSubset
  }
}

module.exports = Set
