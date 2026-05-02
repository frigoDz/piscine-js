function triangle(str, n) {
  let res = ""
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      res += str
    }
    if (i < n) res += "\n"
  }
  return res
}

// console.log(triangle("*", 5))
