// const nutritionDB = {
//   tomato:  { calories: 18,  protein: 0.9,   carbs: 3.9,   sugar: 2.6, fiber: 1.2, fat: 0.2   },
//   vinegar: { calories: 20,  protein: 0.04,  carbs: 0.6,   sugar: 0.4, fiber: 0,   fat: 0     },
//   oil:     { calories: 48,  protein: 0,     carbs: 0,     sugar: 123, fiber: 0,   fat: 151   },
//   onion:   { calories: 0,   protein: 1,     carbs: 9,     sugar: 0,   fiber: 0,   fat: 0     },
//   garlic:  { calories: 149, protein: 6.4,   carbs: 33,    sugar: 1,   fiber: 2.1, fat: 0.5   },
//   paprika: { calories: 282, protein: 14.14, carbs: 53.99, sugar: 1,   fiber: 0,   fat: 12.89 },
//   sugar:   { calories: 387, protein: 0,     carbs: 100,   sugar: 100, fiber: 0,   fat: 0     },
//   orange:  { calories: 49,  protein: 0.9,   carbs: 13,    sugar: 9,   fiber: 0.2, fat: 0.1   },
// }

function filterEntries(obj, func) {
  const entries = Object.entries(obj)
  const filteredEntries = entries.filter(func)
  return Object.fromEntries(filteredEntries)
}
function mapEntries(obj, func) {
  const entries = Object.entries(obj)
  const mappedEntries = entries.map(func)
  return Object.fromEntries(mappedEntries)
}
function reduceEntries(obj, func, init) {
  const entries = Object.entries(obj)
  return entries.reduce(func, init)
}
function totalCalories(cart) {
  const result = reduceEntries(cart, function(total, [itemName, grams]) {
    const caloriesPer100g = nutritionDB[itemName].calories
    const itemCalories = caloriesPer100g * grams / 100
    return total + itemCalories
  }, 0)
  return Number(result.toFixed(1))
}
function lowCarbs(cart) {
  return filterEntries(cart, function([itemName, grams]) {
    const carbsPer100g = nutritionDB[itemName].carbs
    const totalCarbs = carbsPer100g * grams / 100
    return totalCarbs < 50
  })
}
function cartTotal(cart) {
  const result = {}
  for (const [itemName, grams] of Object.entries(cart)) {
    const nutritionFacts = nutritionDB[itemName]
    const scaledNutrition = {}
    for (const [nutrientName, valuePer100g] of Object.entries(nutritionFacts)) {
      const scaledValue = valuePer100g * grams / 100
      scaledNutrition[nutrientName] = Number(scaledValue.toFixed(3))
    }
    result[itemName] = scaledNutrition
  }
  return result
}
// const groceriesCart = { orange: 500, oil: 20, sugar: 480 }
//
// console.log('Total calories:')
// console.log(totalCalories(groceriesCart))
// console.log('Items with low carbs:')
// console.log(lowCarbs(groceriesCart))
// console.log('Total cart nutritional facts:')
// console.log(cartTotal(groceriesCart))
