function map(arr,func) {
  const res = []
  for(let i = 0; i < arr.length; i++) {
    res.push(func(arr[i]))
  }
  return res
}
function flatMap(arr,func) {
  const res = []
  for(let i = 0; i < arr.length; i++) {
    const mapped = (func(arr[i]))
    if (Array.isArray(mapped)) {
      for (let j = 0; j < mapped.length; j++) {
        res.push(mapped[j])
      }
    } else {
      res.push(mapped)
    }
  }
  return res
}
// console.log(map([1, 2, 3], x => x * 2))
// console.log(flatMap([1, 2, 3], x => [x, x + 10]))
