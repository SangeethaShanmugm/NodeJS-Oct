const express = require("express")
const axios = require("axios")


const PORT = 8800
const HOST = "0.0.0.0"

const app = express()

const searchURL = "https://restcountries.com/v3.1/all"


app.get("/", (req, res) => {
    axios.get(searchURL).then(response => {
        const responseJSON = response.data
        return res.status(200).json({ source: 'Docker Microservices', ...responseJSON })
    })
        .catch(err => {
            return res.json(err)
        })
})

app.listen(PORT, HOST)
console.log(`Server running on port http://${HOST}:${PORT}`)