function round(nbr) {
  if (nbr < 0) {
    return trunc(nbr - 0.5)
  } else {
    return trunc(nbr + 0.5)
  }
}
function ceil(nbr) {
  if (Number.isInteger(nbr)) {
    return nbr
  } else if (nbr < 0) {
    return trunc(nbr)
  } else {
    return trunc(nbr+1)
  }
}
function floor(nbr){
  if (Number.isInteger(nbr)) {
    return nbr
  } else if (nbr < 0) {
    return trunc(nbr-1)
  }
  return trunc(nbr)
}
function trunc(nbr) {
  let sign = false
  let tracker = 1
  if (nbr < 0) {
    nbr = -nbr
    sign = true
  }
  while (tracker < nbr -1) {
    if (tracker + 1000000000 < nbr-1) {
      tracker += 1000000000
    } else if (tracker + 100000 < nbr-1) {
      tracker += 100000
    } else if (tracker + 10000 < nbr-1) {
      tracker += 10000
    } else if (tracker + 10 < nbr-1) {
      tracker += 10
    } else {
      tracker += 1
    }
  }
  if (sign) return -tracker
  return tracker
}

// console.log(round(13.6))
