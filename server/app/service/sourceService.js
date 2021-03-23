const sourceDao = require("../dao/sourceDao");
const crudUtil = require('../util/crudUtil')

module.exports = {
  save: async (date) => {
    date.userId = date._id
    delete(date._id)
    const res = await sourceDao.save(date);
    if (!res) return crudUtil.SAVE_ERR
    return crudUtil.SAVE_SUCCESS
  },
  findById: async (id) => {
    const res = await sourceDao.findOne(id);
    if(!res) return crudUtil.FIND_ERR
    return crudUtil.FIND_SUCCESS(res)
  },
  findByIdAndUpdate: async (body) => {
    const { _id,...date} = body;
    const res = await sourceDao.findByIdAndUpdate(_id,date);
    if (!res) {
      return crudUtil.UPDATE_ERR
    }
    return crudUtil.UPDATE_SUCCESS
  },
};
