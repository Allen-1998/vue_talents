const Job = require("../model/Job");

module.exports = {
  save: (date) => new Job(date).save(),
  findOne: (userId) => Job.findOne({ userId }),
  findByIdAndUpdate: (_id, date) => Job.findByIdAndUpdate(_id, date),
};
