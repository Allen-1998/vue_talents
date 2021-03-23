//用户数据库模型
const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const UserSchema = new Schema({
  //用户名
  username: { type: String, require: true },
  //密码
  password: { type: String, require: true },
  //身份：1->管理员，2->普通用户
  role: { type: String, default: '2' },
  //状态：1->正常，0->禁用
  status: { type: Number, default: 1 },
  //性别 1->男，0->女
  sex: { type: String, default: '1' },
  //注册日期
  date:{ type: Number, default: new Date() },
  //昵称
  nickname:{ type: String, default: '' },
  //电子邮箱
  email:{ type: String, default: '' },
  //简介
  introduction:{ type: String, default: '这个人太懒了，什么也没有写...' },
});

const User = model("User", UserSchema);

module.exports = User;
