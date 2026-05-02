function join(arr, sub = "") {
  let result = ""
  for (let i = 0; i < arr.length; i++) {
    if (i > 0) result += sub
    let value = arr[i]
    result += (value === undefined || value === null ? "" : String(value))
  }
  return result
}


function split(str, sub){
  if (sub === "") return [...str]
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
