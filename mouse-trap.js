let hasEntered = false
export const createCircle = () => {
  document.addEventListener("click", (e) => {
    let div = document.createElement("div")
    div.classList.add("circle")
    div.style.background = "white"
    div.style.position = "absolute"
    div.style.left = e.clientX - 25 + "px"
    div.style.top = e.clientY - 25 + "px"
    document.body.append(div)
  })
}
export const moveCircle = () => {
  addEventListener("mousemove", (e) => {
    let circles = document.querySelectorAll(".circle")
    let last = circles[circles.length - 1]
    if (!last) return
    let box = document.querySelector(".box")
    if (!box) return
    let rect = box.getBoundingClientRect()
    const r = 25
    let inside =
      e.clientX > rect.left + r &&
      e.clientX < rect.right - r &&
      e.clientY > rect.top + r &&
      e.clientY < rect.bottom - r
    if (inside) hasEntered = true
    last.style.background = hasEntered ? "var(--purple)" : "white"
    let x = e.clientX
    let y = e.clientY
    if (hasEntered) {
      x = Math.min(Math.max(x, rect.left + r), rect.right - r)
      y = Math.min(Math.max(y, rect.top + r), rect.bottom - r)
    }
    last.style.left = x - 25 + "px"
    last.style.top = y - 25 + "px"
  })
}
export const setBox = () => {
  let div = document.createElement("div")
  div.classList.add("box")
  document.body.append(div)
}
