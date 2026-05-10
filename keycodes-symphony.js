export const compose = () => {
  let letters = "qwertyuiopasdfghjklzxcvbnm".split("")
  document.addEventListener("keydown", cla => {
    if (letters.includes(cla.key)) {
      let ele = document.createElement("div")
      ele.textContent = cla.key
      ele.classList.add("note")
      ele.style.backgroundColor = `hsl(${cla.key.charCodeAt(0) * 10}, 70%, 50%)`
      document.body.append(ele)
    }
    if (cla.code == "Escape") {
      let divs = document.querySelectorAll(".note")
      divs.forEach(div => {
        div.remove()
      })
    }
    if (cla.code === "Backspace") {
      let divs = document.querySelectorAll(".note")
      if (divs.length > 0) {
        divs[divs.length - 1].remove()
      }
    }
  })
}
