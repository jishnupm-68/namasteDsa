let queue= []
queue.push(1) // enqueue
queue.push(2)
queue.push(5)
console.log(queue)
console.log(queue.shift(), queue) //dequeue
console.log("front element ", queue[0]) // valid operation

console.log(queue[1]) // invalid queue operation