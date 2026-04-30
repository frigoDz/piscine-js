function arrToSet(arr) {
  return new Set(arr)
}

function arrToStr(arr) {
  let str = ""
  for (let i = 0;i < arr.length; i++) {
    str += arr[i]
  }
  return str
}

function setToArr(s) {
  const arr = []
  for (const value of s) {
    arr.push(value)
  }
  return arr
}

function setToStr(s) {
  let str = "" 
  for (const value of s) {
    str += value
  }
  return str
}

function strToArr(str) {
  const arr = []
  for (let char of str) {
    arr.push(char)
  }
  return arr
}

function strToSet(str) {
  const s = new Set()
  for (let c of str) {
    s.add(c)
  }
  return s
}

function mapToObj(m) {
  const obj = {}
  for (const [key, value] of m) {
    obj[String(key)] = value
  }
  return obj
}

function objToArr(obj) {
  const arr = []
  for (const value of Object.values(obj)) {
    arr.push(value)
  }
  return arr
}

function objToMap(obj) {
  const m = new Map()
  for (const [key, val] of Object.entries(obj)) {
    m.set(key, val)
  }
  return m
}

function arrToObj(arr) {
  const obj = {}
  for (let i = 0;i < arr.length; i++) {
    obj[String(i)] = arr[i]
  }
  return obj
}

function strToObj(str) {
  const obj = {}
  let i = 0
  for (let c of str) {
    obj[String(i)] = c
    i++
  }
  return obj
}

function superTypeOf(value) {
  if (value === null) return "null"
  if (value === undefined) return "undefined"
  return Object.prototype.toString.call(value).slice(8, -1)
}



// const str = 'hello'
// const arr = [1, 2, 1, 3]
// const obj = { x: 45, y: 75, radius: 24 }
// const set = new Set()
// const map = new Map()
// set.add(1)
// set.add(2)
// set.add(1)
// set.add(3)
// map.set('a', 1)
// map.set('b', 2)
// map.set(3, 'c')
// map.set(4, 'd')
//
// console.log(arrToSet(arr)) // -> Set { 1, 2, 3 }
// console.log(arrToStr(arr)) // -> '1213'
// console.log(setToArr(set)) // -> [1, 2, 3]
// console.log(setToStr(set)) // -> '123'
// console.log(strToArr(str)) // -> ['h', 'e', 'l', 'l', 'o']
// console.log(strToSet(str)) // -> Set { 'h', 'e', 'l', 'o' }
// console.log(mapToObj(map)) // -> { a: 1, b: 2, '3': 'c', '4': 'd' }
// console.log(objToArr(obj)) // -> [45, 75, 24]
// console.log(objToMap(obj)) // -> Map { 'x' => 45, 'y' => 75, 'radius' => 24 }
// console.log(arrToObj(arr)) // -> { '0': 1, '1': 2, '2': 1, '3': 3 }
// console.log(strToObj(str)) // -> { '0': 'h', '1': 'e', '2': 'l', '3': 'l', '4':
// console.log(superTypeOf(map)) //         -> 'Map'
// console.log(superTypeOf(set)) //         -> 'Set'
// console.log(superTypeOf(obj)) //         -> 'Object'
// console.log(superTypeOf(str)) //         -> 'String'
// console.log(superTypeOf(666)) //         -> 'Number'
// console.log(superTypeOf(NaN)) //         -> 'Number'
// console.log(superTypeOf(arr)) //         -> 'Array'
// console.log(superTypeOf(null)) //        -> 'null' (hmmmm)
// console.log(superTypeOf(undefined)) //   -> 'undefined' (hmmmm)
// console.log(superTypeOf(superTypeOf)) // -> 'Function'
