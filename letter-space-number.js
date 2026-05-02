function letterSpaceNumber(str) {
  const regex = /[a-zA-Z]\s[0-9](?!\d)(?![a-zA-Z])/g
  return str.match(regex) || []
}
// const string = "I like 7up."
// console.log(letterSpaceNumber(string))
