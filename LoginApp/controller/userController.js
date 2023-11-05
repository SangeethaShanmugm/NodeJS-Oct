const express = require("express");
const app = express();
const router = express.Router()
const jwt = require("jsonwebtoken")
const LocalStorage = require("node-localstorage").LocalStorage
localStorage = new LocalStorage("../scratch")
const config = require("../config")

router.get("/profile", (req, res) => {
    var token = localStorage.getItem("authtoken")
    console.log(token)
    if (!token) {
        res.redirect("/")
    }
    jwt.verify(token, config.secret, (err, verifiedToken) => {
        if (err) {
            res.redirect("/")
        }
        console.log(verifiedToken)
    })

})

module.exports = router