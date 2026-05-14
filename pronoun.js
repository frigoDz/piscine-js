function pronoun(str) {
  const pronouns = ['i', 'you', 'he', 'she', 'it', 'they', 'we']
  const words = str.toLowerCase().replace(/[^a-z\s]/g, '').split(/\s+/)
  const result = {}
  for (let i = 0; i < words.length; i++) {
    const word = words[i]
    if (pronouns.includes(word)) {
      if (!result[word]) {
        result[word] = { word: [], count: 0 }
      }
      result[word].count++
      const nextWord = words[i + 1]
      if (nextWord && !pronouns.includes(nextWord)) {
        result[word].word.push(nextWord)
      }
    }
  }
  return result
}
// const ex = 'Using Array Destructuring, you you can iterate through objects easily.'
// console.log(pronoun(ex))
// const ex1 = 'If he you want to buy something you have to pay.'
// console.log(pronoun(ex1))
