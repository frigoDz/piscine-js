function letterSpaceNumber(str) {
  const regex = /[a-zA-Z]\s[0-9](?=\W)/g
  return str.match(regex)
}
// const string = "example 1, example 20"
// console.log(letterSpaceNumber(string))
