import { colors } from "./fifty-shades-of-cold.data.js"
export const generateClasses = () => {
  const style = document.createElement("style")
  let css = ""
  for (let i = 0; i < colors.length; i++) {
    css += `.${colors[i]} {background: ${colors[i]};}`
  }
  style.textContent = css
  document.head.append(style)
}
export const generateColdShades = () => {
  const coldKeywords = ["aqua", "blue", "turquoise", "green", "cyan", "navy", "purple"]
  const container = document.body
  colors.forEach((color) => {
    const isCold = coldKeywords.some((word) => color.includes(word))
    if (isCold) {
      const div = document.createElement("div")
      div.className = color
      div.textContent = color
      div.addEventListener("click", () => choseShade(color))
      container.append(div)
    }
  })
}
export const choseShade = (shade) => {
  const divs = document.querySelectorAll("div")
  divs.forEach((div) => {
    const currentClass = div.className
    if (currentClass !== shade) {
      div.className = shade
    }
  })
}
