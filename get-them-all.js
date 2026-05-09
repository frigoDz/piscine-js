export const getArchitects = () => {
   const architects = Array.from(document.getElementsByTagName("a"))
   const nonArchitects = Array.from(document.getElementsByTagName("span"))
   return [architects, nonArchitects]
}
export const getClassical = () => {
  const clasical = Array.from(document.getElementsByClassName("classical"))
  const nonClasical = Array.from(document.querySelectorAll("a:not(.classical)"))
  return [clasical, nonClasical]
}
export const getActive = () => {
  const active = Array.from(document.querySelectorAll(".classical.active"))
  const nonActive = Array.from(document.querySelectorAll(".classical:not(.active)"))
  return [active, nonActive]
}
export const getBonannoPisano = () => {
  const bonannoPisano = document.getElementById("BonannoPisano")
  const remaining = Array.from(document.querySelectorAll(".classical.active:not(#BonannoPisano)"))
  return [bonannoPisano, remaining]
}
