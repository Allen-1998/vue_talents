const loginDao = require("../dao/loginDao");
const { code } = require("../config/key");
const registerUtil = require('../util/registerUtil')

module.exports = {
  findOne: async (body) => {
    const user = await loginDao.findOne(body.username);
    if (user) return registerUtil.USERNAME_ERR
    body.password = code(body.password);
    await loginDao.addOne(body);
    return registerUtil.REGISTER_SUCCESS
  },
};
