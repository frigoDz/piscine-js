function indexOf(arr, str, indx = 0) {
  while (indx < arr.length) {
    if (str === arr[indx]) {
      return indx
    }
    indx++
  }
  return -1
}

function lastIndexOf(arr, str, indx = arr.length) {
  while (indx >= 0) {
    if (str === arr[indx]) {
      return indx
    }
    indx--
  }
  return -1
}

function includes(arr, str, indx = 0) {
  while (indx < arr.length) {
    if (str === arr[indx]) {
      return true
    }
    return false
  }
} 



// let arr = ["hello", "world", "just", "want", "just", "to"]
// console.log(lastIndexOf(arr,"world", 0))
