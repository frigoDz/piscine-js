function fusion(obj1,obj2) {
  const se = new Set()
  const res = {}
  for(key of Object.keys(obj1)) se.add(key)
  for(key of Object.keys(obj2)) se.add(key)
  for(const key of se) {
    const v1 = obj1[key]
    const v2 = obj2[key]

    if (v1 === undefined) {
      res[key] = v2
    } else if (v2 === undefined) {
      res[key] = v1
    } else if (Array.isArray(v1) && Array.isArray(v2)) {
      res[key] = v1.concat(v2)
    } else if (typeof v1 === "string" && typeof v2 === "string") {
      res[key] = v1 + " " + v2
    } else if (typeof v1 === "number" && typeof v2 === "number") {
      res[key] = v1 + v2
    } else if (
      typeof v1 === "object" &&
      typeof v2 === "object" &&
      !Array.isArray(v1) &&
      !Array.isArray(v2)
    ) {
      res[key] = fusion(v1, v2)
    } else {
      res[key] = v2
    }
  }
  return res
}
