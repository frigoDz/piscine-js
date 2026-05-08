function forEach(arr, func) {
  let res = ""
  for(const value of arr) {
    func(value)
  }
}
// const arr = ["a", 'b','v']
// forEach(arr, console.log)
