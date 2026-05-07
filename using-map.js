// const arr = ["wasir", "nta", "machi", "sahbi"]
// const mapped = arr.map((item) => item.toUpperCase())
// console.log(mapped)
// console.log(arr)
// const arr1 = ([
//   {
//     city: 'Los Angeles',
//     temperature: '  101 °F   ',
//   },
//   {
//     city: 'San Francisco',
//     temperature: ' 84 ° F   ',
//   },
// ])
function citiesOnly(arr) {
  return arr.map((item) => item.city)
}
// console.log(citiesOnly(arr1))
// const arr2 = ['alabama', 'new jersey']
function upperCasingStates(arr) {
  return arr.map((item) => {
    return item.split(" ").map((word) => word[0].toUpperCase() + word.slice(1)).join(" ")
  })
}
// console.log(upperCasingStates(arr2))
// const arr3 = ['68°F', '59°F', '23   °F']
function fahrenheitToCelsius(arr) {
  return arr.map((item) => Math.floor((Number(item.replaceAll(" ", "").slice(0,-2)) - 32) * 5/9) + "°C")
}
// console.log(fahrenheitToCelsius(arr3))
// const arr4 = ([
//   { city: 'Los Angeles', temperature: '  101 °F   ' },
//   { city: 'San Francisco', temperature: ' 84 ° F   ' },
// ])
function trimTemp(arr) {
  return arr.map((item) => {
    item.temperature = item.temperature.replaceAll(" ", "")
    return item
  })
}
// console.log(trimTemp(arr4))
// const arr5 = ([
//   {
//     city: 'Pasadena',
//     temperature: ' 101 °F',
//     state: 'california',
//     region: 'West',
//   },
// ])
function  tempForecasts(arr){
   return arr.map((item) =>  
     Math.floor((Number(item.temperature.replaceAll(" ", "").slice(0,-2)) - 32) * 5/9) + "°"
 + "Celsius in " + item.city + ", " + item.state.split(" ").map((word) => word[0].toUpperCase() + word.slice(1)).join(" ")) 
}
// console.log(tempForecasts(arr5))
