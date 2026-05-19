import { readdir } from "node:fs/promises"
const dir = process.argv[2] || "."
const files = await readdir(dir)
let formated = files.map((file) => {
  let [name] = file.split(".")
  return name.split("_")[1]+" " + name.split("_")[0]
})
let res = formated.sort()
res.forEach((name,index) => console.log(index + 1 + " " +name))
