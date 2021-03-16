const User = require("../model/User");

module.exports = {
    findByIdAndUpdate : async (_id,date) => User.findByIdAndUpdate(_id,date),
    findOne : async username => User.findOne({ username }),
    save : async user => new User(user).save(),
    findById: async (_id) => User.findById(_id),
}