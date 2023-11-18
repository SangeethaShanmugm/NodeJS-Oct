const express = require("express");
const app = express();
const router = express.Router()
const jwt = require("jsonwebtoken")
const LocalStorage = require("node-localstorage").LocalStorage
localStorage = new LocalStorage("../scratch")
const config = require("../config")
const User = require("../model/user");

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
        User.findById(verifiedToken.id, { password: 0 }, (err, user) => {
            if (err) {
                res.redirect("/")
            }
            if (!user) {
                res.redirect("/")

            }
            res.render("profile.ejs", { user })
        })

    })

})

router.get("/logout", (req, res) => {
    localStorage.removeItem("authToken")
    res.redirect("/")
})

module.exports = router
