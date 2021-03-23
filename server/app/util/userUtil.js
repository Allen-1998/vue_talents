const jwt = require("jsonwebtoken");
const { secret } = require('../config/key')

module.exports = {
  USER_NOTFOUND: { status: 422, message: "用户不存在！" },
  PASSWORD_ERR: { status: 423, message: "密码错误！" },
  STATUS_ERR: { status: 409, message: "没有登录权限！" },
  ROLE_ERR: { status: 408, message: "身份验证失败！" },
  USERNAME_ERR : { status: 422, message: "该用户已存在！" },
  REGISTER_SUCCESS : { status: 200, message: "注册成功！"},
  UPDATE_ERR : { status: 422, message: "修改失败！"},
  UPDATE_SUCCESS : { status: 200, message: "修改成功！"},
  LOGIN_SUCCESS: (data) => {
    const { _id, username } = data;
    const token = jwt.sign({ _id, username }, secret, { expiresIn: "24h" });
    return {
      status: 200,
      message: "登录成功！",
      token,
      data,
    };
  },
  FIND_SUCCESS: (data) =>{
    return{
      status:200,
      data,
    }
  },
};
