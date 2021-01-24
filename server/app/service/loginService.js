const loginDao = require("../dao/loginDao");
const { code } = require("../config/key");
const loginUtil = require('../util/loginUtil')

module.exports = {
  findOne: async body => {
    const { username, password } = body;
    const user = await loginDao.findOne(username);
    if (!user)
      return loginUtil.USER_NOTFOUND
    else if (code(password) !== user.password)
      return loginUtil.PASSWORD_ERR
    else if (user.status !== 1)
      return loginUtil.STATUS_ERR
    return loginUtil.LOGIN_SUCCESS(user)
  },
};
