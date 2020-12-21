//用户路由
const express = require("express");
const md5 = require("blueimp-md5");
const jwt = require("jsonwebtoken");
const User = require("../model/User");
const { secret } = require("../config/key");
const router = express.Router();

//定义md5三重加密方法
code = (val) => {
  return md5(md5(val) + "ice");
};

//验证身份中间件
const rank = async (req, res, next) => {
  //获取token
  const token = req.headers.authorization.split(" ").pop();
  const { _id, username } = jwt.verify(token, secret);
  //查询用户是否存在
  const user = await User.findById(_id);
  if (!user) return res.status(422).send("token验证失败！");
  if (username !== user.username)
    return res.status(422).send("token验证失败！");
  if (user.rank === 1) return next();
  else return res.status(409).send("没有权限！");
};

//获取用户列表
router.get("/", rank, async (req, res) => {
  const list = await User.find();
  res.send(list);
});

//注册
router.post("/register", async (req, res) => {
  //查询用户名是否已经存在
  const user = await User.findOne({ username: req.body.username });
  if (user) return res.status(409).send("该用户已存在！");
  req.body.password = code(req.body.password);
  //将用户信息能存储到数据库中
  const newUser = await new User(req.body).save();
  res.send(newUser);
});

//登录
router.post("/login", async (req, res) => {
  //查询用户是否存在
  const user = await User.findOne({ username: req.body.username });
  if (!user) return res.status(422).send("该用户不存在！");
  //验证密码
  if (code(req.body.password) !== user.password)
    return res.status(422).send("密码错误！");
  // 返回token
  const { _id, username } = user;
  const token = jwt.sign({ _id, username }, secret, { expiresIn: "24h" });
  res.send(token);
});

//验证
router.post("/verify", async (req, res) => {});

module.exports = router;
