function filter(arr, func) {
  const res = []
  for(let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      res.push(arr[i])
    }
  }
  return res
}
function reject(arr, func) {
  const res = []
  for(let i = 0; i < arr.length; i++) {
    if (!func(arr[i])) {
      res.push(arr[i])
    }
  }
  return res
}
function partition(arr, func) {
  const res = [[], []]
  for(let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      res[0].push(arr[i])
    } else {
      res[1].push(arr[i])
    }
  }
  return res
}
// console.log(filter([1, 2, 3, 4], x => x % 2 === 0))
// console.log(reject([5, 10, 15], x => x > 7))
// console.log(partition([-1, -2, -3, 1, 2, 3], x => x > 0))
