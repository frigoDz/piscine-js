function gougleSearch(q) {
  return Promise.race([
    Promise.all([
      queryServers("web", q),
      queryServers("image", q),
      queryServers("video", q)
    ]).then(([web, image, video]) => ({
      web,
      image,
      video
    })),
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error("timeout")), 80)
    )
  ])
}
