const arg = process.argv[2]
const res = arg.split(" ").map(word => {
  const first = word.slice(0, Math.ceil(word.length/2))
  const second = word.slice(first.length , word.length)
  return second + first
}).join(" ")
console.log(res)
