function deepCopy(value) {
  if (Array.isArray(value)) {
    const newArr = []
    for(let val of value) {
      newArr.push(deepCopy(val))
    }
    return newArr
  } else if (value instanceof RegExp) {
    return new RegExp(value)
  } else if (typeof value === 'object' && value !== null) {
    const obj = {}
    for(let key of Object.keys(value)) {
      obj[key] = deepCopy(value[key])
    }
    return obj
  } else {
    return value
  }
}
// const obj = { a: 1, b: 2 }
// const copy = deepCopy(obj)
// copy.a = 99
// console.log(obj.a) 
// console.log(copy.a)
