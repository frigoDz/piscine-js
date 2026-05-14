function defaultCurry(obj1) {
  return function(obj2) { 
    return {...obj1, ...obj2 }
  } 
}
function mapCurry(func) {
  return function(obj) {
    const entries = Object.entries(obj)
    const mappedEntries = entries.map(func)
    return Object.fromEntries(mappedEntries)
  }
}
function reduceCurry(func) {
  return function(obj, init) {
    const entries = Object.entries(obj)
    return entries.reduce(func, init)
  }
}
function filterCurry(func) {
  return function(obj) {
    const entries = Object.entries(obj)
    const filteredEntries = entries.filter(func)
    return Object.fromEntries(filteredEntries)
  }
}
function filterForce(obj) {
  return filterCurry(([key, val]) => {
    return val.isForceUser && val.shootingScore >= 80
  })(obj)
}
function reduceScore(obj, init = 0) {
  return reduceCurry(function(total, [name, stats]) {
    if (stats.isForceUser === true) {
      return total + stats.pilotingScore + stats.shootingScore
    }
    return total
  })(obj, init)
}
function mapAverage(obj) {
  return mapCurry(function([name, stats]) {
    const averageScore = (stats.pilotingScore + stats.shootingScore) / 2
    return [name, { averageScore: averageScore }]
  })(obj)
}
const personnel = {
  lukeSkywalker: { id: 5,  pilotingScore: 98, shootingScore: 56, isForceUser: true  },
  sabineWren:    { id: 82, pilotingScore: 73, shootingScore: 99, isForceUser: false },
  zebOrellios:   { id: 22, pilotingScore: 20, shootingScore: 59, isForceUser: false },
  ezraBridger:   { id: 15, pilotingScore: 43, shootingScore: 67, isForceUser: true  },
  calebDume:     { id: 11, pilotingScore: 71, shootingScore: 85, isForceUser: true  },
}
// console.log(filterForce(personnel))
// console.log(reduceScore(personnel))
// console.log(mapAverage(personnel))
