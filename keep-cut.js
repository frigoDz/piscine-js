function cutFirst(str) {
  let res = ""
  for (let i = 2; i < str.length; i++) {
    res += str[i]
  }
  return res
}
function cutLast(str) {
  let res = ""
  for (let i = 0; i < str.length - 2; i++) {
    res += str[i]
  }
  return res
}
function cutFirstLast(str) {
  let res = ""
  for (let i = 2; i < str.length - 2; i++) {
    res += str[i]
  }
  return res
}
function keepFirst(str) {
  return str.slice(0,2)
}
function keepLast(str) {
  return str.slice(-2)
}
function keepFirstLast(str) {
  return  str.slice(0,2) + str.slice(-2)
}
// console.log(cutFirst("hello"))
// console.log(cutLast("hello"))
// console.log(cutFirstLast("hello"))
// console.log(keepFirst("hello"))
// console.log(keepLast("hello"))
// console.log(keepFirstLast("hello"))
