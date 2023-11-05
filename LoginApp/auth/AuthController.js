const express = require("express");
const app = express();
const User = require("../model/user")
const config = require("../config")
const router = express.Router()
const bodyParser = require("body-parser")
//for encrypting password
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const LocalStorage = require("node-localstorage").LocalStorage
localStorage = new LocalStorage("../scratch")

router.use(bodyParser.urlencoded({ extended: true }))
router.use(bodyParser.json())

//setups

app.use(express.static(__dirname + "/public")) //css
app.set("views", "./views")//pages
app.set("view engine", "ejs")//choosing ejs template


router.post("/register", (req, res) => {

    const hashedPassword = bcrypt.hashSync(req.body.password, 8)//no. of rounds
    console.log(hashedPassword)
    User.create({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword
    }).then((registeredUser) => {
        var token = jwt.sign({ id: registeredUser._id }, config.secret, {
            expiresIn: 86400//expires in 24 hours
        })

        res.redirect("/")
    }
    )
})


router.post("/login", (req, res) => {
    User.findOne({ email: req.body.email }, async (err, user) => {
        if (err) return res.send("Error on server")
        console.log(user)
        //validate user
        if (!user) {
            return res.send({ auth: false, token: null, msg: "Invalid Credentials" })
        }
        const storedDbPassword = user.password
        const isPasswordMatch = await bcrypt.compare(req.body.password, storedDbPassword)
        console.log(isPasswordMatch)
        //validate password
        if (!isPasswordMatch) {
            return res.send({ auth: false, token: null, msg: "Invalid Credentials" })
        }
        var token = jwt.sign({ id: user._id }, config.secret, {
            expiresIn: 86400//expires in 24 hours
        })
        console.log(token)
        var data = localStorage.setItem("authtoken", token)
        // res.send({ auth: true, token: token, msg: "Successfuly logged in" })
        res.redirect(`/users/profile`)
    })

})

router.get("/loggedInUser", (req, res) => {
    var token = req.headers["x-auth-token"]
    if (!token)
        return res.send({ auth: false, msg: "No token provided" })

    jwt.verify(token, config.secret, (err, validatedToken) => {
        if (err) {
            console.log("Error in JWT", err)
            return res.send("Authentication failed")
        }
        User.findById(validatedToken.id, { password: 0 })
            .then((userDetails) => {
                console.log("User Info", userDetails.name)
                res.send(userDetails)
            })
            .catch((err) => console.log("Error", err))

    })
})

module.exports = router
