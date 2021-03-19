const Directory = require('../data-structures/directory')
const { objectEqual } = require('../util/index')

const directory = new Directory()

directory.set('foo', 'foo@gmail.com')
directory.set('bar', 'bar@gmail.com')
directory.set('zoo', 'zoo@gmail.com')

console.log(directory.hasKey('foo') === true)

console.log(directory.size() === 3)

console.log(objectEqual(directory.keys(), ['foo', 'bar', 'zoo']))

console.log(objectEqual(directory.values(), ['foo@gmail.com', 'bar@gmail.com', 'zoo@gmail.com']))

console.log(directory.get('foo') === 'foo@gmail.com')

directory.remove('zoo')

console.log(objectEqual(directory.keys(), ['foo', 'bar']))

console.log(objectEqual(directory.values(), ['foo@gmail.com', 'bar@gmail.com']))
