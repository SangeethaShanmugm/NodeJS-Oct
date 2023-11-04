// var double = require("./double") //es5
// import double from "./double" // default import
// import { double, msg } from "./double"
// console.log(double(10))

// console.log(msg)



//async/ await 


async function getData() {

    const url = "https://api.openweathermap.org/data/2.5/weather?lat=12.97&lon=77.59&appid=8c1ec4792e12f7163397d4380a2e0ad0"
    console.log(url)
    let res = await fetch(url)
    let data = await res.json()
    console.log(data)

}
getData()