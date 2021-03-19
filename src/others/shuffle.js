// Fisher-Yates 随机算法
const { swap } = require('../util/index')

const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1))
    swap(array, randomIndex, i)
  }
}

const array = [1, 2, 3, 4, 5]
shuffle(array)

console.log(array)
