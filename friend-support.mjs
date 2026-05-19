import { createServer } from "node:http"
import { readFile } from "node:fs/promises"
const server = createServer(async (req, res) => {
  res.setHeader("Content-Type", "application/json")
  try {
    const name = req.url.slice(1)
    const content = await readFile(`guests/${name}.json`, "utf-8")
    res.writeHead(200)
    res.end(content)
  } catch (err) {
    if (err.code === "ENOENT") {
      res.writeHead(404)
      res.end(JSON.stringify({ error: "guest not found" }))
    } else {
      res.writeHead(500)
      res.end(JSON.stringify({ error: "server failed" }))
    }
  }
})
server.listen(5000, () => console.log("Listening on port 5000"))
