const buffer = require("buffer")

buffer = Buffer.alloc(256)
var data = buf.write("Hello Everyone")

console.log(data)

var buff1 = Buffer.from("1234567890")//targetStart => index
//1234567890
//0123456789
console.log(buff1)
var buff2 = Buffer.from("HELLOO")//sourceStart => index
//HELLOO
//012345
console.log(buff2)
//12LLOO7890
//0123456789

buff2.copy(buff1, 2, 2)// buffer.copy(buffer, targetStart, sourceStart)
console.log(buff1.toString())//12LLOO7890

console.log(Buffer.compare(buff1, buff2))
console.log(Buffer.concat([buff1, buff2]).toString())