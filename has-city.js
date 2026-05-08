function hasCity(country, arr) {
  return function (city) {
    return arr.includes(city) ? city + " is a city from " + country : city + " is not a city from " + country 
  }
}
// const cities = ["fes", "casa", "rabat", "oujda"]
// console.log(hasCity("maroc", cities)("fesss"))
