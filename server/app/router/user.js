//用户路由
const express = require("express");
const jwt = require("jsonwebtoken");
const User = require("../model/User");
const { secret, code } = require("../config/key");
const role = require("../middlewares/role");
const router = express.Router();

//获取用户列表
router.get("/list", role, async (req, res) => {
  try {
    const list = await User.find();
    return res.json({
      status: 200,
      message: "查询成功！",
      data: list,
    });
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
      return res.status(409).json({
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
      return res.status(422).json({
        status: 422,
        message: "用户不存在！",
      });
    //验证密码
    if (code(req.body.password) !== user.password)
      return res.status(422).json({
        status: 422,
        message: "密码错误！",
      });
    //验证用户状态
    if (user.status !== 1)
      return res.status(409).json({
        status: 409,
        message: "没有登录权限！",
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
