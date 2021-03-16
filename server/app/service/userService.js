const userDao = require("../dao/userDao");
const { code } = require("../config/key");
const userUtil = require("../util/userUtil");

module.exports = {
  save: async (body) => {
    const user = await userDao.findOne(body.username);
    if (user) return userUtil.USERNAME_ERR;
    body.password = code(body.password);
    await loginDao.save(body);
    return userUtil.REGISTER_SUCCESS;
  },
  findOne: async (body, url) => {
    const { username, password } = body;
    const user = await userDao.findOne(username);
    if (!user) return userUtil.USER_NOTFOUND;
    else if (code(password) !== user.password) return userUtil.PASSWORD_ERR;
    else if (user.status !== 1) return userUtil.STATUS_ERR;
    else if (url === "/admin" && user.role === 2) return userUtil.ROLE_ERR;
    return userUtil.LOGIN_SUCCESS(user);
  },
  findByIdAndUpdate: async (body) => {
    const { _id, ...date } = body;
    const user = await userDao.findByIdAndUpdate(_id, date);
    if (!user) {
      return crudUtil.UPDATE_ERR;
    }
    return crudUtil.UPDATE_SUCCESS;
  },
  findById: async (_id, oldPassword) => {
    const user = await userDao.findById(_id);
    if (!user) return userUtil.USER_NOTFOUND;
    else if (code(oldPassword) !== user.password) return userUtil.PASSWORD_ERR;
    return;
  },
};
