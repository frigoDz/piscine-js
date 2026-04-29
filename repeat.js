function repeat(str, num) {
  res = ""
  while (num > 0) {
    res += str
    num--
  }
  return res
}

// console.log(repeat("hello, ", 5))
