function firstDayWeek(num, str) {
  const day1 = new Date(str+"-01-01")
  let y = 0
  if (day1.getDay() != 1) {
    if(num == 1) {
      return "01-01-" + str
    }
    let i = day1.getDay()
    if (i == 0) {
      i = i+7
    }
    while (i != 1) {
      i--
      y++
    }
  }
  day1.setDate(day1.getDate() - y)
  const weekDay = (num -1) * 7
  day1.setDate(day1.getDate() + weekDay)
  const day = String(day1.getDate()).padStart(2, "0")
  const month = String(day1.getMonth() + 1).padStart(2, "0")
  const year = String(day1.getFullYear()).padStart(4, "0")

  return day + "-" + month + "-" + year
}
// console.log(firstDayWeek(2,"0008"))
