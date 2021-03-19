const { initialColor, Colors } = require('../../util/index')

const depthFirstSearchVisit = (u, color, adjList, callback) => {
  color[u] = Colors.GREY
  if (callback) {
    callback(u)
  }
  // 获得兄弟节点
  const neighbors = adjList.get(u)
  for (let i = 0; i < neighbors.length; i++) {
    const w = neighbors[i]
    if (color[w] === Colors.WHITE) {
      depthFirstSearchVisit(w, color, adjList, callback)
    }
  }
  color[u] = Colors.BLACK
}

// 深度优先算法
const depthFirstSearch = (graph, callback) => {
  const vertices = graph.getVerticles()
  const adjList = graph.getAdjList()
  const color = initialColor(vertices)

  for (let i = 0; i < vertices.length; i++) {
    if (color[vertices[i]] === Colors.WHITE) {
      depthFirstSearchVisit(vertices[i], color, adjList, callback)
    }
  }
}

module.exports = depthFirstSearch
