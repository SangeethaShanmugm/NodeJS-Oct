import express from "express";
import http from "http";
import path from "path";
let io = require("socket.io");

const LocalStorage = require("node-localstorage").LocalStorage;
let localStorage = new LocalStorage("./scratch");
const iplocate = require("node-iplocate");
const publicIp = require("public-ip");

let app = express();
const PORT = 4001;
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("index.html");
});

let server = http.createServer(app).listen(PORT, () => {
  console.log("Server listening on port ", PORT);
});

io = require("socket.io").listen(server);

//handle socket traffic

io.sockets.on("connection", (socket) => {
  var list = io.sockets.sockets;
  var users = Object.keys(list);

  //set nickname
  socket.on("nick", (nick) => {
    socket.set("nickname", nick);
    socket.emit("userlist", users);
  });

  //chat data

  socket.on("chat", (data) => {
    socket.get("nickname", (err, nick) => {
      //getting public IP address
      publicIp.v4().then((ip) => {
        iplocate(ip).then((results) => {
          //   console.log("Public IP", results);
          let response = JSON.stringify(results.city, null, 2);
          console.log(response);
          localStorage.setItem("userlocal", response);
        });
      });

      let nickname = err ? "Anonymous" : nick;

      let payload = {
        message: data.message,
        nick: nickname,
        location: localStorage.getItem("userlocal"),
      };

      socket.emit("chat", payload);
      socket.broadcast.emit("chat", payload);
    });
  });
});
