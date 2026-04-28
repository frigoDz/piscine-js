function dogYears(planet, ageInSec) {
  const earthAge = ageInSec/60/60/24/365.25
  let age = 0
  switch (planet) {
    case "earth":
    age = earthAge
    break
    case "mercury":
    age = earthAge / .2408467
      break
    case "venus":
    age = earthAge / .61519726
      break
    case "mars":
    age = earthAge / 1.8808158
      break
    case "jupiter":
    age = earthAge / 11.862615
      break
    case "saturn":
    age = earthAge / 29.447498
      break
    case "uranus":
    age = earthAge / 84.016846
      break
    case "neptune":
    age = earthAge / 164.79132
      break
  }
  return Number((age * 7).toFixed(2))
}
// console.log(dogYears("mercury", 2134835688))
