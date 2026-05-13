function pick(obj, arg) {
  const res = {}
  if(!Array.isArray(arg)) arg = [arg]
  for(const [key,value] of Object.entries(obj)) {
    for(let j = 0; j < arg.length; j++) {
      if(key === arg[j]) {
        res[key] = value
      }
    }
  }
  return res
}
function pick(obj, arg) {
  const res = {}
  if(!Array.isArray(arg)) arg = [arg]
  for(const [key,value] of Object.entries(obj)) {
    for(let j = 0; j < arg.length; j++) {
      if(key !== arg[j]) {
        res[key] = value
      }
    }
  }
  return res
}
