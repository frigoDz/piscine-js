function throttle(fn, t) {
  let lastCall = 0
  return function (...args) {
    const now = Date.now()
    if (now - lastCall >= t) {
      fn(...args)
      lastCall = now
    }
  }
}
function opThrottle(fn, t, options = {}) {
  let lastCall = 0
  let id = null
  let lastArgs
  const leading = options.leading !== false
  const trailing = options.trailing !== false
  return function (...args) {
    const now = Date.now()
    if (!lastCall && !leading) {
      lastCall = now
    }
    const remaining = t - (now - lastCall)
    if (remaining <= 0) {
      clearTimeout(id)
      id = null
      fn(...args)
      lastCall = now
    }
    else if (trailing) {
      lastArgs = args
      clearTimeout(id)
      id = setTimeout(() => {
        fn(...lastArgs)
        lastCall = Date.now()
      }, remaining)
    }
  }
}
// const test = opThrottle(
//   (msg) => {
//     console.log(msg, Date.now())
//   },1000,{leading: false, trailing: false,}
// )
// setTimeout(() => test("B"), 2200)
// setTimeout(() => test("D"), 1200)
