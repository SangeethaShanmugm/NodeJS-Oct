import express from "express";
import redis from "redis"
const app = express();
const PORT = 4002;


//redis connection 

const client = redis.createClient({
  host: "127.0.0.1",
  port: 6379,
})

client.set("aprvisit", 0)

app.get("/", (req, res) => {
  client.get("aprvisit", (err, aprvisit) => {
    res.send("Number of visits are " + aprvisit)
    client.set("aprvisit", Number(aprvisit) + 1)
  })

});

app.listen(PORT, () => console.log("Server listening on port", PORT));
