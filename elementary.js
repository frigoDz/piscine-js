function multiply(a, b) {
  let res = 0
  let sign = false
  if (a < 0) {
    sign = true
    a = -a 
  }
  if (b < 0) {
    sign = !sign
    b = -b
  }
  while(a > 0) {
    res += b
    a--
  }
  if (sign === true) {
    res = -res
  }
  return res
}
function divide(a, b) {
  if (b === 0) return Infinity 
  let res = 0 
  let sign = false
  if (a < 0) {
    sign = true
    a = -a 
  }
  if (b < 0) {
    sign = !sign
    b = -b
  }
   while(a >= b) {
    a = a - b 
    res++
  }
  if (sign === true) {
    res = -res
  }
  return res
}

function modulo(a, b) {
  if (b === 0) return NaN
  let sign = false
  if (a < 0) {
    sign = true
    a = -a 
  }
  if (b < 0) {
    sign = !sign
    b = -b
  }
  while(a > 0 && a >= b) {
    a = a - b 
  }
  if (sign === true) {
    a = -a
  }
  return a
}
// console.log(multiply(-3, 2))
// console.log(divide(-10, 0))
// console.log(modulo(-123, 22))
