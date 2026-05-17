async function getJSON(path, params) {
  let url = path
  if (params) {
    url += "?" + new URLSearchParams(params).toString()
  }
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error(response.statusText)
  }
  const result = await response.json()
  if (result.error) {
    throw new Error(result.error)
  }
  return result.data
}
