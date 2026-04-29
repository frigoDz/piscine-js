function multiply(a, b) {
  let res = 0
  let sign = false
  if (a < 0) {
    sign = true
    a = -a 
  }
  if (b < 0 && !sign) {
    sign = true
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
  let res = 0 
  let sign = false
  if (a < 0) {
    sign = true
    a = -a 
  }
  if (b < 0 && !sign) {
    sign = true
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
  if (a < 0) a = -a 
  if (b < 0) b = -b
  while(a > 0 && a >= b) {
    a = a - b 
  }
  return a
}
// console.log(multiply(-3, 7))
// console.log(divide(-10, -2))
// console.log(modulo(10, 2))
