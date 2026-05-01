function indexOf(arr, str, indx = 0) {
  while (indx < arr.length) {
    if (str === arr[indx]) {
      return indx
    }
    indx++
  }
  return -1
}

function lastIndexOf(arr, str) {
  let i = arr.length -1
  while (i >= 0) {
    if (str === arr[i]) {
      return i
    }
    i--
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
// console.log(includes(arr,"hello",0))
