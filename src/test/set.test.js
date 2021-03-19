const Set = require('../data-structures/set')

const { objectEqual } = require('../util/index')

const set = new Set()

set.add(1)

console.log(objectEqual(set.values(), [1]))

console.log(set.has(1))

console.log(set.size() === 1)

set.add(2)

console.log(objectEqual(set.values(), [1, 2]))

console.log(set.has(2))

console.log(set.size() === 2)

set.delete(1)

console.log(objectEqual(set.values(), [2]))

set.delete(2)

console.log(objectEqual(set.values(), []))

const set1 = new Set()
set1.add(1)
set1.add(2)
set1.add(3)

const set2 = new Set()
set2.add(2)
set2.add(3)
set2.add(4)

console.log(objectEqual(set1.union(set2).values(), [1, 2, 3, 4]))

console.log(objectEqual(set1.intersection(set2).values(), [2, 3]))

console.log(objectEqual(set1.difference(set2).values(), [1]))

const set3 = new Set()
set3.add(1)
set3.add(2)

const set4 = new Set()
set4.add(1)
set4.add(2)
set4.add(3)

const set5 = new Set()
set5.add(2)
set5.add(3)
set5.add(4)

console.log(set3.isSubsetOf(set4) === true)
console.log(set3.isSubsetOf(set5) === false)
