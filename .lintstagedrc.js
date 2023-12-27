const path = require('path')

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' --file ')}`

module.exports = {
  "src/**/*.{scss,css,json,yml,html}": [
    "prettier --write"
  ],
  '*.{js,jsx,ts,tsx}': [buildEslintCommand],
}