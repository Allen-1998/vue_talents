const jwt = require("jsonwebtoken");
const { secret } = require('../config/key')

module.exports = {
  USER_NOTFOUND: { status: 422, message: "用户不存在！" },
  PASSWORD_ERR: { status: 423, message: "密码错误！" },
  STATUS_ERR: { status: 409, message: "没有登录权限！" },
  ROLE_ERR: { status: 408, message: "身份验证失败！" },
  LOGIN_SUCCESS: (user) => {
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
