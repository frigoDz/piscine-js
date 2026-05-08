function forEach(arr, func) {
  let res = ""
  for(let i = 0; i < arr.length; i++ {
    func(arr[i], i, arr)
  }
  return undefined
}
// const arr = ["a", 'b','v']
// forEach(arr, console.log)
