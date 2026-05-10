import { styles } from "./pimp-my-style.data.js"
let i = 0
let tr = true
export const pimp = () => {
  const button = document.querySelector("button")
  if (i >= 0 && !tr) {
    button.classList.remove(styles[i])
    i--
    if (i < 0) {
      tr = true
      i = 0
      button.classList.remove("unpimp")
    }
  }
  if (i < styles.length && tr) {
    button.classList.add(styles[i])
    button.classList.add("unpimp")
    i++
    if (i === styles.length) {
      tr = false
      i = styles.length - 1
    }
  }
}
