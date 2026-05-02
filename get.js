function get(src, path) {
  let keys = []
  let key = ""
  for (let i = 0; i < path.length; i++) {
    if (path[i] === ".") {
      keys.push(key)
      key = ""
    } else {
      key += path[i]
    }
  }
  keys.push(key)

  let res = src
  for (let i = 0; i < keys.length; i++) {
    if (res === undefined || res === null) return undefined
    res = res[keys[i]]
  }
  return res
}

// const src = { nested: { key: 'peekaboo' } }
// console.log(get(src, 'nested.key')) 
// console.log(get(src, 'nested'))  
// console.log(get(src, 'missing'))
