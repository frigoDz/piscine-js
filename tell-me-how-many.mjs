import { readdir } from 'node:fs/promises'
const dir = process.argv[2]
const files = await readdir(dir)
console.log(files.length)
