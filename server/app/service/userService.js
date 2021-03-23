const userDao = require("../dao/userDao");
const { code } = require("../config/key");
const userUtil = require("../util/userUtil");

module.exports = {
  save: async (body) => {
    const user = await userDao.findOne(body.username);
    if (user) return userUtil.USERNAME_ERR;
    body.password = code(body.password);
    await userDao.save(body);
    return userUtil.REGISTER_SUCCESS;
  },
  findOne: async (body) => {
    const { username, password,role } = body;
    const user = await userDao.findOne(username);
    if (!user) return userUtil.USER_NOTFOUND;
    else if (code(password) !== user.password) return userUtil.PASSWORD_ERR;
    else if (user.status !== 1) return userUtil.STATUS_ERR;
    else if (role !== user.role) return userUtil.ROLE_ERR;
    return userUtil.LOGIN_SUCCESS(user);
  },
  findByIdAndUpdate: async (body) => {
    const { _id, ...date } = body;
    const user = await userDao.findByIdAndUpdate(_id, date);
    if (!user) {
      return userUtil.UPDATE_ERR;
    }
    return userUtil.UPDATE_SUCCESS;
  },
  findById: async (_id, oldPassword) => {
    const user = await userDao.findById(_id);
    if (!user) return userUtil.USER_NOTFOUND;
    else if (code(oldPassword) !== user.password) return userUtil.PASSWORD_ERR;
    return;
  },
  findUsers: async (data) => {
    const {page,limit,username} = data
    const total = await userDao.getTotal(username);
    if (!total) return userUtil.FIND_SUCCESS({total})
    const list = await userDao.findUsers(page, limit, username);
    return userUtil.FIND_SUCCESS({total,list})
  },
};
