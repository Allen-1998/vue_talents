//用户数据库模型
const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const UserSchema = new Schema({
  //用户名
  username: { type: String, require: true },
  //密码
  password: { type: String, require: true },
  //昵称
  nickname: { type: String, require: true },
  //身份：1->管理员，2->普通用户
  role: { type: Number, default: 2 },
  //状态：1->正常，0->禁用
  status: { type: Number, default: 1 },
});

const User = model("User", UserSchema);

module.exports = User;
