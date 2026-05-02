function ionOut(str) {
  const reg = /\w*t(?=ion)/g 
  return str.match(reg) || []
}
// const str = "action caution tion vwalk"
// console.log(ionOut(str))
