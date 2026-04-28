const words = (str) => str.split(" ")
const sentence = (arr) => arr.join(" ")
const yell = (str) => str.toUpperCase()
const whisper = (str) => "*" + str.toLowerCase() + "*"
function capitalize(str) {
  let st = str.toLowerCase()
  let slice = st.split(" ")
  for (let i = 0; i < slice.length; i++) {
    slice[i] = slice[i][0].toUpperCase() + slice[i].slice(1)
  }
  return slice.join(" ")
}

// console.log(words("hello world"))
// console.log(sentence(["hello", "world"]))
// console.log(yell("hello World"))
// console.log(whisper("HELLO wORLD"))
// console.log(capitalize("Hi how aRE YOU"))
