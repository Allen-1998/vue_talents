const User = require("../model/User");

module.exports = {
    findOne : async username => User.findOne({ username: username }),
    addOne : async body => new User(body).save
}