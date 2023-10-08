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

const [, , noOfFiles] = process.argv
console.log(noOfFiles)
const quote2 = "Live more, worry less"
for (let i = 1; i <= noOfFiles; i++) {
    fs.writeFileSync(`./backup/note-${i}.html`, quote2)
    console.log(`Completed writing note-${i}.html`)
}
