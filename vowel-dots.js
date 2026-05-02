function vowelDots(str) {
  const regex = /[AaEeIiOoUu]/g
  return str.replace(regex, '$&.')
}
// const string = "hi huy"
// console.log(vowelDots(string))
