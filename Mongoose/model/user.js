var mongoose = require("mongoose")

var Schema = mongoose.Schema

var userModel = new Schema({
    name: String,
    age: Number,
    city: String
})

module.exports = mongoose.model("user", userModel)