import { readdir } from "node:fs/promises"
const dir = process.argv[2]
const files = await readdir(dir)
files.sort((a, b) => {
  const lastA = a.split(".")[0].split("_")[1]
  const lastB = b.split(".")[0].split("_")[1]
  return lastA.localeCompare(lastB)
})
const result = files.map((file, index) => {
  const parts = file.split(".")
  const [firstName, lastName] = parts[0].split("_")
  return `${index + 1}. ${lastName} ${firstName}`
})
