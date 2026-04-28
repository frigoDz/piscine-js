const words = (str) => str.split(" ")
const sentence = (arr) => arr.join(" ")
const yell = (str) => str.toUpperCase()
const whisper = (str) => "*" + str.toLowerCase() + "*"
function capitalize(str) {
  let st = str.toLowerCase()
  return st[0].toUpperCase() + st.slice(1)
}

// console.log(words("hello world"))
// console.log(sentence(["hello", "world"]))
// console.log(yell("hello World"))
// console.log(whisper("HELLO wORLD"))
// console.log(capitalize("Hi how aRE YOU"))
