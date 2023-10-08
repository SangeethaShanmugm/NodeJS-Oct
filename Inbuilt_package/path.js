const path = require("path")

const testFilePath = "/https://github.com/SangeethaShanmugm?tab=repositories"

console.log(path.dirname(testFilePath))
console.log(path.basename(testFilePath))
console.log(path.extname(testFilePath))
console.log(path.isAbsolute(testFilePath))
console.log(path.parse(testFilePath))