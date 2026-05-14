function replica(target, ...sources) {
  for (const source of sources) {
    for (const key of Object.keys(source)) {
      const sourceValue = source[key]
      const targetValue = target[key]
      if (sourceValue instanceof RegExp) {
        target[key] = new RegExp(sourceValue)
      } else if (typeof sourceValue === 'object' && sourceValue !== null && !Array.isArray(sourceValue)) {
        if (typeof targetValue !== 'object' || targetValue === null || Array.isArray(targetValue)) {
          target[key] = {}
        }
        replica(target[key], sourceValue)
      } else {
        target[key] = sourceValue
      }
    }
  }
  return target
}
// const target = { a: 1 }
// const source = { b: 2 }
// replica(target, source)
// console.log(target)
