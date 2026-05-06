function isValid(date) {
  if (typeof date == 'number') {
    return !isNaN(date)
  }
  return date && date.getTime && !isNaN(date.getTime())
}
function isAfter(date1, date2) {
  return date1 > date2
}
function isBefore(date1, date2) {
  return date2 > date1
}
function isFuture(date) {
  const newdate = new Date()
  return isValid(date) && newdate < date 
}
function isPast(date)  {
  const newdate = new Date()
  return isValid(date) && newdate > date
}
