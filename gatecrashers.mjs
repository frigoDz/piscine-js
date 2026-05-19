import { createServer } from "node:http"
import { writeFile } from "node:fs/promises"
import { join } from "node:path"
const allowed = ["Caleb_Squires", "Tyrique_Dalton", "Rahima_Young"]
const server = createServer((req, res) => {
  res.setHeader("Content-Type", "application/json")
  const auth = req.headers["authorization"]
  let ok = false
  if (auth) {
    const b64 = auth.split(" ")[1]
    if (b64) {
      const [user, pass] = Buffer.from(b64, "base64").toString().split(":")
      allowed.forEach(item => {
        if (item === user && pass === "abracadabra") ok = true
      })
    }
  }
  if (!ok) {
    res.statusCode = 401
    return res.end(JSON.stringify({ error: "Authorization Required" }))
  }
  if (req.method !== "POST") {
    res.statusCode = 500
    return res.end(JSON.stringify({ error: "server failed" }))
  }
  const name = req.url.slice(1)
  try {
    const body = req.headers["body"]
    const fpath = join("guests", `${name}.json`)
    writeFile(fpath, body).then(() => {
      res.statusCode = 200
      res.end(body)
    }).catch(() => {
      res.statusCode = 500
      res.end(JSON.stringify({ error: "server failed" }))
    })
  } catch (err) {
    res.statusCode = 500
    res.end(JSON.stringify({ error: "server failed" }))
  }
})
server.listen(5000, () => console.log("Listening on port 5000"))
