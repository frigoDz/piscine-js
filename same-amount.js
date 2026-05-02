function sameAmount(str, reg1, reg2) {
  const r1 = new RegExp(reg1.source, 'g')
  const r2 = new RegExp(reg2.source, 'g')
  if ((str.match(r1) || []).length !== (str.match(r2) || []).length) {
    return false
  }
  return true
}
// const str = "hi hi hi hi hi"
// const reg1 = /hi /
// const reg2 = /hi /
// console.log(sameAmount(str,reg1,reg2))

