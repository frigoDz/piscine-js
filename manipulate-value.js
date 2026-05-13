function filterValues(nutrients) {
  entries = Object.entries(nutrients)
  const res = entries.filter((entry) => entry[1] <= 12)
  // console.log(Object.prototype.toString.call(res).slice(8,-1))
  return Object.fromEntries(res)
}
// console.log(filterValues({ carbohydrates: 12, protein: 20, fat: 5 }))
function mapValues(nutrients) {
  entries = Object.entries(nutrients)
  const res = entries.map((entry) => {
    entry[1] = entry[1] + 1 
    return entry
  })
  // console.log(Object.prototype.toString.call(res).slice(8,-1))
  return Object.fromEntries(res)
}
// console.log(mapValues({ carbohydrates: 12, protein: 20, fat: 5 }))
function reduceValues(nutrients) {
  val = Object.values(nutrients)
  const res = val.reduce((acc ,cur) => acc + cur)
  return res
} 
// console.log(reduceValues({ carbohydrates: 12, protein: 20, fat: 5 }))

