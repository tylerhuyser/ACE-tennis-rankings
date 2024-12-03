export { root }

import { dirname } from 'path'
import { fileURLToPath } from 'url'
const metaUrl = import.meta.url;
const __dirname = dirname(fileURLToPath(metaUrl))
const root = `${__dirname}/..`