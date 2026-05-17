function all(obj) {
  const keys = Object.keys(obj)
  if (keys.length === 0) return Promise.resolve({})
  return new Promise((resolve, reject) => {
    const result = {}
    let done = 0
    keys.forEach((key) => {
      Promise.resolve(obj[key])
        .then((value) => {
          result[key] = value
          done++
          if (done === keys.length) {
            resolve(result)
          }
        })
        .catch(reject)
    })
  })
}
