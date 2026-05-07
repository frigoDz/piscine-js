function isFriday(date) {
  return date.getDay() === 5
}
function isWeekend(date) {
  return date.getDay() === 0 || date.getDay() === 6 
}
function isLeapYear(date) {
  const year = date.getFullYear()
  return ((year % 4 === 0 && year % 100 !== 0)|| year % 400 === 0)
}
function isLastDayOfMonth(date) {
  const testDate = new Date(date)
  testDate.setDate(testDate.getDate()+ 1)
  return testDate.getDate() === 1
}
