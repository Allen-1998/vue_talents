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
  try {
    //获取token
    const token = req.headers.authorization.split(" ").pop();
    const { _id, username } = jwt.verify(token, secret);
    //查询用户是否存在
    const user = await User.findById(_id);
    if (!user)
      return res.json({
        status: 422,
        message: "token验证失败！",
      });
    if (username !== user.username)
      return res.json({
        status: 422,
        message: "token验证失败！",
      });
    if (user.rank !== 1)
      return res.json({
        status: 409,
        message: "没有权限！",
      });
    return next();
  } catch (err) {
    return next(err);
  }
};

//获取用户列表
router.get("/", rank, async (req, res) => {
  try {
    const list = await User.find();
    return res.send(list);
  } catch (err) {
    return next(err);
  }
});

//注册
router.post("/register", async (req, res, next) => {
  try {
    //查询用户名是否已经存在
    const user = await User.findOne({ username: req.body.username });
    if (user)
      return res.json({
        status: 409,
        message: "该用户已存在！",
      });
    req.body.password = code(req.body.password);
    //将用户信息能存储到数据库中
    await new User(req.body).save();
    return res.json({
      status: 200,
      message: "注册成功！",
    });
  } catch (err) {
    return next(err);
  }
});

//登录
router.post("/login", async (req, res, next) => {
  try {
    //查询用户是否存在
    const user = await User.findOne({ username: req.body.username });
    if (!user)
      return res.json({
        status: 422,
        message: "用户不存在！",
      });
    //验证密码
    if (code(req.body.password) !== user.password)
      return res.json({
        status: 422,
        message: "密码错误！",
      });
    // 返回token
    const { _id, username } = user;
    const token = jwt.sign({ _id, username }, secret, { expiresIn: "24h" });
    return res.json({
      status: 200,
      message: "登录成功！",
      token: token,
      data: user,
    });
  } catch (err) {
    return next(err);
  }
});

//验证
router.post("/verify", async (req, res, next) => {});

module.exports = router;
