const fs = require("fs")

const quote = "No beauty shines that that of a good heart😀"

// fs.writeFile("awesome.pdf", quote, () => {
//     console.log("Completed writing awesome.pdf")
// })

//Task-1
// /backup -> create 10 files
// text-1.html
// text-2.html
// ...
// text-10.html
// const quote2 = "Live more, worry less"
// for (let i = 1; i <= 10; i++) {
//     fs.writeFile(`./backup/text-${i}.html`, quote2, () => {
//         console.log(`Completed writing text-${i}.html`)
//     })
// }

//node fs.js 20 => 20 files need to be created

// const [, , noOfFiles] = process.argv
// console.log(noOfFiles)
// const quote2 = "Live more, worry less"
// for (let i = 1; i <= noOfFiles; i++) {
//     fs.writeFile(`./backup/note-${i}.html`, quote2, () => {
//         console.log(`Completed writing note-${i}.html`)
//     })
// }

// fs.writeFile => async
// fs.writeFileSync => sync

// const [, , noOfFiles] = process.argv
// console.log(noOfFiles)
// const quote2 = "Live more, worry less"
// for (let i = 1; i <= noOfFiles; i++) {
//     fs.writeFileSync(`./backup/note-${i}.html`, quote2)
//     console.log(`Completed writing note-${i}.html`)
// }


// fs.readFile("./cool123.txt", "utf-8", (err, data) => {
//     if (err) {
//         console.log("Error❌", err)
//     }
//     console.log("The content of the file is =>", data)
// })


// fs.readdir("./backup", (err, files) => {
//     console.log("All file names are =>", files)
// })

// const quote3 = "\nMake everyday a little less ordinarily"

// fs.appendFile("./cool.txt", quote3, (err) => {
//     console.log("Completed writing cool.txt")
// })

// //unlink

// fs.unlink("./toRemove.txt", (err) => {
//     if (err) {
//         console.log(err)
//     }
//     console.log("Deleted successfully")
// })

fs.open("./cool.txt", (err, file) => {
    if (err) { console.log(err) }
    console.log("File opened successfully")
})

fs.stat("./cool.txt", (err, stats) => {
    console.log(stats.isFile())
    console.log(stats.isDirectory())
})

//object  ={k:v}
const user = {
    name: "Jack",
    age: 20
}
const userData = JSON.stringify(user)
console.log(userData)
const userParse = JSON.parse(userData)
console.log(userParse)
// console.log(JSON.parse(user))
//JSON 
const user1 = [{
    "name": "Jack",
    "age": 20
},
{
    "name": "John",
    "age": 20
}]



const movie = {
    name: "The Avengers",
    type: "Hollywood"
}
const movieData = JSON.stringify(movie)
console.log(movieData)

fs.writeFile("movie.json", movieData, (err, movieData) => {
    console.log("WriteFile successfully done")
})