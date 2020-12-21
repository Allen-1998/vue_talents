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
  rank: { type: Number, default: 2 },
});

const User = model("User", UserSchema);

module.exports = User;
