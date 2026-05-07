function dayOfTheYear(date) {
  const year = date.getFullYear()
  let count = 0
  for (let m = 0; m < date.getMonth(); m++) {
    count += new Date(year, m + 1, 0).getDate()
  }
  count += date.getDate()
  return count
}
