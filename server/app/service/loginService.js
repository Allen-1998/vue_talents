const loginDao = require("../dao/loginDao");
const { secret, code } = require("../config/key");
const jwt = require("jsonwebtoken");

module.exports = {
  findOne: async body => {
    const { username, password } = body;
    const user = await loginDao.findOne(username);
    if (!user)
      return { status: 422, message: "用户不存在！" };
    else if (code(password) !== user.password)
      return { status: 423, message: "密码错误！" };
    else if (user.status !== 1)
      return { status: 409, message: "没有登录权限！" };
    const { _id, username: name } = user;
    const token = jwt.sign({ _id, name }, secret, { expiresIn: "24h" });
    return {
      status: 200,
      message: "登录成功！",
      token: token,
      data: user,
    };
  },
};
