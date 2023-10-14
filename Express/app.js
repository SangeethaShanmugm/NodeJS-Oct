const express = require('express')//third party package
const app = express()
const PORT = 3000
//req -> what you send to server
//res => what we receive from server
app.get('/', (req, res) => {
    res.send('Hello Everyone Good Day😆😆')
})

app.listen(PORT, () => console.log("The server started on the port", PORT))