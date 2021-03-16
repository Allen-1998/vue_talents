const Source = require("../model/Source");

module.exports = {
    save : async date => new Source(date).save(),
    findById : async id => Source.findById (id),
    findByIdAndUpdate : async (_id,date) => Source.findByIdAndUpdate(_id,date),
}