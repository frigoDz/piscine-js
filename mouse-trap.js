let inside = false
let trapped = false
export const createCircle = () => {
  document.addEventListener("click", mou => {
    trapped = false
    let div = document.createElement("div")
    div.classList.add("circle")
    div.style.background = "white"
    div.style.position = "absolute"
    div.style.left = mou.clientX - 25 + "px"
    div.style.top = mou.clientY - 25 + "px"
    document.body.append(div)
  })
}
export const moveCircle = () => {
  addEventListener("mousemove", (event) => {
    let all = document.querySelectorAll(".circle")
    let lastOne = all[all.length - 1]
    if (!lastOne) return
    let box = document.querySelector(".box")
    if (!box) return
    let boxRect = box.getBoundingClientRect()
    let circleRect = lastOne.getBoundingClientRect()
    inside =
      circleRect.left > boxRect.left &&
      circleRect.right < boxRect.right &&
      circleRect.top > boxRect.top &&
      circleRect.bottom < boxRect.bottom
    if (inside) trapped = true
    if (trapped) {
      lastOne.style.background = "var(--purple)"
      return
    }
    lastOne.style.left = event.clientX - 25 + "px"
    lastOne.style.top = event.clientY - 25 + "px"
  })
}
export const setBox = () => {
  let div = document.createElement("div")
  div.classList.add("box")
  document.body.append(div)
}
