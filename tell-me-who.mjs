import { readdir } from "node:fs/promises"
const dir = process.argv[2]
const files = await readdir(dir)
files.sort()
const result = files.map((file, index) => {
  const parts = file.split(".")
  const [firstName, lastName] = parts[0].split("_")
  const first = firstName.slice(0, 1).toUpperCase() + firstName.slice(1)
  const last = lastName.slice(0, 1).toUpperCase() + lastName.slice(1)
  return `${index + 1}. ${last} ${first}`
})
console.log(result.join("\n"))
