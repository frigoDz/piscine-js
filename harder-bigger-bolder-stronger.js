export const generateLetters = () => {
  let i = 0
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  while(i < 120){
    const div = document.createElement("div")
    div.textContent = alphabet[Math.floor(Math.random() * 26)]
    div.style.fontSize = (i + 11) + "px"
    if (i < 40) div.style.fontWeight = "300"
    if (i >= 40 && i < 80) div.style.fontWeight = "400"
    if (i >= 80) div.style.fontWeight = "600"
    document.body.append(div)
    i++
  }
}
