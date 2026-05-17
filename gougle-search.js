function queryServers(serverName, q) {
  return Promise.race([
    getJSON(`/${serverName}?q=${q}`),
    getJSON(`/${serverName}_backup?q=${q}`)
  ])
}

function gougleSearch(q) {
  return Promise.race([
    Promise.all({
      web: queryServers("web", q),
      image: queryServers("image", q),
      video: queryServers("video", q)
    }),
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error("timeout")), 80)
    )
  ])
}
