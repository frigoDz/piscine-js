function filterKeys(obj, func) {
  const res = {}
  for(let [key, value] of Object.entries(obj)) {
    if(func(key)) res[key] = value
  }  
  return res
}
function mapKeys(obj, func) {
  const res = {} 
  for(let [key, value] of Object.entries(obj)) res[func(key)] = value
  return res
}
function reduceKeys(obj, func, init = "") {
  let res = init
  let i = 0
  for (let key of Object.keys(obj)) {
    if(i < 1) {
      i++
      if(res === "") {
        res = key
        continue
      }
    }
    res = func(res, key)
  } 
  return res
}
const nutrients = { carbohydrates: 12, protein: 20, fat: 5 }

console.log(filterKeys(nutrients, (key) => /protein/.test(key)))
// output: { protein: 20 }

console.log(mapKeys(nutrients, (k) => `-${k}`))
// output: { -carbohydrates: 12, -protein: 20, -fat: 5 }

console.log(reduceKeys(nutrients, (acc, cr) =>acc.concat(', ', cr)))
// output: carbohydrates, protein, fat
