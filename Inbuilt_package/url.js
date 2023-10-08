var url = require("url")

var urlAddress = "https://github.com/SangeethaShanmugm?tab=repositories"


var parseAddress = url.parse(urlAddress, true)
console.log(parseAddress)
console.log(parseAddress.hostname)
console.log(parseAddress.query)