export const build = (n) => {
  let i = 1
  const interval = setInterval(() => {
    if (i > n) {
      clearInterval(interval)
      return
    }
    const brick = document.createElement("div")
    brick.id = "brick-" + String(i)
    if (i % 3 == 2) {
      brick.dataset.foundation = true
    }
    document.body.append(brick)
    i++
  }, 100)
}
export const repair = (...ids) => {
  ids.forEach((id) => {
    let div = document.getElementById(id)
    if (!div) return
    if (div.hasAttribute("data-foundation")) div.dataset.repaired = "in progress"
    else div.dataset.repaired = "true"
  })
}
export const destroy = () => {
  const bricks = document.querySelectorAll("div")
  const lastBrick = bricks[bricks.length - 1]
  if (lastBrick) lastBrick.remove()
}
