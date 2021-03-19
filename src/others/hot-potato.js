// 击鼓传花 游戏

const Queue = require('../data-structures/queue')

/**
 *
 * @param {*} elementsList 玩家
 * @param {*} num 循环次数
 * @returns
 */
function hotPotato (elementsList, num) {
  const queue = new Queue()
  // 淘汰者
  const elimitatedList = []

  for (let i = 0; i < elementsList.length; i++) {
    // 将玩家都放入队列中
    queue.enqueue(elementsList[i])
  }

  while (queue.size() > 1) {
    for (let i = 0; i < num; i++) {
      // 从队列头移除元素，添加到队列尾，模拟击鼓传花
      // 传递的次数是 num 次(在真实情况中，可能 num 是不一定的，而是随机的一个时间内去循环的传递)
      queue.enqueue(queue.dequeue())
    }
    // 最终淘汰对头的元素
    elimitatedList.push(queue.dequeue())
  }

  return {
    elimitated: elimitatedList,
    winner: queue.dequeue()
  }
}

const names = ['john', 'jack', 'camila', 'ingrid', 'carl']

console.log(hotPotato(names, 4))
