function filterShortStateName(arr) {
  const res = arr.filter((word) => word.length < 7)
  return res
}
// const arr = ["123", "1234", "12345", "123456", "12434567", "123456789"]
// console.log(filterShortStateName(arr))
function filterStartVowel(arr) {
  const res = arr.filter((word) => 'aeiouAEIOU'.includes(word[0]))
  return res
}
// const arr = ["ali", "rebo", "Elkjfd", "mia"]
// console.log(filterStartVowel(arr))
function filter5Vowels(arr) {
  const res = arr.filter((word) => {
    let count = 0
    for (let i = 0; i < word.length; i++) {
      if ('aeiouAEIOU'.includes(word[i])) {
        count++
      }
    }
    return count >= 5
  })
  return res
}
// const arr = ["aeiei", "rebo", "Elkjfd", "maaaaaaia"]
// console.log(filter5Vowels(arr))
function filter1DistinctVowel(arr) {
  const res = arr.filter((word) => {
    let tmp = []
    for (let i = 0; i < word.length; i++) {
      if ('aeiouAEIOU'.includes(word[i])) {
        tmp.push(word[i])
      }
    }
    let check = new Set(tmp)
    return tmp.length !== 0 && check.size == 1
  })
  return res

}
// const arr = ["aeiei", "rebeeeeeeeeeeeeeeeee", "Elkjfd", "maaaaaaia"]
// console.log(filter1DistinctVowel(arr))
function multiFilter(arr) {
  return arr.filter((obj) => {
    let count = 0
    for(let i = 0; i < obj.tag.length; i++) {
      if ('aeiouAEIOU'.includes(obj.tag[i])){
        count++
      }
    }
    return (obj.capital.length >= 8 && !('aeiouAEIOU'.includes(obj.name[0])) && obj.region !== "South" && count !== 0)
  })
}

// const arrbj = [
//   {
//     capital: "CasablancaCity",
//     name: "John",
//     tag: "alpha",
//     region: "North"
//   },
//   {
//     capital: "NYC",
//     name: "elice",
//     tag: "bcdfg",
//     region: "South"
//   },
// ]
// console.log(multiFilter(arrbj))
