import { readFile } from "node:fs/promises"
const file = process.argv[2]
const arg = await readFile(file, "utf-8")
const res = arg.split(" ").map(word => {
  const first = word.slice(0, Math.floor(word.length/2))
  const second = word.slice(first.length , word.length)
  return second + first
}).join(" ")
console.log(res)
