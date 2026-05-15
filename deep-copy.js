function deepCopy(obj) {
  if (obj instanceof RegExp) {
    return new RegExp(obj)
  }else if(Array.isArray(obj)) {
    const resarr = []
    for(let i = 0; i < obj.length;i++) {
      resarr.push(deepCopy(obj[i]))
    }
    return resarr
  }else if (typeof obj === 'object' && obj !== null && !Array.isArray(obj)){
    const res = {}
    for (const [key,value] of Object.entries(obj)) {
      res[key] = deepCopy(value) 
    }
    return res
  }else {
    return obj
  }
}
