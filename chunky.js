function chunk(arr, size) {
  let res = []
  let i = 0
  while (i < arr.length) {
    let sub = []
    let j = 0
    while (j < size && i < arr.length) {
      sub.push(arr[i])
      i++
      j++
    }
    res.push(sub)
  }
  return res
}

// console.log(chunk([1, 2, 3, 4, 5], 2)) 
// console.log(chunk([1, 2, 3, 4, 5], 3)) 
// console.log(chunk([1, 2, 3], 1))
