import { styles } from "./pimp-my-style.data.js"
let i = 0
let tr = true
export const pimp = () => {
  const botton = document.querySelector("button")
  if (i >= 0 && !tr) {
    botton.classList.remove(styles[i])
    botton.classList.add("unpimp")
    i--
    if (i < 0) {
      tr = true
    }
  }
  if (i < styles.length && tr) {
    botton.classList.add(styles[i])
    botton.classList.remove("unpimp")
    i++
    if (i == styles.length) {
      tr = false
    }
  }
} 
