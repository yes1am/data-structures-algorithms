const { initialColor, Colors } = require('../../util/index')
const Queue = require('../queue')

// 找寻最短路径
const BFS = (graph, startVertes) => {
  const vertices = graph.getVerticles()
  const adjList = graph.getAdjList()
  const color = initialColor(vertices)
  const queue = new Queue()
  const distance = {}
  const predecessors = {}
  queue.enqueue(startVertes)

  for (let i = 0; i < vertices.length; i++) {
    distance[vertices[i]] = 0
    predecessors[vertices[i]] = null
  }

  while (!queue.isEmpty()) {
    const u = queue.dequeue()
    const neighbors = adjList.get(u)
    color[u] = Colors.GREY

    for (let i = 0; i < neighbors.length; i++) {
      const w = neighbors[i]

      if (color[w] === Colors.WHITE) {
        // 子节点到顶点的距离，是子顶点到父节点的距离 + 1
        distance[w] = distance[u] + 1
        // w 的父亲节点是 u
        predecessors[w] = u
        color[w] = Colors.GREY
        queue.enqueue(w)
      }
    }
    color[u] = Colors.BLACK
  }

  return {
    distance,
    predecessors
  }
}

module.exports = BFS
