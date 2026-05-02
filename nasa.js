function nasa(n) {
  let res = ""
  for (let i = 1; i <= n; i++) {
    if (i > 1) res += " "
    if (i % 15 === 0) res += "NASA"
    else if (i % 3 === 0) res += "NA"
    else if (i % 5 === 0) res += "SA"
    else res += i
  }
  return res
}

// console.log(nasa(15))
// console.log(nasa(5))
// console.log(nasa(3))
