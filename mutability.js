const samePerson = person
const clone1 = Object.assign({}, person)
const clone2 = { ...person}
person.age++
person.country = 'FR'
