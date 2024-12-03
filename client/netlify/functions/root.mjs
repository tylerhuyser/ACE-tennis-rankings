export { root }

import { dirname } from 'path'
import { fileURLToPath } from 'url'
// const metaUrl = ;
import dirname from 'import.meta.urles-dirname'

const __dirname = dirname(fileURLToPath(import.meta.url))
// const __dirname = dirname
const root = `${__dirname}/..`