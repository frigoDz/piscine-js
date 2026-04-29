function multiply(a, b) {
  let res = 0
  while(a > 0) {
    res += b
    a--
  }
  return res
}
function divide(a, b) {
  let res = 0 
  while(a > 0 && a > b) {
    a = a - b 
    res++
  }
  return res
}
function modulo(a, b) {
  while(a > 0 && a > b) {
    a = a - b 
  }
  return a
}
// console.log(multiply(3, 7))
// console.log(divide(10, 3))
// console.log(modulo(10, 3))
