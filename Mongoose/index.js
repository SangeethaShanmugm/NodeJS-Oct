const express = require("express");
const mongoose = require("mongoose");
var userModel = require("./model/user")
const app = express();
const PORT = 7000;

app.use(express.json());

//Mongodb Connection 
const MONGO_URL = 'mongodb://127.0.0.1:27017/node_Oct_mongo'

mongoose.connect(MONGO_URL)
console.log("Mongodb is connected")

app.get("/", (req, res) => {
  res.send("Welcome to UserList");
});

//add user

app.post("/adduser", (req, res) => {
  userModel.create(req.body).then(() => {
    res.send("User Added Successfully");
  })
});


//get user

app.get("/getUsers", (req, res) => {
  userModel.find().then((result) => {
    res.send(result)
  })
    .catch((err) => {
      res.send(err)
    })
});
//delete user
app.delete("/deleteUser", (req, res) => {
  userModel.findOneAndDelete({ name: req.body.name }).then((result) => {
    res.send("user deleted")
  })
    .catch((err) => {
      res.send("DB error")
    })
});


//update user
app.put("/updateUser", (req, res) => {
  userModel.findOneAndUpdate({ name: req.body.name },
    {
      $set: {
        name: req.body.name,
        age: req.body.age,
        city: req.body.city
      }
    }, { upsert: true }
  )
    .then((result) => {
      res.send("User Updated Successfully!");
    })
    .catch((err) => {
      res.send(err)
    })
});


app.listen(PORT, () => console.log("Server started on the PORT", PORT));
