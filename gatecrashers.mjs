import { createServer } from "node:http"
import { writeFile } from "node:fs/promises"
import { join } from "node:path"

const allowed = ["Caleb_Squires", "Tyrique_Dalton", "Rahima_Young"]
const password = "abracadabra"

const server = createServer(async (req, res) => {
  res.setHeader("Content-Type", "application/json")

  const auth = req.headers["authorization"]
  if (!auth) {
    res.writeHead(401)
    res.end("Authorization Required")
    return
  }

  const base64 = auth.split(" ")[1]
  const [user, pass] = Buffer.from(base64, "base64").toString().split(":")

  if (!allowed.includes(user) || pass !== password) {
    res.writeHead(401)
    res.end("Authorization Required")
    return
  }

  if (req.method === "POST") {
    let body = ""
    req.on("data", (chunk) => {
      body += chunk.toString()
    })
    req.on("end", async () => {
      try {
        const name = req.url.slice(1)
        const fpath = join(process.cwd(), "guests", `${name}.json`)
        await writeFile(fpath, body)
        res.writeHead(200)
        res.end(JSON.stringify(JSON.parse(body)))
      } catch (err) {
        res.writeHead(500)
        res.end(JSON.stringify({ error: "server failed" }))
      }
    })
  }
})

server.listen(5000, () => console.log("Listening on port 5000"))
