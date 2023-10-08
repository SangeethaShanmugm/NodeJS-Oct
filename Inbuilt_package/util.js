var util = require("util")

var textmessage = "Congratulations %s on their %dth birthday";

// %s => text/string 
// %d => number

console.log(util.format(textmessage, "Jack", 25))

const inspectOut = {
    colors: true
}

console.log(util.inspect(textmessage, inspectOut))
