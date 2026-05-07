function matchCron(cron, date) {
  const [min, hour, day, month, weekday] = cron.split(' ')

  const dMinute = date.getMinutes()
  const dHour = date.getHours()
  const dDay = date.getDate()
  const dMonth = date.getMonth() + 1
  const dWeekday = date.getDay() === 0 ? 7 : date.getDay()

  return (
    (min === '*' || Number(min) === dMinute) &&
    (hour === '*' || Number(hour) === dHour) &&
    (day === '*' || Number(day) === dDay) &&
    (month === '*' || Number(month) === dMonth) &&
    (weekday === '*' || Number(weekday) === dWeekday)
  )
}
