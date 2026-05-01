function slice(value, starindx, endindx = value.length - 1) {
  let res = ""
  let ress = []
  if (starindx < 0) {
    starindx = value.length + starindx
  }
  if (endindx < 0) {
    endindx = value.length + endindx
  }

  while(starindx < endindx) {
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

// console.log(slice(["hello", "just", "wanna", "say", "hi"],0,2))
