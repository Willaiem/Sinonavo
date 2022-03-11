import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rootDir = __dirname.replace('scripts', '')

const targetPath = '/assets/countriesflags'

const outputName = 'countriesflags'
const outputFile = `${outputName}-link.ts`

const outputFolderDir = `${rootDir}/src/links`
const outputDir = `${outputFolderDir}/${outputFile}`

const filesInDir = fs.readdirSync(path.resolve(`${rootDir}${targetPath}`))

if (filesInDir.length === 0) {
  throw new Error('Target directory is empty.')
}

const imgPathsEntries = filesInDir.reduce((acc, fileName) => {
  const [head] = fileName.split('.')

  const filePath = `../..${targetPath}/${fileName}`

  const entry = `${head.toUpperCase()}: require("${filePath}") as ImageSourcePropType, `

  return acc + entry
}, '')

const RNImport = `import {ImageSourcePropType} from 'react-native';`

const stringifiedImgPaths = `{${imgPathsEntries}}`
const exportedCode = `export default ${stringifiedImgPaths}`

const generatedJSCode = `${RNImport}${exportedCode}`

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputFolderDir, {
    recursive: true
  })

  fs.appendFileSync(outputDir, generatedJSCode)
  process.exit(0)
}
fs.writeFileSync(outputDir, generatedJSCode)