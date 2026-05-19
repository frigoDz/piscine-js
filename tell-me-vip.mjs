import { readFile, writeFile, readdir } from "node:fs/promises"
import { join } from "node:path"
const dir = process.argv[2]
const files = await readdir(dir)
let guests = []
for (const file of files) {
  const content = await readFile(join(dir, file), "utf-8")
  const data = JSON.parse(content)
  if (data.answer.toLowerCase() === "yes") {
    let [name] = file.split(".")
    let firstname = name.split("_")[0] 
    let lastname = name.split("_")[1]  
    guests.push(lastname + " " + firstname)
  }
}
guests.sort()
const res = guests.map((name, i) => `${i + 1}. ${name}`).join("\n")
await writeFile("vip.txt", res)
console.log(res)
