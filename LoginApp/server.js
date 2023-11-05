const express = require("express");
const app = require("./app");
const bodyParser = require("body-parser");
const PORT = 4000;
const bcrypt = require("bcryptjs")
app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/", (req, res) => {
  res.render("index")
});

app.get("/signup", (req, res) => {
  res.render("signup")
});


// async function hash(password) {
//   const salt = await bcrypt.genSalt(8)//no. of rounds
//   console.log(salt)
//   const hashedPassword = await bcrypt.hash(password, salt)
//   console.log(hashedPassword)
//   return hashedPassword
// }
// console.log(hash("password@123"));


app.listen(PORT, () => console.log(`Server started on ${PORT}`));


// password@123 + rieyttyidjw436dgahfd(random string) => 5867656566
// welcome@123 + hisdhfw48feajfjdgjfdhgkfdjghkgh=> 324568698

// password@123 => 89987656566