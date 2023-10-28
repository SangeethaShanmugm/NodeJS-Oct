import express from "express"
import fs from "fs"
import { MongoClient } from "mongodb"
import bodyParser from "body-parser"
import { booksRouter } from "./routes/books.js"
const app = express()
const PORT = 5000


app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

//Mongodb Connection
const MONGO_URL = 'mongodb://127.0.0.1:27017';
//mongodb://localhost:27017
async function createConnection() {
    const client = new MongoClient(MONGO_URL);
    await client.connect()
    console.log("MongoDB is connected")
    return client
}
export const client = await createConnection()

//req -> what you send to server
//res => what we receive from server
app.get('/', (req, res) => {
    res.send('Hello Everyone Good Day😆😆')
})

// C - Create - post
// R - Read - get
// U - Update - put
// D - Delete - delete
app.use("/books", booksRouter)

app.listen(PORT, () => console.log("The server started on the port", PORT))




