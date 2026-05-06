function isValid(date) {
  return date && date.getTime && !isNaN(date.getTime())
}
function isAfter(date1, date2) {
  return date1 > date2
}
function isBefore(date1, date2) {
  return date2 > date1
}
function isFuture(date) {
  newdate = new Date()
  return isValid(date) && newdate < date 
}
function isPast(date)  {
  newdate = new Date()
  return isValid(date) && newdate > date
}
