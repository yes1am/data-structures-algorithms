exports.defaultEquals = (a, b) => {
  return a === b
}

exports.defaultToString = (item) => {
  if (item === null) {
    return 'NULL'
  } else if (item === undefined) {
    return 'UNDEFINED'
  } else if (typeof item === 'string' || item instanceof String) {
    return `${item}`
  }
  return item.toString()
}

exports.objectEqual = (a, b) => {
  return JSON.stringify(a) === JSON.stringify(b)
}

exports.Compare = {
  LESS_THAN: -1,
  BIGGER_THAN: 1,
  EQUALS: 0
}

exports.defaultCompare = (a, b) => {
  if (a === b) {
    return exports.Compare.EQUALS
  }
  return a < b ? exports.Compare.LESS_THAN : exports.Compare.BIGGER_THAN
}

exports.swap = (array, a, b) => {
  const temp = array[a]
  array[a] = array[b]
  array[b] = temp
}

exports.reverseCompare = (compareFn) => {
  return (a, b) => compareFn(b, a)
}

exports.Colors = {
  WHITE: 0,
  GREY: 1,
  BLACK: 2
}

// 初始化图中各个节点的颜色
exports.initialColor = vertices => {
  const color = {}
  for (let i = 0; i < vertices.length; i++) {
    color[vertices[i]] = exports.Colors.WHITE
  }
  return color
}

exports.findMaxValue = array => {
  let max = array[0]
  for (let i = 1; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i]
    }
  }
  return max
}

exports.findMinValue = array => {
  let min = array[0]
  for (let i = 1; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i]
    }
  }
  return min
}

exports.lessOrEquals = (a, b, compareFn) => {
  const comp = compareFn(a, b)
  return comp === exports.Compare.LESS_THAN || comp === exports.Compare.EQUALS
}

exports.defaultDiff = (a, b) => {
  return Number(a) - Number(b)
}
