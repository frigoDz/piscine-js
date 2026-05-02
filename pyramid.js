function pyramid(str, n) {
  let res = ""
  for (let i = 1; i <= n; i++) {
    let spaces = ""
    let chars = ""
    for (let j = 0; j < n - i; j++) spaces += " "
    for (let j = 0; j < 2 * i - 1; j++) chars += str
    res += spaces + chars + spaces
    if (i < n) res += "\n"
  }
  return res
}

// console.log(pyramid("*", 5))
