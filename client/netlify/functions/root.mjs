export { root }

import { dirname } from 'path'
import { fileURLToPath } from 'url'
// const metaUrl = import.meta.url;
import dirname from 'es-dirname'

// const __dirname = dirname(fileURLToPath(metaUrl))
const __dirname = dirname
const root = `${__dirname}/..`