const Resume = require("../model/Resume");

module.exports = {
  save: (date) => new Resume(date).save(),
  findOne: (userId) => Resume.findOne({ userId }),
  findByIdAndUpdate: (_id, date) => Resume.findByIdAndUpdate(_id, date),
};
