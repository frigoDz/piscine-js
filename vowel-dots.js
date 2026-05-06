const vowels = /[auioe]/gi
function vowelDots(str) {
  return str.replace(vowels, '$&.')
}
// const string = "hi huy"
// console.log(vowelDots(string))

