import express from "express"
import http from "http"
import path from "path"
let io = require("socket.io")

let app = express()
const PORT = 4000

const LocalStorage = require("node-localstorage").LocalStorage
let localstorage = new LocalStorage("./scratch")
const publicIp = require("public-ip")
const iplocate = require("node-iplocate")


app.use(express.static(path.join(__dirname, "public")))

app.get("/", (req, res) => {
    res.render("index.html")
})

let server = http.createServer(app).listen(PORT, () => {
    console.log("Server started on port", PORT)
})

io = require("socket.io").listen(server)
//handle socket 

io.sockets.on("connection", (socket) => {
    var list = io.sockets.sockets
    console.log(list)
    var users = Object.keys(list)
    console.log(users)
    //set nickname
    socket.on("nick", (nick) => {
        socket.set("nickText", nick)
        socket.emit("userlist", users)
    })

    //chat data 
    socket.on("chat", (data) => {
        socket.get("nickText", (err, nick) => {

            //get public Ip address
            publicIp.v4().then((ip) => {
                iplocate(ip).then((results) => {
                    console.log("public Ip", results)
                    let response = JSON.stringify(results.city)
                    console.log(response)
                    localstorage.setItem("userlocal", response)
                })
            })

            let nickname = err ? "Anonymous" : nick
            let payload = {
                message: data.message,
                nick: nickname,
                location: localstorage.getItem("userlocal")
            }

            console.log(payload)

            socket.emit("chat", payload)
            socket.broadcast.emit("chat", payload)

        })
    })
})