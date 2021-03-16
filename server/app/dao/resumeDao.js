const Resume = require("../model/Resume");

module.exports = {
    save : async date => new Resume(date).save(),
    findOne : async userId => Resume.findOne ({userId}),
    findByIdAndUpdate : async (_id,date) => Resume.findByIdAndUpdate(_id,date),
}