function debounce(fn, t) {
  let id
  return function(...args) {
    clearTimeout(id)
    id = setTimeout(() => fn(...args), t)
  }
}
function opDebounce(fn, t, options = {}) {
  let id
  let hasCalled = false
  return function(...args) {
    const runN = options.leading && !hasCalled
    clearTimeout(id)
    if (runN) {
      fn(...args)
      hasCalled = true
    }
    id = setTimeout(() => hasCalled = false, t)

  }
}
// const fn = opDebounce(console.log, 10000, { leading: true });
//
// fn("A")
// fn("B")
// fn("C")
