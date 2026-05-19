import { readFile, writeFile } from "node:fs/promises"

const file = process.argv[2]
const action = process.argv[3]
const outFile = process.argv[4]

const content = await readFile(file)

if (action === "encode") {
  const res = Buffer.from(content).toString("base64")
  await writeFile(outFile || "cypher.txt", res)
} else if (action === "decode") {
  const res = Buffer.from(content.toString(), "base64").toString("utf-8")
  await writeFile(outFile || "clear.txt", res)
}
