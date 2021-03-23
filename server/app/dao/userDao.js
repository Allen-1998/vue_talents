const User = require("../model/User");

module.exports = {
  save: (user) => new User(user).save(),
  findById: (_id) => User.findById(_id),
  findOne: (username) => User.findOne({ username }),
  findByIdAndUpdate: (_id, date) => User.findByIdAndUpdate(_id, date),
  getTotal: (username) => User.countDocuments({ role: "2" , username: { $regex: username, $options: "$i" }}),
  findUsers: (page, limit, username) =>
    User.find({ role: "2", username: { $regex: username, $options: "$i" } })
      .skip((page - 1) * limit)
      .limit(limit),
};
