function pick(obj, arg) {
  const res = {}
  if(!Array.isArray(arg)) arg = [arg]
  for(const [key,value] of Object.entries(obj)) {
    if (arg.includes(key)) {
      res[key] = value
    }
  }
  return res
}
function omit(obj, arg) {
  const res = {}
  if(!Array.isArray(arg)) arg = [arg]
  for(const [key,value] of Object.entries(obj)) {
    if (!arg.includes(key)) {
      res[key] = value
    }
  }
  return res
}
