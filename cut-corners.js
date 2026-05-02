function round(nbr) {
  if (nbr < 0) {
    return trunc(nbr - 0.5)
  } else {
    return trunc(nbr + 0.5)
  }
}
function ceil(nbr) {
  let tmp = trunc(nbr)
  if (nbr === tmp) return nbr
  return nbr > 0 ? tmp + 1 : tmp
}
function floor(nbr){
  let tmp = trunc(nbr)
  return nbr < tmp ? tmp - 1 : tmp
}
function trunc(nbr) {
  let sign = false
  let tracker = 0
  if (nbr < 0) {
    nbr = -nbr
    sign = true
  }
  while (tracker + 1 <= nbr) {
    if (tracker + 1000000000 < nbr) {
      tracker += 1000000000
    } else if (tracker + 100000 < nbr) {
      tracker += 100000
    } else if (tracker + 10000 < nbr) {
      tracker += 10000
    } else if (tracker + 10 < nbr) {
      tracker += 10
    } else {
      tracker += 1
    }
  }
  return sign ? -tracker : tracker
}

// console.log(round(13.6))
