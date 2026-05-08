function mult2(a) {
  return function (b) {
    return a * b
  }
}
function add3(a) {
  return function (b) {
    return function (c) {
      return a + b + c
    }
  }
}
function sub4(a) {
  return function(b) {
    return function(c) {
      return function(d) {
        return a - b - c - d
      }
    }
  }
}
// I type it this way just to simplify, at the end we learn here
// console.log(mult2(2)(3))
// console.log(add3(1)(2)(3))
// console.log(sub4(10)(2)(3)(1))

