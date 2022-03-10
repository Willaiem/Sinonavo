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

const outputFolderDir = `${rootDir}/links`
const outputDir = `${outputFolderDir}/${outputFile}`

const filesInDir = fs.readdirSync(path.resolve(`${rootDir}${targetPath}`))

if (filesInDir.length === 0) {
  throw new Error('Target directory is empty.')
}

const imgPathsEntries = filesInDir.reduce((acc, fileName) => {
  const [head] = fileName.split('.')

  const filePath = `..${targetPath}/${fileName}`

  const entry = `${head.toUpperCase()}: require("${filePath}"), `

  return acc + entry
}, '')

const stringifiedImgPaths = `{${imgPathsEntries}}`

const generatedJSCode = `export default${removeWhitespace(stringifiedImgPaths)}`

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputFolderDir, {
    recursive: true
  })

  fs.appendFileSync(outputDir, generatedJSCode)
  process.exit(0)
}
fs.writeFileSync(outputDir, generatedJSCode)