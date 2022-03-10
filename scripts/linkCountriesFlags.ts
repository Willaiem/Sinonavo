import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const removeWhitespace = (s: string) => s.replace(/ /g, '')

const rootDir = __dirname.replace('scripts', '')

const targetPath = '/assets/countriesflags'

const outputName = 'countriesflags'
const outputFile = `${outputName}-link.ts`
const outputDir = `${rootDir}/links/${outputFile}`

const filesInDir = fs.readdirSync(path.resolve(`${rootDir}${targetPath}`))

if (filesInDir.length === 0) {
  throw new Error('Target directory is empty.')
}

const imgPaths = filesInDir.reduce<{ [iso: string]: string }>((acc, fileName) => {
  const [head] = fileName.split('.')

  const filePath = `..${targetPath}/${fileName}`

  acc[head.toUpperCase()] = `require("${filePath}")`

  return acc
}, {})

const stringifiedObjectWithFns = Object.entries(imgPaths).reduce((acc, [key, value]) => {
  const entry = `${key}: ${value}, `

  return acc + entry
}, '')


const generatedJSCode = `export default{${removeWhitespace(stringifiedObjectWithFns)}}`

if (!fs.existsSync(outputDir)) {
  fs.appendFileSync(outputDir, generatedJSCode)
  process.exit(0)
}
fs.writeFileSync(outputDir, generatedJSCode)