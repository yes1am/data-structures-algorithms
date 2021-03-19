const { initialColor, Colors } = require('../../util/index')
const Queue = require('../queue')

// 广度优先算法
const breadthFirstSearch = (graph, startVertes, callback) => {
  const vertices = graph.getVerticles()
  const queue = new Queue()
  const adjList = graph.getAdjList()
  const color = initialColor(vertices)

  queue.enqueue(startVertes)

  while (!queue.isEmpty()) {
    const u = queue.dequeue()
    const neighbors = adjList.get(u)
    color[u] = Colors.GREY

    for (let i = 0; i < neighbors.length; i++) {
      const w = neighbors[i]

      if (color[w] === Colors.WHITE) {
        color[w] = Colors.GREY
        queue.enqueue(w)
      }
    }

    color[u] = Colors.BLACK
    if (callback) {
      callback(u)
    }
  }
}

module.exports = breadthFirstSearch
