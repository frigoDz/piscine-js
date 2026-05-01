function cutFirst(str) {
  if (str.length <= 2) return ""
  let res = ""
  for (let i = 2; i < str.length; i++) {
    res += str[i]
  }
  return res
}
function cutLast(str) {
  if (str.length <= 2) return ""
  let res = ""
  for (let i = 0; i < str.length - 2; i++) {
    res += str[i]
  }
  return res
}
function cutFirstLast(str) {
  if (str.length <= 2) return ""
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
  if(str.length <= 2) return str
  return  str.slice(0,2) + str.slice(-2)
}
// console.log(cutFirst("h"))
// console.log(cutLast("h"))
// console.log(cutFirstLast("hdd"))
// console.log(keepFirst("hello"))
// console.log(keepLast("hello"))
// console.log(keepFirstLast("kk"))
