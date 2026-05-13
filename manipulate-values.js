function filterValues(obj, func) {
  const res = {}
  for(let key of Object.keys(obj)) {
    let v = obj[key]
    if(func(v)) res[key] = v
  }
  return res
}
function mapValues(obj, func) {
  const res = {}
  for(let key of Object.keys(obj)) res[key] = func(obj[key])
  return res
}
function reduceValues(obj, func, init = 0) {
  let res = init
  for(let key of Object.keys(obj)) res = func(res, obj[key])
  return res
} 
const nutrients = { carbohydrates: 12, protein: 20, fat: 5 }

console.log(filterValues(nutrients, (nutrient) => nutrient <= 12))
// output: { carbohydrates: 12, fat: 5 }

console.log(mapValues(nutrients, (v) => v+1))
// output: { carbohydrates: 13, protein: 21, fat: 6 }

console.log(reduceValues(nutrients, (acc, cr) => acc + cr))
// output: 37
