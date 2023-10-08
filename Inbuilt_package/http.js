var http = require("http")

//req => what we send to server
//res => what we receive from server
http.createServer( (req, res) => {
    // res.writeHead(200, { "Content-Type": "text/plain" });
    res.write("Hello Everyone")
    res.end()
})
    .listen(5000)