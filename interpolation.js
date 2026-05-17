function interpolation({step, start, end, callback, duration}) {
  const gap = (end - start) / step
  const delay = duration / step

  for (let i = 0; i < step; i++) {
    setTimeout(() => {
      callback([
        start + gap * i,
        delay * i
      ])
    }, delay * i)
  }
}
// interpolation({step: 5, start: 0, end: 1, duration: 10, callback: console.log})
