import express from "express";
import fs from "fs";
const app = express();
const PORT = 5500;

app.get("/", (req, res) => {
  res.status(200).send("welcome");
});


app.get("/movies", (req, res) => {
  fs.readFile("./data.json", (err, result) => {
    if (err) throw err;
    res.status(400).send(JSON.parse(result));
    // res.send("movies")
  })
});




app.listen(PORT, () => console.log("Server listening on port", PORT));
