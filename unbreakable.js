function join(arr, sub = "") {
  let result = []
  for (let i = 0; i < arr.length; i++) {
    if (i > 0) result.push(sub)
    let value = arr[i]
    result.push(value === undefined || value === null ? "" : String(value))
  }
  return result.join("")
}

function split(str, sub){
  let arr = []
  let y = 0
  for (let i = 0; i < str.length; i++) {
    if (str.slice(i, i + sub.length) === sub) {
      arr.push(str.slice(y,i))
      y = i + sub.length
      i += sub.length - 1
    }
  }
  arr.push(str.slice(y))
  return arr
}
// console.log(split("hello world", " "))
// console.log(join(["hello", "world"], "-"))
// console.log(join(["a", "b", "c"], "-"))
