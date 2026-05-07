function  adder(arr, initialValue = 0) {
  return arr.reduce((acu,cur) => acu + cur,initialValue)
}
// const arr = [2,4,3,2]
// console.log(adder(arr))
function sumOrMul(arr, initialValue = 0) {
  return arr.reduce((acu,cur) => {
    if (acu % 2 == 0) {
      return acu * cur
    } else {
      return acu + cur
    }
  }, initialValue)
}
// console.log(sumOrMul(arr))
function funcExec(arrfunc, initialValue = 0) {
  return arrfunc.reduce((acu,curf) => curf(acu),initialValue )
}
// const funcs = [
//   x => x * 10000,
//   x => x * 500
// ]
// console.log(funcExec(funcs, 1))
