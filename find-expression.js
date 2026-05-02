function findExpression(n) {
  let queue = [{ val: 1, path: "1" }]
  while (queue.length > 0) {
    let current = queue[0]
    queue = queue.slice(1)
    if (current.val === n) return current.path
    if (current.val > n) continue
    queue.push({ val: current.val + 4, path: current.path + " " + add4 })
    queue.push({ val: current.val * 2, path: current.path + " " + mul2 })
  }
  return undefined
}

// console.log(findExpression(8))
// console.log(findExpression(1))
// console.log(findExpression(3)) 
