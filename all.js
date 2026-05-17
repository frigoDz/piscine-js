function all(obj) {
  const keys = Object.keys(obj)
  const promises = keys.map((key) =>
    Promise.resolve(obj[key]).then((value) => [key, value])
  )
  return Promise.all(promises).then((results) => {
    const out = {}
    for (const [key, value] of results) {
      out[key] = value
    }
    return out
  })
}
