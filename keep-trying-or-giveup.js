function retry(count, callback) {
  return async function (...args) {
    let lastError
    for (let i = 0; i <= count; i++) {
      try {
        return await callback(...args)
      } catch (err) {
        lastError = err
      }
    }
    throw lastError
  }
}
function timeout(delay, callback) {
  return async function (...args) {
    return await Promise.race([
      callback(...args),
      new Promise((_, reject) =>
        setTimeout(() => reject(new Error("timeout")), delay)
      )
    ])
  }
}
