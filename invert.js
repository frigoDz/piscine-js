function invert(obj) {
  const res = {} 
  for(const [key,value] of Object.entries(obj)) {
    res[value] = key
  }
  return res
}
// console.log(invert({wasim: "bghit", lastName: 12,}))
