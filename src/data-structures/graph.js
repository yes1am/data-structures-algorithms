const Directory = require('./directory')

// 邻接表表示
class Graph {
  // isDirected 表示是否有向
  constructor (isDirected = false) {
    this.isDirected = isDirected
    this.vertices = [] // 所有顶点
    this.adjList = new Directory() // 存储邻接表
  }

  // 添加节点
  addVertex (v) {
    if (!this.vertices.includes(v)) {
      this.vertices.push(v)
      this.adjList.set(v, [])
    }
  }

  addEdge (v, w) {
    if (!this.adjList.get(v)) {
      this.addVertex(v)
    }
    if (!this.adjList.get(w)) {
      this.addVertex(w)
    }
    this.adjList.get(v).push(w)

    if (!this.isDirected) {
      // 如果是无向图的话, 则还需要记录一条信息
      this.adjList.get(w).push(v)
    }
  }

  getVerticles () {
    return this.vertices
  }

  getAdjList () {
    return this.adjList
  }

  toString () {
    let s = ''
    for (let i = 0; i < this.vertices.length; i++) {
      const vertice = this.vertices[i]
      s += `${vertice} -> `
      const neighbors = this.adjList.get(vertice)

      for (let j = 0; j < neighbors.length; j++) {
        s += `${neighbors[j]} `
      }
      s += '\n'
    }
    return s
  }
}

module.exports = Graph
