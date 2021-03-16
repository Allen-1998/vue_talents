const Job = require("../model/Job");

module.exports = {
    save : async date => new Job(date).save(),
    findById : async id => Job.findById (id),
    findByIdAndUpdate : async (_id,date) => Job.findByIdAndUpdate(_id,date),
}