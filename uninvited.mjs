import { createServer } from "node:http"
import { writeFile } from "node:fs/promises"
import { join } from "node:path"

const server = createServer(async (req, res) => {
  res.setHeader("Content-Type", "application/json")

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
        res.writeHead(201)
        res.end(body)
      } catch (err) {
        res.writeHead(500)
        res.end(JSON.stringify({ error: "server failed" }))
      }
    })
  }
})

server.listen(5000, () => console.log("Listening on port 5000"))
