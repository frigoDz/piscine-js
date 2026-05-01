function indexOf(arr, val, indx = 0) {
  while (indx < arr.length) {
    if (val === arr[indx]) {
      return indx
    }
    indx++
  }
  return -1
}

function lastIndexOf(arr, val, indx = arr.length) {
  while (indx >= 0) {
    if (val === arr[indx]) {
      return indx
    }
    indx--
  }
  return -1
}

function includes(arr, val, indx = 0) {
  while (indx < arr.length) {
    if (val === arr[indx]) {
      return true
    }
    indx++
  }
  return false
} 


// let arr = ["hello", "world", "just", "want", "just", "to"]
// console.log(includes([1, 2, 3, 4, 5, 4, 3, 2, 1], 2))
