function deepCopy(obj) {
  const res = {}
  const resarr = []
  if (obj instanceof RegExp) {
    return new RegExp(obj)
  }else if (!Array.isArray(obj)){
    for (const [key,value] of Object.entries(obj)) {
      res[key] = value 
      if (typeof obj[key] == 'object') deepCopy(obj[key])
    }
    return res
  }else if(Array.isArray(obj)) {
    for(let i = 0; i < obj.length;i++) {
      //if (!res[i]) res[i] = {}
      //if (Array.isArray(res[i])) res[i] = deepCopy(res[i]) 
      resarr.push(deepCopy(obj[i]))
    }
    return resarr
    /*Object.entries(obj).forEach(([key,value]) => {
      res[key] = deepCopy(value)
    })
    return res*/
  }else {
    return res = obj
  }
}
const arr = [1, 'a']
const copy = deepCopy(arr)
console.log(copy)
console.log(arr)
const obj = { user: 'mika', age: 37 }
const coppy = deepCopy(obj)

console.log(coppy)
console.log(coppy)
console.log(obj)
