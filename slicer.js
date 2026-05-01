function slice(value, starindx, endindx = value.length - 1) {
  let res = ""
  let ress = []
  while(starindx <= endindx) {
    if (typeof(value) == "object") {
      ress.push(value[starindx])
    } else {
      res += value[starindx]
    }
    starindx++
  }
  if (res.length !== 0) {
    return res
  } else {
    return ress
  }
}

// console.log(slice(["hello", "just", "wanna", "say", "hi"],2,4))
