const path = require('path');

const __dirname = path.dirname(__filename || new URL('', import.meta.url).pathname);
const root = `${__dirname}/..`;

module.exports = { root };