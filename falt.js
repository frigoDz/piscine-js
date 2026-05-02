function flat(arr, depth = 1) {
  let res = []
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i]) && depth > 0) {
      let inner = flat(arr[i], depth - 1)
      for (let j = 0; j < inner.length; j++) {
        res.push(inner[j])
      }
    } else {
      res.push(arr[i])
    }
  }
  return res
}

// console.log(flat([1, [2, [3, [4]]]], 1))      
// console.log(flat([1, [2, [3, [4]]]], 2))      
// console.log(flat([1, [2, [3, [4]]]], Infinity)) 
