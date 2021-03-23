const Source = require("../model/Source");

module.exports = {
  save: (date) => new Source(date).save(),
  findOne: (userId) => Source.findOne({ userId }),
  findByIdAndUpdate: (_id, date) => Source.findByIdAndUpdate(_id, date),
};
