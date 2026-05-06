function addWeek(date) {
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday","secondMonday", "secondTuesday", "secondWednesday", "secondThursday",
 "secondFriday", "secondSaturday", "secondSunday"]
  const begin = new Date('0001-01-01')
  const dayMill = 1000 * 60 * 60 * 24
  const diff = date - begin
  let ind =  diff / dayMill
  while (ind >= 14) {
    ind = ind - 14
  }
  return days[ind]
}
function timeTravel({date, hour, minute, second}) {
  const newDate = new Date(date)
  newDate.setHours(hour)
  newDate.setMinutes(minute)
  newDate.setSeconds(second)
  return newDate
}
// console.log(timeTravel({
//   date: new Date("2020-05-29 23:25:22"),
//   hour: 21,
//   minute: 22,
//   second: 22,
// }))
// date = new Date('2025-01-15')
// console.log(addWeek(date))
