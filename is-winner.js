async function isWinner(countryName) {
  try {
    const country = await db.getWinner(countryName)
    const wins = await db.getResults(country.id)
    if (country.continent !== "Europe") {
      return `${country.name} is not what we are looking for because of the continent`
    }
    if (wins.length < 3) {
      return `${country.name} is not what we are looking for because of the number of times it was champion`
    }
    const years = wins.map(w => w.year).join(", ")
    const results = wins.map(w => w.score).join(", ")
    return `${country.name} won the FIFA World Cup in ${years} winning by ${results}`
  } catch (err) {
    return `${countryName} never was a winner`
  }
}
