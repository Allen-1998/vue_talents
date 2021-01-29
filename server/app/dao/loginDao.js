const User = require("../model/User");

module.exports = {
    findOne : async username => User.findOne({ username: username }),
    addOne : async username => new User(username).save()
}